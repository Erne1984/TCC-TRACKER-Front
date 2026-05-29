import { LoginForm } from "../../features/Auth/components/LoginForm/LoginForm";

import styles from "./LoginPage.module.css";

export function LoginPage() {
  return (
    <div className={styles.login_container}>
      <LoginForm />
    </div>
  );
}
