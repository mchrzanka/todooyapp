import { useRouter } from 'next/dist/client/router';
import { useAuth } from 'lib/hooks/useAuth';
import { signOut } from '@firebase/auth';

import { auth } from 'lib/firebase';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { LoginStatus } from './styles';

function UserLoginStatus({ size, color, status, ...props }) {
	const user = useAuth();
	const router = useRouter();

	function handleClick() {
		//sign the user out
		signOut(auth).then(() => {
			//return user to home page
			router.push('/');
			console.log(1);
		});
	}

	if (!user) {
		return (
			<LoginStatus bgcolor='#d6fecd' onClick={handleClick}>
				<IoPersonCircleSharp size={size || '1.75rem'} />
				<figcaption>
					<p>Status</p>
					<p>Logout</p>
				</figcaption>
			</LoginStatus>
		);
	}

	return (
		<LoginStatus>
			<IoPersonCircleSharp size={size || '1.75rem'} />
			<figcaption>
				<p>Status</p>
				<p>please login</p>
			</figcaption>
		</LoginStatus>
	);
}

export default UserLoginStatus;
