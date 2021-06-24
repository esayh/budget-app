//Dependencies
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from './util/apiURL'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//Pages
import Home from './Pages/Home'
import Index from './Pages/Index'
import New from './Pages/New'
import Show from './Pages/Show'

//Components
import NavBar from './Components/Navbar'

const API_BASE = apiURL()
const App = () => {
	const [transactions, setTransactions] = useState([])

	const addTransaction = (newTransaction) => {
		axios.post(`${API_BASE}/transactions`, newTransaction).then((res) => {
			return axios.get(`${API_BASE}/transactions`).then((res) => {
				setTransactions(res.data)
			})
		})
	}

	useEffect(() => {
		axios.get(`${API_BASE}/transactions`).then((res) => {
			const { data } = res
			setTransactions(data)
		})
	}, [])

	return (
		<Container>
			<NavBar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/transactions'>
					<Index transactions={transactions} />
				</Route>
				<Route path='/transactions/new'>
					<New addTransaction={addTransaction} />
				</Route>
				<Route exact path='/transactions/:index'>
					<Show transactions={transactions} />
				</Route>
			</Switch>
		</Container>
	)
}

export default App
