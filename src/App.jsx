import { Route, Routes } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import HomePage from "./pages/HomePage";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/Portfolio" Component={PortfolioPage}></Route>
      </Routes>
    </>
  )
}
