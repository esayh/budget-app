import Transactions from '../Components/Transactions'

const Index = ({ transactions }) => {
  return (
    <div>
      <Transactions transactions={transactions}/>
    </div>
  );
};

export default Index;