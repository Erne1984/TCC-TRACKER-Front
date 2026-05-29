

import { useParams } from "react-router-dom";
import { Header } from "../../layout/Header/Header";
import styles from "./StudentPage.module.css";

export function StudentPage() {
    const { id } = useParams();
  return (
    <div className={styles.login_container}>

        <Header/>


        <p>aluno: {id}</p>

    </div>
  );
}
