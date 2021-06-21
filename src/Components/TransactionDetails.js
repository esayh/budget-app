import { useState, useEffect } from 'react'
import { Link, useHistory, useParams, withRouter } from 'react-router-dom';
import axios from 'axios'
import { apiURL } from '../util/apiURL'

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
    <article>
      <h1>Transaction Details</h1>
      <h4>{transaction.date}</h4>
      <p>{transaction.name}</p>
      <p>{transaction.amount}</p>
      <p>{transaction.from}</p>
      <Link to={`/transactions`}>
        <button>Back</button>
      </Link>
    </article>
  );
};

export default withRouter(TransactionDetails);