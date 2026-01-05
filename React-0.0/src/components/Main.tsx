function Main() {
  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "20px",
        lineHeight: "1.6",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <article>
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#4CAF50", borderBottom: "2px solid #4CAF50", paddingBottom: "10px" }}> Positives about React</h2>
          <ul style={{ fontSize: "16px" }}>
            <li style={{ marginBottom: "10px" }}>
              <strong>Component-Based Architecture:</strong> React allows you to build encapsulated components that manage their own state, making code more modular and reusable.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Virtual DOM:</strong> React's virtual DOM provides excellent performance by efficiently updating only the parts of the real DOM that have changed.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Large Ecosystem:</strong> React has a huge community, extensive library support, and excellent tooling, making it easier to find solutions and resources.
            </li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: "#f44336", borderBottom: "2px solid #f44336", paddingBottom: "10px" }}> Negatives about React</h2>
          <ul style={{ fontSize: "16px" }}>
            <li style={{ marginBottom: "10px" }}>
              <strong>Steep Learning Curve:</strong> React requires understanding of JSX, component lifecycle, state management, and modern JavaScript concepts which can be overwhelming for beginners.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Rapid Development Pace:</strong> React evolves quickly with frequent updates and new patterns, making it challenging to keep up with best practices and breaking changes.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Just a Library:</strong> React is only a view library, so you need additional tools and libraries for routing, state management, and other features, increasing complexity.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}

export default Main;
