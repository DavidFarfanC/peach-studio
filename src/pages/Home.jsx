import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ValueCard from '../components/ValueCard';
import ContactBlock from '../components/ContactBlock';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import styles from './Home.module.css';

const Home = () => {
  useRevealOnScroll();

  const values = [
    {
      title: 'Calma diaria',
      description: 'Diseñamos objetos y hábitos de calma para bajar la velocidad.',
      icon: '✺',
    },
    {
      title: 'Diseño consciente',
      description: 'Composiciones, ingredientes y empaques pensados en cada detalle.',
      icon: '✦',
    },
    {
      title: 'Estética de estudio',
      description: 'Luz cálida, texturas suaves y una paleta inspirada en flores reales.',
      icon: '◎',
    },
  ];

  return (
    <div>
      <Hero
        title="PEACH STUDIO"
        subtitle="Momentos de calma entre flores y piel."
        description="PEACH STUDIO es un espacio donde el arte floral y el cuidado de la piel se encuentran. Diseñamos arreglos y productos que convierten lo cotidiano en un momento íntimo, cálido y memorable."
        actions={[
          { label: 'Explorar PEACH FLOWERS', to: '/flowers' },
          { label: 'Explorar PEACH CARE', to: '/care', variant: 'secondary' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className={`${styles.story} card-surface reveal`}>
            <div className={styles.storyText}>
              <p className="tag">La historia de PEACH STUDIO</p>
              <h2>La historia de PEACH STUDIO</h2>
              <p className="lead">
                PEACH STUDIO nace de la idea de bajar el ritmo. De encender una vela, colocar un arreglo de flores en la mesa y tomarse un momento para respirar.
              </p>
              <p className="lead">
                Unimos dos mundos: el diseño floral contemporáneo y fórmulas de cuidado de la piel pensadas para sentirnos presentes. Cada arreglo, cada crema y cada detalle está inspirado en la luz cálida de un estudio, en texturas suaves y en colores que invitan a la calma.
              </p>
              <p className="lead">
                No vendemos solo flores o productos de belleza. Diseñamos pequeñas pausas para el día a día.
              </p>
            </div>
            <div className={styles.storyVisual}>
              <div className={styles.panelLarge}>
                <img
                  src="https://res.cloudinary.com/dkucopkow/image/upload/v1764549284/11_vgkuip.png"
                  alt="Set de PEACH STUDIO"
                  className={styles.storyImage}
                />
              </div>
              <div className={styles.panelSmall}>
                <span>Texturas suaves</span>
                <div className={styles.panelAccent} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.splitHeader}>
            <p className="tag">Explora</p>
            <h2>PEACH FLOWERS / PEACH CARE</h2>
            <p className="lead">Dos universos con una misma sensibilidad editorial.</p>
          </div>
          <div className={styles.splitGrid}>
            <Link to="/flowers" className={`${styles.splitCard} card-surface reveal`}>
              <div className={styles.splitTop}>
                <div>
                  <p className="tag">Peach Flowers</p>
                  <h3>Arte floral contemporáneo</h3>
                  <p className="lead">
                    Arreglos de altísima calidad, pensados como piezas únicas para estudios, mesas y espacios que buscan calidez. Tonos cálidos, composiciones orgánicas y una estética editorial.
                  </p>
                </div>
                <span className="btn outline">Entrar a PEACH FLOWERS</span>
              </div>
              <div className={styles.splitVisual}>
                <img
                  src="https://res.cloudinary.com/dkucopkow/image/upload/v1764549397/10_qnjsdv.png"
                  alt="Composición PEACH FLOWERS"
                  className={styles.splitImage}
                />
                <div className={styles.ring} />
              </div>
            </Link>
            <Link to="/care" className={`${styles.splitCard} card-surface reveal`}>
              <div className={styles.splitTop}>
                <div>
                  <p className="tag">Peach Care</p>
                  <h3>Hábitos de cuidado para la piel</h3>
                  <p className="lead">
                    Cuidado de la piel minimalista, con fórmulas limpias e inspiradas en la calma de un estudio floral. Texturas sensoriales, aromas suaves y envases pensados para vivir a la vista.
                  </p>
                </div>
                <span className="btn outline">Entrar a PEACH CARE</span>
              </div>
              <div className={styles.splitVisualAlt}>
                <img
                  src="https://res.cloudinary.com/dkucopkow/image/upload/v1764550952/Captura_de_pantalla_2025-11-30_a_la_s_7.02.22_p.m._dtlxqn.png"
                  alt="Set PEACH CARE"
                  className={styles.splitImageAlt}
                />
                <div className={styles.vial} />
                <div className={styles.blend} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section small">
        <div className="container">
          <div className={`${styles.values} grid three`}>
            {values.map(value => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <ContactBlock
        title="Agenda una llamada o visita el estudio"
        description="Cuéntanos si buscas flores para un espacio o un proceso de cuidado personalizado. Respondemos en menos de 24 horas."
        ctaLabel="Enviar mensaje"
      />
    </div>
  );
};

export default Home;
