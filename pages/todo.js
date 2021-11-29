import { useAuth } from 'lib/hooks/useAuth';

import { AppBar } from 'components/appbar';
import { Title } from 'ui/title';

function ToDoPage(props) {
	const user = useAuth();

	if (user) {
		return (
			<>
				<AppBar />
				<Title> Render Build The todo List</Title>
			</>
		);
	}

	return (
		<>
			<AppBar />
			<Title> Please Go Away</Title>
		</>
	);
}

export default ToDoPage;
