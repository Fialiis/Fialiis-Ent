import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");
  const [transactions, setTransactions] = useState([
    { title: "Logo Design", amount: "800 €", type: "Prestation", status: "En attente", date: "05/06/25" },
    { title: "Achat PC", amount: "1 200 €", type: "Bien", status: "Validée", date: "04/06/25" }
  ]);
  const [newTx, setNewTx] = useState({ title: "", amount: "", type: "", email: "", details: "" });

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Bienvenue sur FiaLiis</h1>
            <p>La plateforme d'entiercement simple et sécurisée.</p>
            <button onClick={() => setPage("create")}>Créer une transaction</button>
          </div>
        );
      case "create":
        return (
          <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
            <h2>Nouvelle transaction</h2>
            <input placeholder="Titre" value={newTx.title} onChange={e => setNewTx({ ...newTx, title: e.target.value })} />
            <input placeholder="Montant (€)" value={newTx.amount} onChange={e => setNewTx({ ...newTx, amount: e.target.value })} />
            <input placeholder="Type" value={newTx.type} onChange={e => setNewTx({ ...newTx, type: e.target.value })} />
            <input placeholder="Email" value={newTx.email} onChange={e => setNewTx({ ...newTx, email: e.target.value })} />
            <textarea placeholder="Détails" value={newTx.details} onChange={e => setNewTx({ ...newTx, details: e.target.value })}></textarea>
            <button onClick={() => setTransactions([...transactions, { ...newTx, status: "En attente", date: "05/06/25" }])}>
              Valider
            </button>
          </div>
        );
      case "mytx":
        return (
          <div style={{ padding: "2rem" }}>
            <h2>Mes transactions</h2>
            <table>
              <thead>
                <tr>
                  <th>Titre</th><th>Montant</th><th>Type</th><th>Statut</th><th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, idx) => (
                  <tr key={idx}>
                    <td>{tx.title}</td><td>{tx.amount}</td><td>{tx.type}</td><td>{tx.status}</td><td>{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "admin":
        return (
          <div style={{ padding: "2rem" }}>
            <h2>Admin</h2>
            <p>Total transactions : {transactions.length}</p>
          </div>
        );
      case "about":
        return (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2>À propos</h2>
            <p>FiaLiis sécurise vos transactions sensibles.</p>
            <p>Contact : contact@fialiis.com</p>
          </div>
        );
      default:
        return <p>Page inconnue</p>;
    }
  };

  return (
    <div>
      <header style={{ padding: "1rem", backgroundColor: "#002c71", color: "white", textAlign: "center" }}>
        <h1>FiaLiis</h1>
        <nav>
          <button onClick={() => setPage("home")}>Accueil</button>
          <button onClick={() => setPage("create")}>Créer</button>
          <button onClick={() => setPage("mytx")}>Mes transactions</button>
          <button onClick={() => setPage("admin")}>Admin</button>
          <button onClick={() => setPage("about")}>À propos</button>
        </nav>
      </header>

      {renderPage()}

      <footer style={{ textAlign: "center", padding: "1rem", background: "#f0f0f0", marginTop: "2rem" }}>
        contact@fialiis.com — CGU — Mentions légales
      </footer>
    </div>
  );
}