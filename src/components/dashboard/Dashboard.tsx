"use client";
import React from "react";
import { Box, Button } from "@mui/material";
import Header from "./Header";
import StatBox from "./StatBox";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

const Dashboard: React.FC = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Admin Panel Overview" />
        <Button
          sx={{
            backgroundColor: "#1e88e5",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          Download Reports
        </Button>
      </Box>

      {/* GRID & CHARTS */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="20px">
        {/* STAT BOXES */}
        <StatBox title="1,245" subtitle="Clientes" progress={0.75} increase="+25%" />
        <StatBox title="3,523" subtitle="Ventas Totales" progress={0.6} increase="+12%" />
        <StatBox title="832" subtitle="Pagos con Crédito" progress={0.5} increase="+5%" />
        <StatBox title="412" subtitle="Pagos con Débito" progress={0.8} increase="+10%" />

        {/* CHARTS */}
        <Box gridColumn="span 8" gridRow="span 2">
          <LineChart title="Ventas por Período" />
        </Box>
        <Box gridColumn="span 4" gridRow="span 2">
          <PieChart title="Tipos de Pago" />
        </Box>
        <Box gridColumn="span 6" gridRow="span 2">
          <BarChart title="Cantidad de Ventas por Día" />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
