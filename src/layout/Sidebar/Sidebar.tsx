import { NavLink, useParams } from "react-router-dom";
import { Users } from "lucide-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  const { id } = useParams();

  return (
    <nav className={styles.itens_container}>
      <NavLink
        to={`/student/${id}/groups`}
        className={({ isActive }) =>
          `${styles.item_container} ${
            isActive ? styles.active : ""
          }`
        }
      >
        <Users size={20} />
        <p>Grupos</p>
      </NavLink>
    </nav>
  );
}