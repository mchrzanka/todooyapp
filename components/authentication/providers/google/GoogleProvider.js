import Image from 'next/image';
import { Router, useRouter } from 'next/dist/client/router';
import { auth } from 'lib/firebase';
import { useAuth } from 'lib/hooks/useAuth';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { useState } from 'react';

import { ProviderButton } from 'ui/buttons';
import google from './google.png';

function GoogleProvider({ children, ...props }) {
	const provider = new GoogleAuthProvider();
	const router = useRouter();

	//call an observer that's listening for any changes in the user state. If there is a change, it will update the user (either null or assigned a value).
	const user = useAuth();

	//we call useState from react and it will tell us if the user has signed in or not. We create 2 "helpers", so the first is checking if the user is valid (the google sign in will return either successful sign in or an error), and the second is the actual method that will update the state. We use the useState hook, and set it's initial value to null (no user).
	const [isValidUser, setIsValidUser] = useState(null);

	//when the button is clicked, the handleClick calls this function. Inside, we set the value of setIsValidUser based on what we get back from the google login. If it is a valid user (not null), we pass the user off to the todo page.
	async function requestLogin() {
		setIsValidUser(await signInWithPopup(auth, provider));
	}

	//on sign in with google button click function
	function handleClick() {
		requestLogin();
	}

	if (isValidUser) {
		router.push('/todo');
	}

	return (
		<ProviderButton onClick={handleClick} {...props}>
			<div>
				<Image
					src={google}
					layout='fixed'
					width={24}
					height={24}
					quality={30}
				/>
				<span>{children}</span>
			</div>
		</ProviderButton>
	);
}

export default GoogleProvider;
