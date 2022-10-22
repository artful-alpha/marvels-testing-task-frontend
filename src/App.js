import AllHero from "./Components/AllHeroes/AllHero";
import { Route, Routes } from "react-router-dom";
import HeroPage from "./Components/HeroPage.jsx/HeroPage";
import { Link } from "react-router-dom";
import AddHero from "./Components/AddHero/AddHero";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Link to='/'>
          <h1 className='text-center mt-3 text-danger'>Marvel Heroes</h1>
        </Link>
        <Link to='/hero/add'>
          <button type='button' className='btn btn-primary'>
            Add Hero
          </button>
        </Link>

        <div className='row mt-3'>
          <div className='col'>
            <Routes>
              <Route path='/' element={<AllHero />} />
              <Route path='/hero/:id' element={<HeroPage />} />
              <Route path='/hero/:id/edit' element={<AddHero />} />
              <Route path='/hero/add' element={<AddHero />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
