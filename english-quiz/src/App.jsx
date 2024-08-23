import { Route, Routes } from "react-router-dom"
import Page from "./components/Page"
import Quiz from "./components/Quiz"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/results" element={<Page />} />
      </Routes>

    </>
  )
}

export default App
