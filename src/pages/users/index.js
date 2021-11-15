import PropTypes from 'prop-types';

export const getStaticProps = async () => {

	const response = await fetch( 'https://jsonplaceholder.typicode.com/users' );
	const users = await response.json();

	return {
		props: {
			users,
		},
	}
}

const Index = ( { users } ) => (
	<div>
		<h1>Пользователи</h1>
		<ul>
			{ users.map( user => (
				<li key={ user.id }>{ user.name }</li>
			) ) }
		</ul>
	</div>
)

Index.propTypes = {
	users: PropTypes.arrayOf( {} ).isRequired,
};

export default Index;
