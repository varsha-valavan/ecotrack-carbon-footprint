function Dashboard({ entries, clearHistory }) {
  const latest =
    entries.length > 0
      ? entries[entries.length - 1]
      : null;

  const getStatus = () => {
    if (!latest) return "";

    if (latest.total < 20) return "🌱 Excellent";
    if (latest.total < 50) return "🌿 Moderate";
    return "🔥 High";
  };

  return (
    <div className="bg-gradient-to-br from-green-100 to-emerald-50 p-6 rounded-3xl shadow-xl border border-green-200">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-4">
        🌍 Eco Dashboard
      </h2>

      {entries.length === 0 ? (
        <div className="text-center py-10">
          <div className="text-6xl mb-3">🐣</div>
          <p className="text-gray-600 text-lg">
            No records yet.
          </p>
          <p className="text-sm text-gray-500">
            Start calculating your carbon footprint!
          </p>
        </div>
      ) : (
        <>
          {/* Latest Footprint Card */}
          <div className="bg-white rounded-2xl shadow-md p-5 mb-5">
            <h3 className="text-xl font-bold mb-2 text-green-700">
              📊 Latest Carbon Footprint
            </h3>

            <p className="text-4xl font-bold text-red-500">
              {latest.total} kg CO₂
            </p>

            <div className="mt-3 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
              {getStatus()}
            </div>
          </div>

          {/* Cute Stats */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-blue-100 p-4 rounded-2xl text-center">
              <div className="text-3xl">🚗</div>
              <p className="font-bold">{latest.transport}</p>
              <p className="text-sm">km</p>
            </div>

            <div className="bg-yellow-100 p-4 rounded-2xl text-center">
              <div className="text-3xl">💡</div>
              <p className="font-bold">{latest.electricity}</p>
              <p className="text-sm">kWh</p>
            </div>

            <div className="bg-pink-100 p-4 rounded-2xl text-center">
              <div className="text-3xl">🍔</div>
              <p className="font-bold">{latest.food}</p>
              <p className="text-sm">kg</p>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-2xl shadow-md p-5 mb-5">
            <h3 className="text-xl font-bold text-green-700 mb-3">
              🌿 Eco Tips
            </h3>

            <ul className="space-y-2">
              {latest.transport > 20 && (
                <li>
                  🚲 Try cycling, walking or public transport.
                </li>
              )}

              {latest.electricity > 10 && (
                <li>
                  💡 Switch off unused appliances and use LEDs.
                </li>
              )}

              {latest.food > 2 && (
                <li>
                  🥗 Add more plant-based meals to your diet.
                </li>
              )}

              {latest.transport <= 20 &&
                latest.electricity <= 10 &&
                latest.food <= 2 && (
                  <li>
                    🌟 Amazing! Your lifestyle is eco-friendly.
                  </li>
                )}

              <li>
                🌎 Support renewable energy whenever possible.
              </li>
            </ul>
          </div>

          {/* History */}
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-xl font-bold text-green-700 mb-3">
              📅 Footprint History
            </h3>

            <div className="max-h-56 overflow-y-auto">
              {entries
                .slice()
                .reverse()
                .map((entry, index) => (
                  <div
                    key={index}
                    className="bg-green-50 border border-green-100 p-3 rounded-xl mb-2"
                  >
                    <div className="flex justify-between">
                      <span>🌱 {entry.total} kg CO₂</span>
                      <span className="text-xs text-gray-500">
                        {entry.date}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Clear Button */}
          <div className="text-center mt-6">
            <button
              onClick={clearHistory}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full shadow-lg transition"
            >
              🗑️ Clear History
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;