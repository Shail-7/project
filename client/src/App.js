import './App.css';
import { useReducer, createContext, useEffect } from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import UserHome from './Components/UserHome';
import { reducer, initialState } from './reducer/reducer';
import Logout from './Components/Logout';
import MyProjects from './Components/MyProjects';
import CreateProject from './Components/CreateProject';

export const MenuContext = createContext();

function App() {

  // alert("....")
  const checkSession = async () => {
    const res = await fetch('/checksess', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    if (res.status === 200) {
      dispatch({ type: "USER", payload: true });
    } else {
      dispatch({ type: "USER", payload: false });
    }

  }
  useEffect(() => { checkSession() }, []);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <MenuContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/uhome' element={<UserHome />} />
          <Route exact path='/logout' element={<Logout />} />
          <Route exact path='/myprojects' element={<MyProjects />} />
          <Route exact path='/createproject' element={<CreateProject />} />
        </Routes>
      </MenuContext.Provider>
    </>
  );
}

export default App;
