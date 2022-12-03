import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import LabelBottomNavigation from './LabelBottomNavigation';

function App() {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <>
    {
      matches ?(<ResponsiveAppBar/>):(<LabelBottomNavigation/>)
      
      
      
    }
      
      
    </>
  );
}

export default App;
