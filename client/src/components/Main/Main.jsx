
import Services from './Services';
import Slider from './Slider';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Header from '../Header';
import Footer from '../Footer';
function Main() {
    return (
        <div>
          <Header/>
      <Slider/>
      <AboutUs/>
      <Services/>
      <Contact/>
      <Footer/>
        </div>
    )
}

export default Main
