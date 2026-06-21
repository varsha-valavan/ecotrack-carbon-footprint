export function calculateCarbonFootprint(
  transport,
  electricity,
  food
) {
  return (
    Number(transport) * 0.21 +
    Number(electricity) * 0.5 +
    Number(food) * 2.5
  );
}