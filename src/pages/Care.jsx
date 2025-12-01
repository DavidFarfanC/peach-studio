import { useState } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ContactBlock from '../components/ContactBlock';
import Modal from '../components/Modal';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import styles from './Care.module.css';

const products = [
  {
    name: 'Peach Glow Cream',
    description: 'Crema hidratante de textura ligera con acabado luminoso.',
    price: '$XXX',
  },
  {
    name: 'Studio Calm Cleanser',
    description: 'Limpiador suave pensado para noches largas de trabajo.',
    price: '$XXX',
  },
  {
    name: 'Soft Bloom Serum',
    description: 'Sérum concentrado con sensación seda y absorción rápida.',
    price: '$XXX',
  },
];

const Care = () => {
  const [active, setActive] = useState(null);
  useRevealOnScroll();

  return (
    <div className={styles.page}>
      <Hero
        title="PEACH CARE"
        subtitle="Cuidado de la piel inspirado en la calma de un estudio floral."
        description="PEACH CARE es una línea de productos de belleza pensada para disfrutarse sin prisa. Fórmulas limpias, texturas agradables y aromas suaves que acompañan momentos de pausa: antes de dormir, después de un baño caliente o mientras enciendes una vela y miras tus flores favoritas."
        alignment="left"
        actions={[{ label: 'Unirme al estudio', href: '#newsletter' }]}
        eyebrow="Skin Moments"
      />

      <section className="section">
        <div className={`container ${styles.pageContainer}`}>
          <div className="grid three">
            {products.map(product => (
              <ProductCard
                key={product.name}
                {...product}
                onAction={() => setActive(product)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section small">
        <div className={`container ${styles.pageContainer}`}>
          <div className={`${styles.moment} card-surface reveal`}>
            <div>
              <p className="tag">Momento Peach</p>
              <h2>Rutinas cortas y conscientes</h2>
              <p className="lead">
                Creemos en rutinas cortas y conscientes: limpiar, hidratar, respirar profundo. Menos pasos, más presencia.
              </p>
              <p className="lead">
                Combina tus productos PEACH CARE con flores frescas o secas de PEACH FLOWERS para crear un rincón que se sienta como un estudio personal.
              </p>
            </div>
            <div className={styles.vignette}>
              <div className={styles.bottle} />
              <div className={styles.shadow} />
            </div>
          </div>
        </div>
      </section>

      <section className="section small" id="newsletter">
        <div className={`container ${styles.pageContainer}`}>
          <div className={`${styles.newsletter} reveal`}>
            <div>
              <p className="tag">Newsletter</p>
              <h3>Recibe noticias de lanzamientos y colecciones limitadas.</h3>
              <p className="lead">Un correo cálido de vez en cuando, sin ruido.</p>
            </div>
            <form className={styles.form}>
              <input type="email" placeholder="tu@email.com" />
              <button className="btn" type="submit">
                Unirme al estudio
              </button>
            </form>
          </div>
        </div>
      </section>

      <ContactBlock
        title="Asesoría para tu momento de cuidado"
        description="Te ayudamos a elegir el set de PEACH CARE que mejor acompaña tu momento de calma."
        ctaLabel="Solicitar asesoría"
      />

      {active && (
        <Modal
          title={active.name}
          description={`${active.description} Incluye una guía de uso detallada y tips de aplicación.`}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
};

export default Care;
