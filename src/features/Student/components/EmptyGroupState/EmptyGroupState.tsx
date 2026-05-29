import styles from "./EmptyGroupState.module.css";

export function EmptyGroupState() {
  return (
    <div className={styles.container_empty}>
      <h2>Você não faz parte de um grupo ainda</h2>

      <p>
        Crie um novo grupo e convide seus colegas
        ou aceite um convite para participar.
      </p>

      <button>Criar Novo Grupo</button>
    </div>
  );
}