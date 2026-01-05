function Main() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
        lineHeight: "1.6",
        backgroundColor: "#f8f9fa",
        minHeight: "80vh",
      }}
    >
      <article
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e9ecef",
        }}
      >
        <section
          style={{
            marginBottom: "50px",
            padding: "30px",
            backgroundColor: "#f8fff8",
            borderRadius: "8px",
            border: "1px solid #4CAF50",
          }}
        >
          <h2
            style={{
              color: "#4CAF50",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "15px",
              textAlign: "center",
              marginBottom: "25px",
              fontSize: "24px",
            }}
          >
            Positives about React
          </h2>
          <ul
            style={{
              fontSize: "16px",
              textAlign: "left",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <li
              style={{
                marginBottom: "15px",
                padding: "15px",
                backgroundColor: "white",
                borderRadius: "6px",
                border: "1px solid #e8f5e8",
              }}
            >
              <strong>Component-Based Architecture:</strong> React allows you to build encapsulated components that manage their own state, making code more modular and reusable.
            </li>
            <li
              style={{
                marginBottom: "15px",
                padding: "15px",
                backgroundColor: "white",
                borderRadius: "6px",
                border: "1px solid #e8f5e8",
              }}
            >
              <strong>Virtual DOM:</strong> React's virtual DOM provides excellent performance by efficiently updating only the parts of the real DOM that have changed.
            </li>
            <li
              style={{
                marginBottom: "15px",
                padding: "15px",
                backgroundColor: "white",
                borderRadius: "6px",
                border: "1px solid #e8f5e8",
              }}
            >
              <strong>Large Ecosystem:</strong> React has a huge community, extensive library support, and excellent tooling, making it easier to find solutions and resources.
            </li>
          </ul>
        </section>

        <section
          style={{
            padding: "30px",
            backgroundColor: "#fff8f8",
            borderRadius: "8px",
            border: "1px solid #f44336",
          }}
        >
          <h2
            style={{
              color: "#f44336",
              borderBottom: "3px solid #f44336",
              paddingBottom: "15px",
              textAlign: "center",
              marginBottom: "25px",
              fontSize: "24px",
            }}
          >
            Negatives about React
          </h2>
          <ul
            style={{
              fontSize: "16px",
              textAlign: "left",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <li
              style={{
                marginBottom: "15px",
                padding: "15px",
                backgroundColor: "white",
                borderRadius: "6px",
                border: "1px solid #f5e8e8",
              }}
            >
              <strong>Steep Learning Curve:</strong> React requires understanding of JSX, component lifecycle, state management, and modern JavaScript concepts which can be overwhelming for beginners.
            </li>
            <li
              style={{
                marginBottom: "15px",
                padding: "15px",
                backgroundColor: "white",
                borderRadius: "6px",
                border: "1px solid #f5e8e8",
              }}
            >
              <strong>Rapid Development Pace:</strong> React evolves quickly with frequent updates and new patterns, making it challenging to keep up with best practices and breaking changes.
            </li>
            <li
              style={{
                marginBottom: "15px",
                padding: "15px",
                backgroundColor: "white",
                borderRadius: "6px",
                border: "1px solid #f5e8e8",
              }}
            >
              <strong>Just a Library:</strong> React is only a view library, so you need additional tools and libraries for routing, state management, and other features, increasing complexity.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}

export default Main;
