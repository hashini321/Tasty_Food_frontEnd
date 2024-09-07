import './App.css';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import CustomerRouters from './Routers/CustomerRouters';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authontication/Action';
import { findCart } from './component/State/Cart/CartAction';




function App() {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt ));
    dispatch(findCart(jwt))
  },[auth.jwt])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      
      <CustomerRouters/>

    </ThemeProvider>
    
  );
}

export default App;

