import Header from './Components/Header/Header'
import './App.css'
import Home from './Components/Home/Home'
import Featured from './Components/Featured/Featured'

function App() {


  return (
    <>
      <Header></Header>
       <main className='main'>
          <Home></Home>
          <Featured></Featured>
       </main>
    </>
  )
}

export default App
