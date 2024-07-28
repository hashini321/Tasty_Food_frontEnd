import './App.css';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import CustomerRouters from './Routers/CustomerRouters';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authontication/Action';



function App() {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt ))
  },[auth.jwt])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      
      <CustomerRouters/>

    </ThemeProvider>
    
  );
}

export default App;

