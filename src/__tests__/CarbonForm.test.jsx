import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import CarbonForm from "../Components/CarbonForm";

test("renders calculate button", () => {
  render(<CarbonForm addEntry={() => {}} />);
  expect(
    screen.getByRole("button", {
      name: /calculate carbon footprint/i,
    })
  ).toBeInTheDocument();
});