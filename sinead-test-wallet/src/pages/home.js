import '../App.css';

import UsersList from '../components/users';
import ConnectWallet from '../components/connectWallet';

function Home() {
  return (
    <>
    <div className="App">

      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <ConnectWallet/>
        <p className="text-3xl text-gray-700 font-bold mb-5">
          User List
        </p>
        <UsersList/>
      </div>
    </div>
    </>
  );
}

export default Home;
