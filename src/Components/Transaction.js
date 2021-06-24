import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const Transaction = ({ transaction, index }) => {
	return (
		<Table>
			<thead>
				<tr>
					<th className='col-5'>Date</th>
					<th className='col-5'>Name</th>
					<th className='col-2 '>Amount</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{transaction.date}</td>
					<td>
						<Link to={`transactions/${index}`}>{transaction.name}</Link>
					</td>
					{transaction.amount > 0 ? <td className='text-success'>${transaction.amount}</td> : <td className='text-danger'>${transaction.amount}</td>}
					{/* <td>${transaction.amount}</td> */}
				</tr>
			</tbody>
		</Table>
	)
}

export default Transaction
