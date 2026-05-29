import { useState } from "react";

import "./App.css";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import Login from "./Login";

function App() {

  // =========================
  // STATES
  // =========================

  const [recherche, setRecherche] = useState("");

  const [produits, setProduits] = useState([
    {
      id: 1,
      nom: "Pommes de terre",
      prix: 2500,
      stock: 50
    },
    {
      id: 2,
      nom: "Maïs",
      prix: 1800,
      stock: 30
    }
  ]);

  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [stock, setStock] = useState("");

  const [modifierId, setModifierId] = useState(null);

  // =========================
  // FILTRE RECHERCHE
  // =========================

  const produitsFiltres = produits.filter((produit) =>
    produit.nom
      .toLowerCase()
      .includes(recherche.toLowerCase())
  );

  // =========================
  // DONNÉES GRAPHIQUE
  // =========================

  const dataGraphique = produits.map((produit) => ({
    nom: produit.nom,
    stock: produit.stock
  }));

  // =========================
  // VALEUR STOCK
  // =========================

  const valeurStock = produits.reduce(
    (total, produit) =>
      total + produit.prix * produit.stock,
    0
  );

  // =========================
  // AJOUTER PRODUIT
  // =========================

  const ajouterProduit = () => {

    if (!nom || !prix || !stock) {
      alert("Remplissez tous les champs");
      return;
    }

    const nouveauProduit = {
      id: produits.length + 1,
      nom,
      prix: Number(prix),
      stock: Number(stock)
    };

    setProduits([...produits, nouveauProduit]);

    setNom("");
    setPrix("");
    setStock("");
  };

  // =========================
  // SUPPRIMER PRODUIT
  // =========================

  const supprimerProduit = (id) => {

    const nouveauxProduits =
      produits.filter((p) => p.id !== id);

    setProduits(nouveauxProduits);
  };

  // =========================
  // MODIFIER PRODUIT
  // =========================

  const modifierProduit = (produit) => {

    setModifierId(produit.id);

    setNom(produit.nom);
    setPrix(produit.prix);
    setStock(produit.stock);
  };

  // =========================
  // ENREGISTRER MODIFICATION
  // =========================

  const enregistrerModification = () => {

    const nouveauxProduits =
      produits.map((p) => {

        if (p.id === modifierId) {

          return {
            ...p,
            nom,
            prix: Number(prix),
            stock: Number(stock)
          };

        }

        return <Login />;
      });

    setProduits(nouveauxProduits);

    setModifierId(null);

    setNom("");
    setPrix("");
    setStock("");
  };

  // =========================
  // GENERER PDF
  // =========================

  const genererPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(20);

    doc.text("ASMOVC PRO 🚀", 20, 20);

    doc.setFontSize(12);

    doc.text("Facture Produits", 20, 35);

    autoTable(doc, {

      startY: 50,

      head: [["ID", "Nom", "Prix", "Stock"]],

      body: produits.map((p) => [
        p.id,
        p.nom,
        `${p.prix} FC`,
        p.stock
      ])

    });

    doc.save("facture-asmovc.pdf");
  };

  // =========================
  // RETURN
  // =========================

  return (

    <div className="container">

      <h1>ASMOVC PRO 🚀</h1>

      <h2>Plateforme Commerciale Moderne</h2>

      <p>
        Gestion des ventes, clients,
        agriculteurs et transporteurs.
      </p>

      {/* =========================
          DASHBOARD
      ========================= */}

      <div className="dashboard">

        <div className="card">
          <h3>📦 Produits</h3>
          <p>{produits.length}</p>
        </div>

        <div className="card">
          <h3>💰 Valeur Stock</h3>
          <p>{valeurStock} FC</p>
        </div>

      </div>

      {/* =========================
          FORMULAIRE
      ========================= */}

      <div className="form-container">

        <input
          type="text"
          placeholder="Nom produit"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <input
          type="number"
          placeholder="Prix"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
        />

        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        {modifierId ? (

          <button onClick={enregistrerModification}>
            Enregistrer
          </button>

        ) : (

          <button onClick={ajouterProduit}>
            Ajouter Produit
          </button>

        )}

      </div>

      {/* =========================
          PDF
      ========================= */}

      <button
        onClick={genererPDF}
        style={{ marginTop: "20px" }}
      >
        📄 Télécharger Facture PDF
      </button>

      {/* =========================
          RECHERCHE
      ========================= */}

      <input
        type="text"
        placeholder="🔍 Rechercher un produit..."
        className="search-input"
        value={recherche}
        onChange={(e) =>
          setRecherche(e.target.value)
        }
      />

      {/* =========================
          GRAPHIQUE
      ========================= */}

      <div className="chart-container">

        <h2>📈 Statistiques des Stocks</h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <BarChart data={dataGraphique}>

            <XAxis dataKey="nom" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="stock"
              fill="#1565c0"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* =========================
          TABLEAU
      ========================= */}

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {produitsFiltres.map((produit) => (

            <tr key={produit.id}>

              <td>{produit.id}</td>

              <td>{produit.nom}</td>

              <td>{produit.prix} FC</td>

              <td>{produit.stock}</td>

              <td>

                <button
                  onClick={() =>
                    modifierProduit(produit)
                  }
                >
                  Modifier
                </button>

                <button
                  onClick={() =>
                    supprimerProduit(produit.id)
                  }
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "red"
                  }}
                >
                  Supprimer
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default App;