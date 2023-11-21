import './App.css'
import { NavBar } from './components/navbar/navbar'
import { Main } from './components/main/main'
import { Footer } from './components/footer/footer'

const App = () => {

  return (
    <div className="app">
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

export { App }