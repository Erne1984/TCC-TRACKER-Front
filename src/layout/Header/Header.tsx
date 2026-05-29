import Logo from "../../assets/BRANDMARK_TG_TRACKER.png";
import { StudentMenu } from "../../features/Student/components/StudentMenu/StudentMenu";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.logo_container}>
        <img src={Logo} alt="TG Tracker" />
      </div>

      <StudentMenu />
    </header>
  );
}