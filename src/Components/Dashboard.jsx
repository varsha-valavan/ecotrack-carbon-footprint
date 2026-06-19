<div className="mt-6">
  <h3 className="font-bold text-lg">
    Recommendations
  </h3>

  <ul className="list-disc ml-5">
    {total < 20 ? (
      <>
        <li>Great job! Your carbon footprint is low.</li>
        <li>Continue using sustainable transportation.</li>
        <li>Support renewable energy initiatives.</li>
      </>
    ) : total < 50 ? (
      <>
        <li>Reduce unnecessary travel.</li>
        <li>Switch to LED lighting and energy-efficient appliances.</li>
        <li>Consider reducing meat consumption.</li>
      </>
    ) : (
      <>
        <li>Use public transport or carpool frequently.</li>
        <li>Reduce electricity consumption significantly.</li>
        <li>Adopt a more plant-based diet.</li>
        <li>Offset emissions by planting trees.</li>
      </>
    )}
  </ul>
</div>