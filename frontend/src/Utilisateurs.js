import React, { useEffect, useState } from "react";
import axios from "axios";

function Utilisateurs() {
  const [utilisateurs, setUtilisateurs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/utilisateurs")
      .then((response) => {
        setUtilisateurs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2 className="title">Utilisateurs</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {utilisateurs.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nom}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Utilisateurs;