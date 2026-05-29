import React, { useState } from "react";

function Facturation() {
  const [client, setClient] = useState("");
  const [montant, setMontant] = useState("");

  const numeroFacture = "FAC-" + Math.floor(Math.random() * 100000);

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Facturation</h2>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label>Nom du client</label>
          <br />

          <input
            type="text"
            placeholder="Entrer le client"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              marginTop: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Montant</label>
          <br />

          <input
            type="number"
            placeholder="Entrer le montant"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              marginTop: "5px",
            }}
          />
        </div>

        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Générer facture
        </button>

        <div
          style={{
            marginTop: "30px",
            backgroundColor: "#f8fafc",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Facture</h3>

          <p>
            <strong>Numéro :</strong> {numeroFacture}
          </p>

          <p>
            <strong>Client :</strong> {client}
          </p>

          <p>
            <strong>Montant :</strong> {montant} FC
          </p>

          <p>
            <strong>Date :</strong>{" "}
            {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Facturation;