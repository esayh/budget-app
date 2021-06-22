import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const TransactionsNewForm = (props) => {
	const [transactions, setTransactions] = useState({
		date: '',
		name: '',
		amount: 0,
		from: '',
	})

	const handleTextChange = (e) => {
		setTransactions({ ...transactions, [e.target.id]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		props.addTransaction(transactions)
		props.history.push('/transactions')
	}

	return (
		<Form  className='mt-5'onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Label>Date</Form.Label>
				<Form.Control
					onChange={handleTextChange}
					type='date'
					id='date'
					value={transactions.date}
				></Form.Control>
			</Form.Group>

			<Form.Group>
				<Form.Label>Name</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter name'
					id='name'
					value={transactions.name}
					onChange={handleTextChange}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Amount</Form.Label>
				<Form.Control
					type='number'
					placeholder='Enter expense/income'
					id='amount'
					value={transactions.amount}
					onChange={handleTextChange}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>From</Form.Label>
				<Form.Control
					type='text'
					placeholder='Description of transaction'
					id='from'
					value={transactions.from}
					onChange={handleTextChange}
				/>
			</Form.Group>
			<Button variant='outline-success' type='submit'>
				Submit
			</Button>
		</Form>
	)
}

export default withRouter(TransactionsNewForm)
