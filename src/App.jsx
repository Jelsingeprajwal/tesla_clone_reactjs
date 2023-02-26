import './App.css'
import Header from './components/Header'
import Home from './components/Home'
function App() {
  window.onscroll = (e) => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById('nav').style.backgroundColor = "#e7e4e4";
    }
    else {
      document.getElementById('nav').style.backgroundColor = "transparent";

    }
  }
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App
