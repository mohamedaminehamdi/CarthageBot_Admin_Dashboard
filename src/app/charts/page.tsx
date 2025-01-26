// components/Charts.tsx
"use client";
import { FC } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';
import Navbar from '../components/Navbar';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement);

const Charts: FC = () => {
  // Updated data for categories and question counts
  const categories = [
    "Informations Générales sur l'Établissement",
    "Programmes et Cours",
    "Admission et Inscription",
    "Vie Étudiante",
    "Ressources Académiques",
    "Services de Carrière",
    "Santé et Bien-être",
    "Technologie et Innovation",
    "Politiques et Règlements"
  ];
  const categoryCounts = [5, 5, 5, 5, 5, 5, 5, 5, 4]; // Updated count for each category

  // Fictional rating data over 12 months
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  // Randomly generated rating data for each month (fictional)
  const ratingCounts = {
    "1": [2, 1, 2, 0, 1, 0, 0, 1, 2, 1, 0, 1],
    "2": [1, 2, 0, 3, 1, 2, 3, 1, 1, 0, 2, 1],
    "3": [3, 4, 3, 4, 5, 3, 4, 3, 3, 2, 4, 5],
    "4": [2, 3, 1, 2, 2, 1, 2, 3, 2, 1, 2, 3],
    "5": [0, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 0],
  };

  // Chart data for categories (Pie chart)
  const categoryChartData = {
    labels: categories,
    datasets: [
      {
        data: categoryCounts,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40', '#FFCD56', '#4B9E9C', '#7B4F96', '#FF6F61'],
        hoverBackgroundColor: ['#FF4C6E', '#2A8CE1', '#F9D04E', '#39D6D0', '#FF7A29', '#FFB81C', '#56C1B6', '#9B4D89', '#FF5A49'],
      },
    ],
  };

  // Chart data for category frequencies (Bar chart)
  const categoryFrequencyChartData = {
    labels: categories,
    datasets: [
      {
        label: 'Questions by Category',
        data: categoryCounts,
        backgroundColor: 'rgba(76, 175, 80, 0.6)',
        borderColor: 'rgba(76, 175, 80, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart data for ratings over time (Line chart)
  const ratingChartData = {
    labels: months,
    datasets: [
      {
        label: 'Rating 1',
        data: ratingCounts["1"],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Rating 2',
        data: ratingCounts["2"],
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.1,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      },
      {
        label: 'Rating 3',
        data: ratingCounts["3"],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Rating 4',
        data: ratingCounts["4"],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
        pointBackgroundColor: 'rgba(153, 102, 255, 1)',
      },
      {
        label: 'Rating 5',
        data: ratingCounts["5"],
        fill: false,
        borderColor: 'rgba(255, 159, 64, 1)',
        tension: 0.1,
        pointBackgroundColor: 'rgba(255, 159, 64, 1)',
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="p-8 bg-gradient-to-r from-[#1E2A47] to-[#34495E] rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Question Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pie chart for categories */}
          <div className="bg-[#fcfcfc] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#34495E] mb-4">Questions by Category (Pie Chart)</h3>
            <Pie data={categoryChartData} options={{ responsive: true }} />
          </div>

          {/* Bar chart for category frequencies */}
          <div className="bg-[#ffffff] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#34495E] mb-4">Category Frequencies (Bar Chart)</h3>
            <Bar data={categoryFrequencyChartData} options={{ responsive: true }} />
          </div>

          {/* Line chart for ratings over time */}
          <div className="bg-[#ffffff] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#34495E] mb-4">Question Ratings (Line Chart)</h3>
            <Line data={ratingChartData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
