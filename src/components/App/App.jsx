import { useFilmsStore } from "../../services/store";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./App.module.css";
import { useEffect } from "react";

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
          <Main />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
