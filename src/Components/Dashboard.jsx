function Dashboard({ entries, clearHistory }) {
  const latest =
    entries.length > 0
      ? entries[entries.length - 1]
      : null;

  const getStatus = (value) => {
    if (value < 20)
      return {
        text: "Sustainable",
        color: "bg-green-100 text-green-700",
      };

    if (value < 50)
      return {
        text: "Moderate",
        color: "bg-yellow-100 text-yellow-700",
      };

    return {
      text: "High Impact",
      color: "bg-red-100 text-red-700",
    };
  };

  if (!latest) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          🌍 Carbon Analytics Dashboard
        </h2>

        <div className="flex flex-col items-center justify-center h-80">
          <div className="text-6xl mb-4">🌱</div>

          <h3 className="text-xl font-semibold text-gray-700">
            No Data Available
          </h3>

          <p className="text-gray-500 mt-2">
            Start by calculating your carbon footprint.
          </p>
        </div>
      </div>
    );
  }

  const status = getStatus(Number(latest.total));

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          🌍 Carbon Analytics Dashboard
        </h2>

        <span
          className={`px-4 py-2 rounded-full font-medium ${status.color}`}
        >
          {status.text}
        </span>
      </div>

      {/* Carbon Score */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 text-white mb-8">
        <p className="uppercase text-sm tracking-wider opacity-80">
          Current Carbon Footprint
        </p>

        <h1 className="text-5xl font-bold mt-2">
          {latest.total}
        </h1>

        <p className="text-lg opacity-90">
          kg CO₂ Equivalent
        </p>
      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        <div className="bg-blue-50 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-500 mb-2">
            🚗 Transportation
          </p>

          <h3 className="text-3xl font-bold text-blue-600">
            {latest.transport}
          </h3>

          <p className="text-sm text-gray-500">
            km travelled
          </p>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-500 mb-2">
            ⚡ Electricity
          </p>

          <h3 className="text-3xl font-bold text-yellow-600">
            {latest.electricity}
          </h3>

          <p className="text-sm text-gray-500">
            kWh consumed
          </p>
        </div>

        <div className="bg-red-50 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-500 mb-2">
            🍽️ Food Impact
          </p>

          <h3 className="text-3xl font-bold text-red-600">
            {latest.food}
          </h3>

          <p className="text-sm text-gray-500">
            kg consumption
          </p>
        </div>
      </div>

      {/* Sustainability Insights */}
      <div className="bg-gray-50 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          💡 Sustainability Insights
        </h3>

        <ul className="space-y-3 text-gray-700">
          {latest.transport > 20 && (
            <li>
              • Consider public transport, cycling, or
              carpooling to reduce emissions.
            </li>
          )}

          {latest.electricity > 10 && (
            <li>
              • Reduce electricity usage by switching
              to LED lighting and energy-efficient
              appliances.
            </li>
          )}

          {latest.food > 2 && (
            <li>
              • Incorporate more plant-based meals into
              your weekly diet.
            </li>
          )}

          {latest.transport <= 20 &&
            latest.electricity <= 10 &&
            latest.food <= 2 && (
              <li>
                • Excellent sustainability performance.
                Keep maintaining eco-friendly habits.
              </li>
            )}

          <li>
            • Support renewable energy and sustainable
            lifestyle choices whenever possible.
          </li>
        </ul>
      </div>

      {/* History */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            📈 Activity History
          </h3>

          <button
            onClick={clearHistory}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            Clear Data
          </button>
        </div>

        <div className="space-y-3 max-h-64 overflow-y-auto">
          {entries
            .slice()
            .reverse()
            .map((entry, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {entry.total} kg CO₂
                  </p>

                  <p className="text-sm text-gray-500">
                    Transport: {entry.transport} km |
                    Electricity: {entry.electricity} kWh |
                    Food: {entry.food} kg
                  </p>
                </div>

                <span className="text-xs text-gray-500">
                  {entry.date}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;