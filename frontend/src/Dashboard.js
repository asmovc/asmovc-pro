import React from "react";

function Dashboard() {

  // =========================
  // STATISTIQUES
  // =========================

  const totalVentes = 80000;

  const quantiteTotale = 120;

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f1f5f9",
        fontFamily: "Arial",
      }}
    >

      {/* =========================
          MENU
      ========================= */}

      <div
        style={{
          width: "250px",
          backgroundColor: "#0f172a",
          color: "white",
          padding: "20px",
        }}
      >

        <h2>ASMOVC PRO</h2>

        <hr />

<Link
  to="/produits"
  style={{
    color: "white",
    textDecoration: "none"
  }}
>

  📦 Produits
<br /><br />

<Link
  to="/clients"
  style={{
    color: "white",
    textDecoration: "none"
  }}
>

  👥 Clients

</Link>

<br /><br />

<Link
  to="/ventes"
  style={{
    color: "white",
    textDecoration: "none"
  }}
>

  🛒 Ventes

</Link>
</Link>
        <p>🧾 Facturation</p>
        <p>💰 Finances</p>
        <p>👥 Utilisateurs</p>
        <p>📊 Rapports</p>

      </div>

      {/* =========================
          CONTENU
      ========================= */}

      <div
        style={{
          flex: 1,
          padding: "20px",
        }}
      >

        <h1>Tableau de bord</h1>

        {/* =========================
            STATISTIQUES
        ========================= */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >

          {/* RECETTES */}

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "220px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >

            <h3>💰 Recettes</h3>

            <h2>{totalVentes} FC</h2>

          </div>

          {/* MARCHANDISES */}

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "220px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >

            <h3>📦 Marchandises</h3>

            <h2>2</h2>

          </div>

          {/* UTILISATEURS */}

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "220px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >

            <h3>👥 Utilisateurs</h3>

            <h2>2</h2>

          </div>

          {/* QUANTITE */}

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "220px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >

            <h3>📦 Quantité vendue</h3>

            <h2>{quantiteTotale}</h2>

          </div>

        </div>

        {/* =========================
            TABLEAU MARCHANDISES
        ========================= */}

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "30px",
          }}
        >

          <h2>Marchandises récentes</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "15px",
            }}
          >

            <thead>

              <tr
                style={{
                  backgroundColor: "#1e293b",
                  color: "white",
                }}
              >

                <th style={{ padding: "12px" }}>ID</th>

                <th>Produit</th>

                <th>Propriétaire</th>

                <th>Prix</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td style={{ padding: "10px" }}>
                  1
                </td>

                <td>Pommes de terre</td>

                <td>Sadiki</td>

                <td>50 000 FC</td>

              </tr>

              <tr>

                <td style={{ padding: "10px" }}>
                  2
                </td>

                <td>Maïs</td>

                <td>Jean</td>

                <td>30 000 FC</td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* =========================
            TABLEAU UTILISATEURS
        ========================= */}

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >

          <h2>Utilisateurs connectés</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "15px",
            }}
          >

            <thead>

              <tr
                style={{
                  backgroundColor: "#1e293b",
                  color: "white",
                }}
              >

                <th style={{ padding: "12px" }}>
                  ID
                </th>

                <th>Nom</th>

                <th>Rôle</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td style={{ padding: "10px" }}>
                  1
                </td>

                <td>Admin</td>

                <td>Administrateur</td>

              </tr>

              <tr>

                <td style={{ padding: "10px" }}>
                  2
                </td>

                <td>Grace</td>

                <td>Percepteur</td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* =========================
            BOUTON
        ========================= */}

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >

          <button
            onClick={() =>
              (window.location.href =
                "/marchandises")
            }
            style={{
              backgroundColor: "#4f46e5",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >

            Suivant →

          </button>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;
<div className="card">

  <h3>🔥 Produit populaire</h3>

  <p>

    {produitPopulaire
      ? produitPopulaire.produit
      : "Aucune vente"}

  </p>

</div>
Dashboard.js
Clients.js
Produits.js
Ventes.js
Login.js
import { Link } from "react-router-dom";