import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = ({ title, subtitle, description, actions = [], eyebrow, alignment = 'center' }) => {
  return (
    <section className={`${styles.hero} section`}>
      <div className="container">
        <div className={`${styles.inner} ${styles[alignment]}`}>
          {eyebrow && <div className="tag reveal">{eyebrow}</div>}
          <h1 className={`reveal ${styles.title}`}>{title}</h1>
          {subtitle && <p className={`lead reveal ${styles.subtitle}`}>{subtitle}</p>}
          {description && <p className={`lead reveal ${styles.description}`}>{description}</p>}
          {actions?.length > 0 && (
            <div className={`${styles.actions} reveal`}>
              {actions.map(action => {
                const variant = action.variant ? action.variant : '';
                return action.to ? (
                  <Link key={action.label} to={action.to} className={`btn ${variant}`}>
                    {action.label}
                  </Link>
                ) : (
                  <a key={action.label} href={action.href} className={`btn ${variant}`}>
                    {action.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className={styles.glow} aria-hidden="true" />
    </section>
  );
};

export default Hero;
