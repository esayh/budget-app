import { useState } from 'react'
import { withRouter } from 'react-router-dom';

const TransactionsNewForm = (props) => {
  const [transactions, setTransactions] = useState({
		date: '',
		name: '',
		amount: 0,
		from: '',
  })

  const handleTextChange = (e) => {
    setTransactions({ ...transactions, [e.target.id]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTransaction(transactions)
    props.history.push('/transactions')
  }


  return (
    <div className='New'>
      <h1 className='mt-4'>Add a New Transaction</h1>
      <form onSubmit={handleSubmit} className='mt-5'>
        <label htmlFor='date'>Date</label>
        <input
        id='date'
        value={transactions.date}
        type="text" 
        placeholder='Date'
        onChange={handleTextChange}
        />
        <label htmlFor='name'>Name</label>
        <input
        id='name'
        value={transactions.name}
        type="text" 
        placeholder='Name'
        onChange={handleTextChange}
        />
        <label htmlFor='amount'>Amount</label>
        <input
        id='amount'
        value={transactions.amount}
        type="number" 
        placeholder='Amount'
        onChange={handleTextChange}
        />
        <label htmlFor='from'>From</label>
        <input
        id='from'
        value={transactions.from}
        type="text" 
        placeholder='From'
        onChange={handleTextChange}
        />
        <input type='submit' />
      </form>
    </div>
  );
};

export default withRouter(TransactionsNewForm)