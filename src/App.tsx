import Header from './Components/Header/Header'
import './App.css'
import Home from './Components/Home/Home'
import Featured from './Components/Featured/Featured'
import Story from './Components/Story/Story'
import Footer from './Components/Footer/Footer'
import NewSletter from './Components/NewsLetter/NewSletter'

function App() {


  return (
    <>
      <Header></Header>
       <main className='main'>
          <Home></Home>
          <Featured></Featured>
          <Story></Story>
          <NewSletter></NewSletter>
       </main>
          <Footer></Footer>
    </>
  )
}

export default App
