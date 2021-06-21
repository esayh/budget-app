import Transaction from './Transaction'

const Transactions = ({ transactions }) => {
  return (
    <div className='Transactions'>
      {transactions.map((transaction, index) => {
        return <Transaction key={index} transaction={transaction} index={index}/>
      })}
    </div>
  );
};

export default Transactions;