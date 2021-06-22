import { useState, useEffect } from 'react'
import { Link, useHistory, useParams, withRouter } from 'react-router-dom';
import axios from 'axios'
import { apiURL } from '../util/apiURL'
import { Jumbotron, Container } from 'react-bootstrap';

const API_BASE = apiURL()

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState([])
  let { index } = useParams()

  let history = useHistory()

  useEffect(() => {
    axios
    .get(`${API_BASE}/transactions/${index}`)
    .then((res) => {
      const { data } = res
      console.log(data)
      setTransaction(data)
    })
  }, [index, history])
  return (
		<Container className='p-3'>
			<Jumbotron>
				<h1 className='header text-center'>Transaction Details</h1>
			</Jumbotron>
			<Jumbotron className='text-center'>
				<h4>Date: {transaction.date}</h4>
				<p>Name: {transaction.name}</p>
				<p>Amount: ${transaction.amount}</p>
				<p>From: {transaction.from}</p>
			<Link to={`/transactions`}>
				<button>Back</button>
			</Link>
			</Jumbotron>
		</Container>
  )
};

export default withRouter(TransactionDetails);