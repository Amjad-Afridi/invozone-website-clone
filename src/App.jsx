import Banner from './components/Banner'
import BusinessStagesComponent from './components/BusinnesStagesComponent'
import Clients from './components/Clients'
import CTABannerComponent from './components/CTABannerComponent'
import Header from './components/Header'
import Logos from './components/Logos'
import SoftwareDevelopmentServices from './components/SoftwareEngineeringServices'
import SuccessStoriesSlider from './components/SuccesStorySlider'
import EngagementModels from './components/EngagementModals';
import IndustriesSlider from './components/IndustriesSlider'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Clients/>
      <hr/>
      <SoftwareDevelopmentServices/>
      <BusinessStagesComponent/>
      <CTABannerComponent/>
      <SuccessStoriesSlider/>
      <Logos />
     < EngagementModels/>
     <IndustriesSlider/>
     <Footer/>
    </>
  )
}

export default App
