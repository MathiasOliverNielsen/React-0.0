import "./Main.css";

function Main() {
  return (
    <main className="main">
      <article className="article">
        <section className="section section--positive">
          <h2 className="section__title section__title--positive">✅ Positives about React</h2>
          <ul className="section__list">
            <li className="section__item section__item--positive">
              <strong>Component-Based Architecture:</strong> React allows you to build encapsulated components that manage their own state, making code more modular and reusable.
            </li>
            <li className="section__item section__item--positive">
              <strong>Virtual DOM:</strong> React's virtual DOM provides excellent performance by efficiently updating only the parts of the real DOM that have changed.
            </li>
            <li className="section__item section__item--positive">
              <strong>Large Ecosystem:</strong> React has a huge community, extensive library support, and excellent tooling, making it easier to find solutions and resources.
            </li>
          </ul>
        </section>

        <section className="section section--negative">
          <h2 className="section__title section__title--negative">❌ Negatives about React</h2>
          <ul className="section__list">
            <li className="section__item section__item--negative">
              <strong>Steep Learning Curve:</strong> React requires understanding of JSX, component lifecycle, state management, and modern JavaScript concepts which can be overwhelming for beginners.
            </li>
            <li className="section__item section__item--negative">
              <strong>Rapid Development Pace:</strong> React evolves quickly with frequent updates and new patterns, making it challenging to keep up with best practices and breaking changes.
            </li>
            <li className="section__item section__item--negative">
              <strong>Just a Library:</strong> React is only a view library, so you need additional tools and libraries for routing, state management, and other features, increasing complexity.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}

export default Main;
