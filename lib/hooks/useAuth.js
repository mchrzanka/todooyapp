//hooks start with "use". We are creating this hook to listen for any changes in our application in our authentication state, so that we can allow the user to access the todo app.

// provided with firebase auth, it allows you to see if a user logged in and it provides access to a user object, and if the user logs out it sets that object to null.
import { onAuthStateChanged } from '@firebase/auth';

//useEffect is for anytime you reach outside of our application that's changing. The user is being set from firebase on the internet, so this is an external task.
import { useState, useEffect } from 'react';

import { auth } from 'lib/firebase';

function useAuth() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		//external code checking firebase user. onAuthStateChanged is an observer, meaning that it will send you back a function that gives you access to what is being sent back(in this case a client, or user.)
		onAuthStateChanged(auth, (clientCredential) => {
			if (clientCredential) {
				setUser(clientCredential);
			} else {
				setUser(null);
			}
		});
	});
	return user;
}

export { useAuth };
