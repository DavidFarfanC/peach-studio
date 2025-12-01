import styles from './Modal.module.css';

const Modal = ({ title, description, onClose }) => {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-card">
        <div className={styles.header}>
          <h3>{title}</h3>
          <button className={styles.close} onClick={onClose} aria-label="Cerrar">
            ×
          </button>
        </div>
        <p className="lead" style={{ marginTop: '6px' }}>
          {description}
        </p>
        <div className={styles.placeholder}>
          <div className={styles.pattern} />
          <span>Imagen de referencia</span>
        </div>
        <div style={{ marginTop: '12px' }}>
          <button className="btn outline" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
