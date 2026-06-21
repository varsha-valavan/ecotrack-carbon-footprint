import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import CarbonForm from "../Components/CarbonForm";

test("renders calculate button", () => {
  render(<CarbonForm addEntry={() => {}} />);

  const button = screen.getByRole("button", {
    name: /calculate carbon footprint/i,
  });

  expect(button).toBeTruthy();
});