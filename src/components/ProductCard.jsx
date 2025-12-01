import styles from './ProductCard.module.css';

const ProductCard = ({ name, description, price, onAction }) => {
  return (
    <div className={`card-surface ${styles.card} reveal`}>
      <div className={styles.top}>
        <div className={styles.dot} />
        <span className={styles.price}>{price}</span>
      </div>
      <h3>{name}</h3>
      <p className="lead">{description}</p>
      <div className={styles.actions}>
        <button className="btn outline" onClick={onAction}>
          Ver proceso
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
