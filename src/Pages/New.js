import TransactionsNewForm from "../Components/TransactionsNewForm";

const New = ({ addTransaction }) => {
  return (
    <div className='New'>
      <TransactionsNewForm addTransaction={addTransaction}/>
    </div>
  );
};

export default New;