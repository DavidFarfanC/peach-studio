import { useState } from 'react';
import Hero from '../components/Hero';
import CollectionCard from '../components/CollectionCard';
import ContactBlock from '../components/ContactBlock';
import Modal from '../components/Modal';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import styles from './Flowers.module.css';

const collections = [
  {
    name: 'Editorial Peach',
    description: 'Arreglo en tonos durazno, crema y rosa, con toques de azul profundo.',
    price: 'Desde $XXX',
  },
  {
    name: 'Golden Studio',
    description: 'Flores cálidas en naranjas, amarillos y mostazas con follaje suelto.',
    price: 'Desde $XXX',
  },
  {
    name: 'Soft Morning',
    description: 'Blancos y cremas con verdes suaves para una atmósfera limpia.',
    price: 'Desde $XXX',
  },
];

const Flowers = () => {
  const [active, setActive] = useState(null);
  useRevealOnScroll();

  return (
    <div>
      <Hero
        title="PEACH FLOWERS"
        subtitle="Arreglos florales de estudio para espacios que cuentan historias."
        description="Creamos arreglos de altísima calidad inspirados en sets de fotografía: luz cálida, composiciones orgánicas y detalles inesperados. Cada pieza está pensada para que la mesa, el escritorio o el rincón donde la coloques se convierta en un escenario."
        alignment="left"
        actions={[{ label: 'Solicitar un arreglo', href: '#contacto' }]}
        eyebrow="Flor Studio"
      />

      <section className="section">
        <div className={`container ${styles.pageContainer}`}>
          <div className="grid three">
            {collections.map(item => (
              <CollectionCard
                key={item.name}
                title={item.name}
                description={item.description}
                price={item.price}
                onAction={() => setActive(item)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section small">
        <div className={`container ${styles.pageContainer}`}>
          <div className={`${styles.process} card-surface reveal`}>
            <div>
              <p className="tag">Cómo trabajamos</p>
              <h2>Entregas de estudio, hechas a medida</h2>
            </div>
            <ol className={styles.steps}>
            <li>Trabajamos por pedido, diseñando cada arreglo según el espacio y la ocasión.</li>
            <li>Eliges la colección que mejor conecta con tu estilo.</li>
            <li>Ajustamos tamaño y tonos contigo.</li>
            <li>Entregamos el arreglo listo para colocarse, como si fuera parte de un set de fotografía.</li>
          </ol>
          </div>
        </div>
      </section>

      <div className="section small">
        <div className={`container ${styles.pageContainer}`}>
          <div className={styles.callout + ' reveal card-surface'}>
            <div>
              <h3>¿Listo para tu siguiente escena?</h3>
              <p className="lead">Escríbenos y transformamos tu espacio con una composición hecha a medida.</p>
            </div>
            <a href="#contacto" className="btn">
              Solicitar un arreglo
            </a>
          </div>
        </div>
      </div>

      <ContactBlock
        title="Cuéntanos del espacio y la ocasión"
        description="Flores para sets de fotografía, aperturas, mesas editoriales o un rincón especial en casa."
        ctaLabel="Enviar solicitud"
      />

      {active && (
        <Modal
          title={active.name}
          description={`${active.description} Coordinamos tono, tamaño y horario de entrega contigo.`}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
};

export default Flowers;
