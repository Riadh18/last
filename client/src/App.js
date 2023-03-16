import Nav from './Components/Nav';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Register from './Components/Register';
import PriveteRoute from './Components/PrivetRoute';
import ErrorComponent from './Components/ErrorComponent';
import EditUser from './Components/EditUser';
import ListUser from './Components/ListUser';
import ListProduct from './Components/ListProduct';
import Editproduct from './Components/EditProduct';
import AddProduct from './Components/AddProduct';
import DescProduct from './Components/DescProduct';
import DescProfile from './Components/DescProfile';
import EditProfil from './Components/EditProfile';
import Listcommande from './Components/ListCommande';
import ListMyCommandes from './Components/ListMyCommandes';



function App() {
  return (
    <div>
      <Nav/>   
      <ErrorComponent/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<PriveteRoute><Profile/></PriveteRoute>}/>
        <Route path='/editprofil/:id' element={<EditProfil/>}/> 
        <Route path='/edituser/:id' element={<EditUser/>}/> 
        <Route path='/listuser' element={<ListUser/>}/>
        <Route path='/ListProduct'element={<ListProduct/>}/>
        <Route path='/Editproduct/:id' element={< Editproduct/>}/>
        <Route path='/AddProduct'element={<AddProduct/>}/>
        <Route path='/DescProduct/:id' element={< DescProduct/>}/>
        <Route path='/DescProfile/:id' element={< DescProfile/>}/>
        <Route path='/ListCommande' element={<Listcommande/>}/>
        <Route path='/ListMyCommandes' element={<ListMyCommandes/>}/>


      </Routes>
    </div>
  );
}

export default App;
