
import { createRoot } from 'react-dom/client'


import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import MainContent from './components/MainContent.jsx';

createRoot(document.getElementById('root')).render(
  <>
  <Navigation/>
  
  <MainContent/>


  <Footer/>
  </>
)
