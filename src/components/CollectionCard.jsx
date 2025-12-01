import styles from './CollectionCard.module.css';

const CollectionCard = ({ title, description, price, onAction }) => {
  return (
    <div className={`card-surface ${styles.card} reveal`}>
      <div className={styles.badge}>Colección</div>
      <div className={styles.figure} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className="lead">{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{price}</span>
          <button className="btn outline" onClick={onAction}>
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
