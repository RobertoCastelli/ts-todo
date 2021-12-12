import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Shop } from "./components/Shop"
import { AreaRiservata } from "./components/AreaRiservata"
import { Contacts } from "./components/Contacts"
import { Tour } from "./components/Tour"

function App() {
  return (
    <div className="container">
      <div className="content">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/areariservata" element={<AreaRiservata />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Router>
        <Tour />
      </div>
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
