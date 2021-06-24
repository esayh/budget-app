import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const Transaction = ({ transaction, index }) => {
	return (
		<Container>
			<Row>
				<Col xs={5}>{transaction.date}</Col>
				<Col xs={6}>
					<Link to={`transactions/${index}`}>{transaction.name}</Link>
				</Col>
				<Col>${transaction.amount}</Col>
			</Row>
		</Container>

		// <div className='Transaction'>
		// 	{transaction.date} <Link to={`transactions/${index}`}>{transaction.name} </Link> $
		// 	{transaction.amount.toLocaleString()}
		// </div>
	)
}

export default Transaction
