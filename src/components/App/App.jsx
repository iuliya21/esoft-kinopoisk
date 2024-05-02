import { Routes, Route } from "react-router-dom";
import { useFilmsStore } from "../../services/store";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./App.module.css";
import { useEffect } from "react";
import FilmDetails from "../../pages/FilmDetails/FilmDetails";
import NotFound from "../../pages/NotFound/NotFound";
import SearchPage from "../../pages/SearchPage/SearchPage";

function App() {
  const { fetchFilms } = useFilmsStore();

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  return (
    <>
      <Sidebar />
      <div className={styles.content}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/film/:idFilm" element={<FilmDetails />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
