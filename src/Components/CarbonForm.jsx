<div className="mt-6">
  <h3 className="font-bold text-lg">
    Recommendations
  </h3>

  <ul className="list-disc ml-5">
    {entries.length > 0 && (
      <>
        {entries[entries.length - 1].transport > 20 && (
          <li>
            Your travel emissions are high. Consider public transport, cycling, or carpooling.
          </li>
        )}

        {entries[entries.length - 1].electricity > 10 && (
          <li>
            Your electricity consumption is above average. Switch off unused appliances and use LED bulbs.
          </li>
        )}

        {entries[entries.length - 1].food > 2 && (
          <li>
            Meat consumption contributes significantly to emissions. Try adding more plant-based meals.
          </li>
        )}

        {entries[entries.length - 1].transport <= 20 &&
          entries[entries.length - 1].electricity <= 10 &&
          entries[entries.length - 1].food <= 2 && (
            <li>
              Excellent! Your lifestyle choices are already environmentally friendly.
            </li>
          )}

        <li>
          Support renewable energy and sustainable living practices.
        </li>
      </>
    )}
  </ul>
</div>