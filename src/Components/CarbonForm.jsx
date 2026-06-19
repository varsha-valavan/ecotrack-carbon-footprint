import { useState } from "react";

function CarbonForm({ addEntry }) {
  const [transport, setTransport] = useState("");
  const [electricity, setElectricity] = useState("");
  const [food, setFood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const total =
      Number(transport) * 0.21 +
      Number(electricity) * 0.5 +
      Number(food) * 2.5;

    const entry = {
      transport: Number(transport),
      electricity: Number(electricity),
      food: Number(food),
      total: total.toFixed(2),
      date: new Date().toLocaleString(),
    };

    addEntry(entry);

    setTransport("");
    setElectricity("");
    setFood("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-green-700">
        Calculate Footprint
      </h2>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Transport Distance (km)
        </label>

        <input
          type="number"
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <label className="block mb-2">
          Electricity Usage (kWh)
        </label>

        <input
          type="number"
          value={electricity}
          onChange={(e) => setElectricity(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <label className="block mb-2">
          Meat Consumption (kg)
        </label>

        <input
          type="number"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Calculate
        </button>
      </form>
    </div>
  );
}

export default CarbonForm;