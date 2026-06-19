import { useState } from "react";

export default function CarbonForm({ addEntry }) {
  const [transport, setTransport] = useState("");
  const [electricity, setElectricity] = useState("");
  const [food, setFood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const footprint =
      transport * 0.21 +
      electricity * 0.5 +
      food * 2;

    addEntry({
      transport,
      electricity,
      food,
      footprint,
      date: new Date().toLocaleDateString()
    });

    setTransport("");
    setElectricity("");
    setFood("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        Carbon Calculator
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Travel Distance (km)"
          className="w-full border p-3 mb-3 rounded"
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Electricity Usage (kWh)"
          className="w-full border p-3 mb-3 rounded"
          value={electricity}
          onChange={(e) => setElectricity(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Meat Meals Per Day"
          className="w-full border p-3 mb-3 rounded"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          required
        />

        <button
          className="bg-green-600 text-white px-5 py-3 rounded-lg w-full"
        >
          Calculate Footprint
        </button>
      </form>
    </div>
  );
}