import { Link } from 'react-router-dom'

const Transaction = ({ transaction, index }) => {
	return (
    <div className='Transaction'>
      {transaction.date}{' '}
			<Link to={`transactions/${index}`}>{transaction.name} </Link>
			{' '} ${transaction.amount.toLocaleString()}
		</div>
	)
}

export default Transaction