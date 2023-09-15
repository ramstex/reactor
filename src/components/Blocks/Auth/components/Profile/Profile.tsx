import classBuilder from '../../../../../plugins/classBuilder';
import useUser from '../../../../../controllers/user/useUser';

// Components
import Col from '../../../../Grid/Col/Col';
import Row from '../../../../Grid/Row/Row';
import Form from '../../../../Ui/Form/Form';
import Button from '../../../../Ui/Button/Button';

// Types
import { IProfileComponent } from './types';

const rootClassName = 'profile';

const Profile: IProfileComponent = ( props ) => {
	const { className } = props;

	const classNames = { root: classBuilder( rootClassName, className ) };

	const {
		user,
		logout,
	} = useUser();
	const isUser = !!user;

	const onLogout = async () => {
		await logout();
	}

	return (
		<Form
			className={ classNames.root }
		>
			<h3>Profile</h3>

			{
				isUser
					? <Row>
						<Col cols={ 2 }>
							<p>Email</p>
						</Col>

						<Col>
							<p>{ user.email }</p>
						</Col>
					</Row>
					: <p>No user</p>
			}

			<Row>
				<Col>
					<Button onClick={ onLogout }>Logout</Button>
				</Col>
			</Row>
		</Form>
	);
}

export default Profile;
