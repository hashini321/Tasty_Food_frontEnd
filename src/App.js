import logo from './logo.svg';
import './App.css';
import  { Navbar }  from './component/Navbar/Navbar';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import  { Home }  from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRouters from './Routers/CustomerRouters';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      {/* <Profile/> */}
      <CustomerRouters/>

    </ThemeProvider>
    
  );
}

export default App;

