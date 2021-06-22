import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<Navbar bg='dark' expand='lg'>
					<Nav.Link as={NavLink} to=''>Home</Nav.Link>
					<Nav.Link as={NavLink} to='/transactions'>Save-it!</Nav.Link>
					<Nav.Link as={NavLink} to='/transactions/new'>Add New Transaction</Nav.Link>
		</Navbar>
	)
}

export default NavBar
