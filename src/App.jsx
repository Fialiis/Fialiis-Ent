import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <section style={{ textAlign: "center", padding: "2rem" }}>
            <h1 style={{ fontSize: "2rem" }}>Bienvenue sur FiaLiis</h1>
            <p>La plateforme d’entiercement simple et sécurisée</p>
            <button onClick={() => setPage("transaction")} style={btn}>Créer une transaction</button>
          </section>
        );
      case "transaction":
        return (
          <section style={{ padding: "2rem" }}>
            <h2>Créer une transaction</h2>
            <input type="text" placeholder="Titre" style={input} />
            <input type="number" placeholder="Montant (€)" style={input} />
            <input type="text" placeholder="Type (Bien, Service...)" style={input} />
            <input type="email" placeholder="Email du bénéficiaire" style={input} />
            <textarea placeholder="Détails" style={{ ...input, height: "100px" }}></textarea>
            <br />
            <button style={btn} onClick={() => setPage("home")}>Valider</button>
          </section>
        );
      default:
        return <p>Page inconnue</p>;
    }
  };

  const navStyle = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    margin: "1rem 0"
  };

  return (
    <div>
      <header style={{ padding: "1rem", background: "#002c71", color: "white", textAlign: "center" }}>
        <h1>FiaLiis</h1>
      </header>
      <nav style={navStyle}>
        <button style={btn} onClick={() => setPage("home")}>Accueil</button>
        <button style={btn} onClick={() => setPage("transaction")}>Créer</button>
      </nav>
      {renderPage()}
      <footer style={{ textAlign: "center", padding: "1rem", background: "#eee", marginTop: "2rem" }}>
        contact@fialiis.com — CGU — Mentions légales
      </footer>
    </div>
  );
}

const btn = {
  padding: "10px 20px",
  backgroundColor: "#0d73c5",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const input = {
  display: "block",
  margin: "10px 0",
  padding: "10px",
  width: "100%",
  maxWidth: "500px"
};