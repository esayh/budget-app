import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<Breadcrumb>
			<BreadcrumbItem>
				<Link style={{ color: '#34d15b' }} to='/'>
					Home
				</Link>
			</BreadcrumbItem>
			<BreadcrumbItem>
				<Link style={{ color: '#13b5ba' }} to='/transactions'>
					Budget App!
				</Link>
			</BreadcrumbItem>
			<BreadcrumbItem>
				<Link style={{ color: 'red' }} to='/transactions/new'>
					Add New Transaction
				</Link>
			</BreadcrumbItem>
		</Breadcrumb>
	)
}

export default Navbar
