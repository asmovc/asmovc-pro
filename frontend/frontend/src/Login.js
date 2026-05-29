import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const connexion = () => {

    if (
      email === "admin@gmail.com" &&
      motDePasse === "1234"
    ) {

      alert("Connexion réussie ✅");

    } else {

      alert("Email ou mot de passe incorrect");

    }

  };

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f4f6f9"
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          width: "350px"
        }}
      >

        <h2>Connexion ASMOVC PRO 🔐</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={(e) =>
            setMotDePasse(e.target.value)
          }
        />

        <button
          onClick={connexion}
          style={{
            marginTop: "20px"
          }}
        >
          Se connecter
        </button>

      </div>

    </div>

  );

}

export default Login;