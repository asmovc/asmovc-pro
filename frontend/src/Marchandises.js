import React, { useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  const [connecte, setConnecte] = useState(false);

  const [nom, setNom] = useState("");
  const [motdepasse, setMotdepasse] = useState("");

  const connexion = () => {
    if (nom === "admin" && motdepasse === "1234") {
      setConnecte(true);
    } else {
      alert("Informations incorrectes");
    }
  };

  if (connecte) {
    return <Dashboard />;
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f1f5f9",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#1e293b",
          }}
        >
          ASMOVC PRO
        </h1>

        <input
          type="text"
          placeholder="Nom utilisateur"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={motdepasse}
          onChange={(e) => setMotdepasse(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <button
          onClick={connexion}
          style={{
            width: "100%",
            padding: "15px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Connexion
        </button>
      </div>
    </div>
  );
}

export default App;