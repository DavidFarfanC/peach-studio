import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logo}>PEACH STUDIO</div>
        <div className={styles.links}>
          <NavLink to="/" className={styles.link}>
            Studio
          </NavLink>
          <NavLink to="/flowers" className={styles.link}>
            Peach Flowers
          </NavLink>
          <NavLink to="/care" className={styles.link}>
            Peach Care
          </NavLink>
          <a href="#contacto" className={styles.link}>
            Contacto
          </a>
          <a href="#" className={styles.link}>
            Instagram
          </a>
        </div>
        <div className={styles.meta}>© PEACH STUDIO. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;
