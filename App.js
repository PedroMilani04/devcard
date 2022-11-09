import React from "react"
import ReactDOM from "react-dom"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Main from "./components/Main"

function App() {
    return (
        <div className="container">
        <Main />
        <Info />
        <Footer />
        </div>
    )
}

export default App