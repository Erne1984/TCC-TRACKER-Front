import { Link } from "react-router-dom";
import { User } from "lucide-react";

import { useUserMenu } from "../hooks/useUserMenu";
import styles from "./StudentMenu.module.css";


export function StudentMenu() {
    const { isOpen, setIsOpen, ref } = useUserMenu();
  return (
<div
      className={styles.container}
      ref={ref}
    >
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
      >
        <User size={20} />
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <Link to="/profile">
            Perfil
          </Link>

          <Link to="/settings">
            Configurações
          </Link>

          <button>
            Sair
          </button>
        </div>
      )}
    </div>
  );
}