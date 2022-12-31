// import logo from './logo.svg';
import './App.css';
import Products from './Components/Body/Products/Products';
// import Footer from './Components/Footer/Footer';
import { FooterTwo } from './Components/Footer/FooterTwo';
import CustomCarousel from './Components/Header/Custom Carousel/CustomCarousel';
import NavigationBar from './Components/Header/Navigation Bar/NavigationBar';

function App() {
  return (
<div className = "App">
  
      <NavigationBar/>
      <CustomCarousel/>

      <br/>
      <br/>
      <Products/>
      {/* <Footer/> */}
      {/* <FooterTwo/> */}
      


    </div>
  );
}

export default App;
