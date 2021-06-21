import { useState } from 'react'
import { useParams } from 'react-router-dom'
import TransactionDetails from "../Components/TransactionDetails";


const Show = ({ transactions }) => {
  let { index } = useParams()
  const transaction = useState(transactions[index])
  
  return (
    <section>
    <TransactionDetails 
    transaction={transaction}
    index={index}
    />      
    </section>
  );
};

export default Show;