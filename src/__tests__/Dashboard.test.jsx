import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import Dashboard from "../Components/Dashboard";

test("dashboard renders", () => {
  const { container } = render(
    <Dashboard entries={[]} clearHistory={() => {}} />
  );

  expect(container).toBeTruthy();
});