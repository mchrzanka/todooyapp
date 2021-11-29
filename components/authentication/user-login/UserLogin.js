import { useState } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { useRouter } from 'next/dist/client/router';

import { auth } from 'lib/firebase';
import TextInput from 'ui/forms/TextInput';
import { Button } from 'ui/buttons';
import Login from './styled';

function UserLogin({ ...props }) {
	//set up state so that react can remember what is being typed in. When something is changed in a component, it allows us to easily set a variable in a component.
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	async function handleClick(e) {
		e.preventDefault();
		const isUser = await signInWithEmailAndPassword(auth, email, password);

		if (isUser) {
			router.push('/todo');
		}
	}

	return (
		<>
			<Login {...props} onClick={(e) => handleClick(e)}>
				<TextInput
					label='Email'
					onChange={(e) => setEmail(e.currentTarget.value)}
					id='emailAddress'
					placeholder='janedoe@home.com'
					{...props}
				/>
				<TextInput
					label='Password'
					onChange={(e) => setPassword(e.currentTarget.value)}
					type='password'
					id='emailAddress'
					placeholder='use a secure password'
					{...props}
				/>

				<Button
					bgcolor='#ed4747'
					color='white'
					noBoxShadow
					{...props}
					type='submit'
				>
					LOGIN
				</Button>
			</Login>
		</>
	);
}

export default UserLogin;
