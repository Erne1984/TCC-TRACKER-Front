import styles from "./LoginForm.module.css";

import logoLogin from "../../../../assets/LOGO_TG_TRACKER.png";
import logoFatec from "../../../../assets/LOGO_FATEC.png";
import logoCPS from "../../../../assets/LOGO_CPS.png";

import { Eye, EyeOff } from "lucide-react";

import { useState } from "react";

export function LoginForm() {

    const [showPassword, setShowPassword] = useState(false);

    function handleTogglePassword() {
        setShowPassword((prevState) => !prevState);
    }

    return (
        <div className={styles.container}>

            <form className={styles.form}>

                <nav className={styles.formHeader}>

                    <div className={styles.mainLogo}>
                        <img
                            src={logoLogin}
                            alt="Logo TG Tracker"
                        />
                    </div>

                    <div className={styles.partnerLogos}>

                        <img
                            src={logoFatec}
                            alt="Logo Fatec"
                        />

                        <img
                            src={logoCPS}
                            alt="Logo CPS"
                        />

                    </div>

                </nav>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>

                    <input
                        id="email"
                        type="email"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="password">Senha</label>

                    <div className={styles.passwordWrapper}>

                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                        />

                        {
                            showPassword ? (
                                <EyeOff
                                    size={20}
                                    className={styles.eyeIcon}
                                    onClick={handleTogglePassword}
                                />
                            ) : (
                                <Eye
                                    size={20}
                                    className={styles.eyeIcon}
                                    onClick={handleTogglePassword}
                                />
                            )
                        }

                    </div>
                </div>

                <div className={styles.keepConnectedCheckbox}>

                    <input
                        id="keepConnected"
                        type="checkbox"
                    />

                    <label htmlFor="keepConnected">
                        Mantenha-me conectado
                    </label>

                </div>

                <div className={styles.submitContainer}>

                    <button
                        type="submit"
                        className={styles.submitButton}
                    >
                        Entrar
                    </button>

                    <p className={styles.forgotPassword}>
                        Esqueci minha senha
                    </p>

                </div>

            </form>

        </div>
    );
}