import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { About } from "./components/About"
import { Contacts } from "./components/Contacts"

function App() {
  return (
    <div className="container">
      <div className="content">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App
