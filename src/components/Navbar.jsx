import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const links = [
  { to: '/', label: 'Studio' },
  { to: '/flowers', label: 'Peach Flowers' },
  { to: '/care', label: 'Peach Care' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className={styles.shell}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.brand}>
          <span>PEACH STUDIO</span>
        </NavLink>
        <nav className={styles.nav}>
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a href="#contacto" className={styles.link} aria-label="Contacto">
            Contacto
          </a>
        </nav>
        <span className={styles.location}>{location.pathname === '/' ? 'Estudio floral y cuidado de la piel' : 'Estudio'}</span>
      </div>
    </header>
  );
};

export default Navbar;
