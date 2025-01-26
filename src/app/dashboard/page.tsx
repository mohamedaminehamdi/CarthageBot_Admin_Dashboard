"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import data from "../utils/questions.json"; // Adjust path as needed

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}


// Extract the dataset array from the imported JSON object
const typedData: FAQItem[] = data.dataset as FAQItem[];

const Dashboard = () => {
  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  const [editItem, setEditItem] = useState<FAQItem | null>(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/questions");
        const data = await response.json();
        setFaqData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Function to handle deleting an item
  const handleDelete = async (id: number) => {
    const updatedData = faqData.filter((item) => item.id !== id);
    try {
      await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ updatedData }),
      });
      setFaqData(updatedData);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Function to handle updating an item
  const handleUpdate = async (updatedItem: FAQItem) => {
    const updatedData = faqData.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    try {
      await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ updatedData }),
      });
      setFaqData(updatedData);
      setEditItem(null);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-8 bg-gradient-to-r from-[#1E2A47] to-[#34495E] rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          FAQ Data
        </h2>
        <table className="min-w-full bg-white table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Question</th>
              <th className="px-4 py-2 border">Answer</th>
            </tr>
          </thead>
          <tbody>
          {typedData.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.category}</td>
                <td className="px-4 py-2 border">{item.question}</td>
                <td className="px-4 py-2 border">{item.answer}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => setEditItem(item)}
                    className="px-3 py-1 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Edit Form */}
        {editItem && (
          <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Edit FAQ</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(editItem);
              }}
            >
              <div className="mb-4">
                <label className="block font-bold mb-1">Category</label>
                <input
                  type="text"
                  value={editItem.category}
                  onChange={(e) =>
                    setEditItem({ ...editItem, category: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1">Question</label>
                <input
                  type="text"
                  value={editItem.question}
                  onChange={(e) =>
                    setEditItem({ ...editItem, question: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1">Answer</label>
                <textarea
                  value={editItem.answer}
                  onChange={(e) =>
                    setEditItem({ ...editItem, answer: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditItem(null)}
                  type="button"
                  className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
