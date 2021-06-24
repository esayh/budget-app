import Transaction from './Transaction'

const Transactions = ({ transactions }) => {
	let total = 0
	for (let i = 0; i < transactions.length; i++) {
		total += Number(transactions[i].amount)
		console.log(transactions[i])
	}

	return (
		<div className='Transactions'>
			{total > 1000 ? (
				<h1 style={{ color: 'green' }}>
					<span style={{ color: 'black', textDecoration: 'underline' }}>
						Bank Account Total:
					</span>{' '}
					${total.toLocaleString('en-US', {minimumFractionDigits: 2} )}
				</h1>
			) : (
				<h1 style={{ color: 'red' }}>
					<span style={{ color: 'black', textDecoration: 'underline' }}>
						Bank Account Total:
					</span>{' '}
					${total}
				</h1>
			)}
			{transactions.map((transaction, index) => {
				return <Transaction key={index} transaction={transaction} index={index} />
			})}
		</div>
	)
}

export default Transactions
