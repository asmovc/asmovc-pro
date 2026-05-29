import React from "react";
import {
  FaBox,
  FaFileInvoice,
  FaUsers,
  FaChartBar,
  FaMoneyBill,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>ASMOVC PRO</h2>

      <div style={{ marginBottom: "20px" }}>
        <FaBox /> Marchandises
      </div>

      <div style={{ marginBottom: "20px" }}>
        <FaFileInvoice /> Facturation
      </div>

      <div style={{ marginBottom: "20px" }}>
        <FaMoneyBill /> Finances
      </div>

      <div style={{ marginBottom: "20px" }}>
        <FaUsers /> Utilisateurs
      </div>

      <div style={{ marginBottom: "20px" }}>
        <FaChartBar /> Rapports
      </div>
    </div>
  );
}

export default Sidebar;