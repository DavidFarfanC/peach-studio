import styles from './ValueCard.module.css';

const ValueCard = ({ title, description, icon }) => {
  return (
    <div className={`card-surface ${styles.card} reveal`}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p className="lead">{description}</p>
    </div>
  );
};

export default ValueCard;
