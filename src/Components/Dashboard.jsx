function Dashboard({ entries, clearHistory }) {
  const latest =
    entries.length > 0
      ? entries[entries.length - 1]
      : null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-green-700">
        Dashboard
      </h2>

      {entries.length === 0 ? (
        <p>No records available.</p>
      ) : (
        <>
          <div className="mb-4">
            <h3 className="font-bold text-lg">
              Latest Carbon Footprint
            </h3>

            <p className="text-xl text-red-600">
              {latest.total} kg CO₂
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-lg">
              History
            </h3>

            <ul className="space-y-2">
              {entries.map((entry, index) => (
                <li
                  key={index}
                  className="border p-2 rounded"
                >
                  {entry.date} — {entry.total} kg CO₂
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-bold text-lg">
              Recommendations
            </h3>

            <ul className="list-disc ml-5">
              {latest.transport > 20 && (
                <li>
                  Use public transport, cycling, or
                  carpooling.
                </li>
              )}

              {latest.electricity > 10 && (
                <li>
                  Reduce electricity usage and switch to
                  LED bulbs.
                </li>
              )}

              {latest.food > 2 && (
                <li>
                  Consider more plant-based meals.
                </li>
              )}

              {latest.transport <= 20 &&
                latest.electricity <= 10 &&
                latest.food <= 2 && (
                  <li>
                    Excellent! Your lifestyle is already
                    eco-friendly.
                  </li>
                )}

              <li>
                Support renewable energy and sustainable
                living practices.
              </li>
            </ul>
          </div>

          <button
            onClick={clearHistory}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear History
          </button>
        </>
      )}
    </div>
  );
}

export default Dashboard;