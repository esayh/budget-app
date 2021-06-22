import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Link to='/'>Home</Link>
			<Link to='/transactions'>Save-it!</Link>
			<Link to='/transactions/new'>Add New Transaction</Link>
		</Navbar>
	)
}

export default NavBar
