import styles from './ContactBlock.module.css';

const ContactBlock = ({ title, description, ctaLabel = 'Enviar', id = 'contacto' }) => {
  return (
    <section className={`section ${styles.sectionPad}`} id={id}>
      <div className={`container ${styles.outer}`}>
        <div className={`${styles.shell} reveal`}>
          <div>
            <div className="tag">Contacto</div>
            <h2>{title}</h2>
            <p className="lead">{description}</p>
          </div>
          <form className={styles.form}>
            <label>
              Nombre
              <input type="text" name="name" placeholder="Tu nombre" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="nombre@email.com" />
            </label>
            <label>
              Mensaje
              <textarea name="message" rows="3" placeholder="Cuéntanos qué necesitas" />
            </label>
            <button type="submit" className="btn">
              {ctaLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
