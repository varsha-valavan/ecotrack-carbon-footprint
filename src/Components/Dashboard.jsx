export default function Dashboard({ entries, clearHistory }) {
  const total = entries.reduce(
    (sum, item) => sum + item.footprint,
    0
  );

  const status =
    total < 20
      ? "Low Impact 🌱"
      : total < 50
      ? "Moderate Impact ⚡"
      : "High Impact 🔥";

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <div className="mt-4">
        <h3 className="text-4xl font-bold text-green-700">
          {total.toFixed(2)} kg CO₂
        </h3>

        <p className="mt-2 font-semibold">
          {status}
        </p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
        <div
          className="bg-green-600 h-4 rounded-full"
          style={{
            width: `${Math.min(total,100)}%`
          }}
        />
      </div>

      <div className="mt-6">
        <button
          onClick={clearHistory}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Clear History
        </button>
      </div>

      <div className="mt-6">
        <h3 className="font-bold text-lg">
          History
        </h3>

        {entries.map((entry, index) => (
          <div
            key={index}
            className="border rounded p-3 my-2"
          >
            <p>Date: {entry.date}</p>
            <p>
              {entry.footprint.toFixed(2)} kg CO₂
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="font-bold text-lg">
          Recommendations
        </h3>

        <ul className="list-disc ml-5">
          <li>Use bicycles or public transport.</li>
          <li>Switch to LED lighting.</li>
          <li>Reduce meat consumption.</li>
          <li>Plant more trees.</li>
        </ul>
      </div>
    </div>
  );
}