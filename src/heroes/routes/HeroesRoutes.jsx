import { Routes, Route } from "react-router-dom";
import { Navbar } from "../../UI/components/NavBar";
// import { DcPage } from "../pages/DcPage";
// import { MarvelPage } from "../pages/MarvelPage";
import {DcPage,MarvelPage,SearchPage,HeroPage} from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          {/* <Route path="/*" element={<LoginPage />} /> */}
          <Route path="dc" element={<DcPage />} />
          <Route path="marvel" element={<MarvelPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

        </Routes>
      </div>
    </>
  );
};
