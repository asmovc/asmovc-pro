const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const PORT = 5000;

// =============================
// MIDDLEWARES
// =============================
app.use(cors());
app.use(express.json());


// =============================
// TEST API
// =============================
app.get("/", (req, res) => {

  res.send("API ASMOVC fonctionne ✅");

});


// =============================
// CREER UTILISATEUR
// =============================
app.post("/utilisateurs", async (req, res) => {

  try {

    const { nom, email, mot_de_passe } = req.body;
const motDePasseHash =
  await bcrypt.hash(mot_de_passe, 10);
    // Vérification
    if (!nom || !email || !mot_de_passe) {

      return res.status(400).json({
        erreur: "Tous les champs sont obligatoires"
      });

    }

    // Insertion PostgreSQL
    const result = await pool.query(

      `
      INSERT INTO utilisateurs (nom, email, mot_de_passe)
      VALUES ($1, $2, $3)
      RETURNING *
      `,

      [nom, email, mot_de_passe]

    );

    res.status(201).json({

      message: "Utilisateur créé avec succès ✅",
      utilisateur: result.rows[0]

    });

  } catch (error) {

    console.log("Erreur création utilisateur :", error.message);

    res.status(500).json({

      erreur: "Erreur serveur"

    });

  }

});


// =============================
// LIRE UTILISATEURS
// =============================
app.get("/utilisateurs", async (req, res) => {

  try {

    const result = await pool.query(
      "SELECT * FROM utilisateurs ORDER BY id ASC"
    );

    res.json(result.rows);

  } catch (error) {

    console.log("Erreur lecture utilisateurs :", error.message);

    res.status(500).json({

      erreur: "Erreur serveur"

    });

  }

});


// =============================
// LOGIN
// =============================
app.post("/login", async (req, res) => {

  try {

    const { email, mot_de_passe } = req.body;

    const result = await pool.query(

      "SELECT * FROM utilisateurs WHERE email = $1",

      [email]

    );

    if (result.rows.length === 0) {

      return res.status(401).json({
        erreur: "Utilisateur introuvable"
      });

    }

    const utilisateur = result.rows[0];

    // Vérifier mot de passe
    const valide = await bcrypt.compare(
      mot_de_passe,
      utilisateur.mot_de_passe
    );

    if (!valide) {

      return res.status(401).json({
        erreur: "Mot de passe incorrect"
      });

    }

    // Créer TOKEN JWT
    const token = jwt.sign(

      {
        id: utilisateur.id,
        email: utilisateur.email
      },

      "SECRET_ASMOVC",

      {
        expiresIn: "24h"
      }

    );

    res.json({

      message: "Connexion réussie ✅",

      token,

      utilisateur

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      erreur: "Erreur serveur"
    });

  }

});


// =============================
// ROUTE CLIENTS
// =============================
app.get("/clients", async (req, res) => {

  try {

    const result = await pool.query(
      "SELECT * FROM utilisateurs ORDER BY id ASC"
    );

    res.json(result.rows);

  } catch (error) {

    console.log("Erreur clients :", error.message);

    res.status(500).json({

      erreur: "Erreur serveur"

    });

  }

});


// =============================
// LIRE PRODUITS
// =============================
app.get("/produits", async (req, res) => {

  try {

    const result = await pool.query(
      "SELECT * FROM produits ORDER BY id DESC"
    );

    res.json(result.rows);

  } catch (error) {

    console.log("Erreur produits :", error.message);

    res.status(500).json({

      erreur: "Erreur serveur"

    });

  }

});


// =============================
// AJOUT PRODUIT
// =============================
app.post("/produits", async (req, res) => {

  try {

    const { nom, prix, stock } = req.body;

    const result = await pool.query(

      `
      INSERT INTO produits (nom, prix, stock)
      VALUES ($1, $2, $3)
      RETURNING *
      `,

      [nom, prix, stock]

    );

    res.status(201).json({

      message: "Produit ajouté ✅",
      produit: result.rows[0]

    });

  } catch (error) {

    console.log("Erreur ajout produit :", error.message);

    res.status(500).json({

      erreur: "Erreur serveur"

    });

  }

});


// =============================
// SUPPRIMER PRODUIT
// =============================
app.delete("/produits/:id", async (req, res) => {

  try {

    const { id } = req.params;

    await pool.query(
      "DELETE FROM produits WHERE id = $1",
      [id]
    );

    res.json({

      message: "Produit supprimé ✅"

    });

  } catch (error) {

    console.log("Erreur suppression :", error.message);

    res.status(500).json({

      erreur: "Erreur serveur"

    });

  }

});


// =============================
// MODIFIER PRODUIT
// =============================
app.put("/produits/:id", async (req, res) => {

  try {

    const { id } = req.params;

    const { nom, prix, stock } = req.body;

    const result = await pool.query(

      `
      UPDATE produits
      SET nom = $1,
          prix = $2,
          stock = $3
      WHERE id = $4
      RETURNING *
      `,

      [nom, prix, stock, id]

    );

    res.json({

      message: "Produit modifié ✅",
      produit: result.rows[0]

    });

  } catch (error) {

    console.log("Erreur modification :", error.message);

    res.status(500).json({

      erreur: "Erreur serveur"

    });

  }

});

// =============================
// AJOUT VENTE
// =============================
app.post("/ventes", async (req, res) => {

  try {

    const { produit_id, quantite } = req.body;

    // Chercher produit
    const produitResult = await pool.query(

      "SELECT * FROM produits WHERE id = $1",

      [produit_id]

    );

    const produit = produitResult.rows[0];

    if (!produit) {

      return res.status(404).json({

        erreur: "Produit introuvable"

      });

    }

    // Calcul total
    const total = produit.prix * quantite;

    // Ajouter vente
    const venteResult = await pool.query(

      `
      INSERT INTO ventes (produit_id, quantite, total)
      VALUES ($1, $2, $3)
      RETURNING *
      `,

      [produit_id, quantite, total]

    );

    // Réduire stock
    await pool.query(

      `
      UPDATE produits
      SET stock = stock - $1
      WHERE id = $2
      `,

      [quantite, produit_id]

    );

    res.status(201).json({

      message: "Vente enregistrée ✅",

      vente: venteResult.rows[0]

    });

  } catch (error) {

    console.log(error.message);

    res.status(500).json({

      erreur: "Erreur serveur"

    });

  }

});
// =============================
// DEMARRAGE SERVEUR
// =============================
// =========================
// AJOUT CLIENT
// =========================

app.post("/clients", async (req, res) => {

  try {

    const {
      nom,
      telephone,
      adresse
    } = req.body;

    const result = await pool.query(

      `
      INSERT INTO clients
      (nom, telephone, adresse)

      VALUES ($1, $2, $3)

      RETURNING *
      `,

      [nom, telephone, adresse]

    );

    res.json(result.rows[0]);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      erreur: "Erreur serveur"
    });

  }

});


// =========================
// LIRE CLIENTS
// =========================

app.get("/clients", async (req, res) => {

  try {

    const result = await pool.query(

      "SELECT * FROM clients ORDER BY id DESC"

    );

    res.json(result.rows);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      erreur: "Erreur serveur"
    });

  }

});
app.listen(PORT, () => {

  console.log(`Serveur démarré sur le port ${PORT} 🚀`);

});