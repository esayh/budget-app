import Transaction from './Transaction'

const Transactions = ({ transactions }) => {
  let total = 0
  for(let i = 0; i < transactions.length; i++) {
    total += Number(transactions[i].amount)
    console.log(transactions[i])
  }

  return (
		<div className='Transactions'>
			<h1 className='mt-4'>{`Bank Account Total : $${total.toLocaleString()}`}</h1>
			{transactions.map((transaction, index) => {
				return <Transaction key={index} transaction={transaction} index={index} />
			})}
		</div>
  )
};

export default Transactions;