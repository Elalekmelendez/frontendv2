import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

// Registrar los módulos necesarios para gráficos de torta
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ title }: { title: string }) => {
  const data = {
    labels: ["Crédito", "Débito", "Paypal"],
    datasets: [
      {
        label: "Tipos de Pago",
        data: [300, 150, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <div>
      <h3>{title}</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
