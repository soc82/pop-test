import '../App.css';
import { useParams } from "react-router-dom";
import RandomImage from '../components/randomImage';


const UserProfile = (props) => { // <-- props
  let { id } = useParams();
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
         <h1 className="text-3xl text-gray-700 font-bold mb-5">User Page & Random Image for User ID: {id}</h1>
         <RandomImage/>
    </div>
  );
}

export default UserProfile;
