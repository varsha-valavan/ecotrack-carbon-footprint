import { useEffect, useState } from "react";
import CarbonForm from "./Components/CarbonForm";
import Dashboard from "./Components/Dashboard";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("carbonData")) || [];
    setEntries(saved);
  }, []);

  const addEntry = (entry) => {
    const updated = [...entries, entry];
    setEntries(updated);
    localStorage.setItem("carbonData", JSON.stringify(updated));
  };

  const clearHistory = () => {
    localStorage.removeItem("carbonData");
    setEntries([]);
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-5xl font-bold text-center text-green-700 mb-8">
        EcoTrack
      </h1>

      <p className="text-center mb-10 text-gray-600">
        Carbon Footprint Awareness Platform
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <CarbonForm addEntry={addEntry} />
        <Dashboard
          entries={entries}
          clearHistory={clearHistory}
        />
      </div>
    </div>
  );
}

export default App;