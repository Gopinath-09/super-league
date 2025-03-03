import Footer from "./components/Footer"
import Header from "./components/Header"
import ArticleInfo from "./sections/ArticleInfo"
import Challanges from "./sections/Challanges"
import Contact from "./sections/Contact"
import HeroSection from "./sections/HeroSection"
import OurHonors from "./sections/OurHonors"
import OurMedia from "./sections/OurMedia"

const App = () => {
  return (
    <>
      <Header/>
      <main className="max-w-[1920px] mx-auto overflow-hidden">
        <HeroSection/>
        <Challanges/>
        <ArticleInfo/>
        <OurMedia/>
        <OurHonors/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App