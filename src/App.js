import "./App.css";
import AllHero from "./Components/AllHero/AllHero";
import { Route, Routes } from "react-router-dom";
import HeroPage from "./Components/HeroPage.jsx/HeroPage";
function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='text-center mt-3 text-danger'>Marvel Heroes</h1>
        <div className='row'>
          <div className='col'>
            <Routes>
              <Route path='/' element={<AllHero />} />
              <Route path='/hero/:id' element={<HeroPage />} />
              <Route
                path='/hero/:id/edit'
                element={<div>Hero Edit Page</div>}
              />
              <Route path='/add-hero' element={<div>Add Hero</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
