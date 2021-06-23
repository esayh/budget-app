import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<Navbar bg='dark' expand='lg'>
					<Nav.Link as={NavLink} to=''>Home</Nav.Link>
					<Nav.Link as={NavLink} to='/transactions'>View All Transactions</Nav.Link>
					<Nav.Link as={NavLink} to='/transactions/new'>Add New Transaction</Nav.Link>
		</Navbar>
	)
}
// checking nav

export default NavBar
