import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav mt-5'>
      <h1>
        <Link to='/transactions'>Budget App</Link>
      </h1>
      <button>
        <Link to='/transactions/new'>New Transaction</Link>
      </button>
      {/* <h1>Bank Account Total</h1> */}
    </nav>
  );
};

export default Navbar;