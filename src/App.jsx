import { useEffect, useState } from "react";
import CarbonForm from "./Components/CarbonForm";
import Dashboard from "./Components/Dashboard";
import CarbonChart from "./Components/CarbonChart";
import CarbonPieChart from "./Components/CarbonPieChart";

function App() {
  const [entries, setEntries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("carbonData")) || [];
    setEntries(saved);
  }, []);

  const addEntry = (entry) => {
    const updated = [...entries, entry];

    setEntries(updated);

    localStorage.setItem(
      "carbonData",
      JSON.stringify(updated)
    );
  };

  const clearHistory = () => {
    localStorage.removeItem("carbonData");
    setEntries([]);
  };

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-900 text-white p-8"
          : "min-h-screen bg-green-50 p-8"
      }
    >
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h1 className="text-5xl font-bold text-center text-green-600 mb-3">
        EcoTrack
      </h1>

      <p className="text-center text-gray-500 mb-10">
        Carbon Footprint Awareness Platform
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        <CarbonForm addEntry={addEntry} />

        <Dashboard
          entries={entries}
          clearHistory={clearHistory}
        />
      </div>

      {entries.length > 0 && (
        <>
          <div className="mt-8">
            <CarbonChart entries={entries} />
          </div>

          <div className="mt-8">
            <CarbonPieChart
              latest={entries[entries.length - 1]}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;