import { Header } from "../Header/Header";
import styles from "./AppLayout.module.css";

type AppLayoutProps = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  aside?: React.ReactNode;
};

export function AppLayout({
  sidebar,
  children,
  aside,
}: AppLayoutProps) {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <aside className={styles.sidebar}>
          {sidebar}
        </aside>

        <section className={styles.content}>
          {children}
        </section>

        {aside && (
          <aside className={styles.rightPanel}>
            {aside}
          </aside>
        )}
      </main>
    </>
  );
}