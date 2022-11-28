import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Welcome page", () => {
  render(<App />);
  const titleElement = screen.getByText(/Welcome to Intentional AI/i);
  expect(titleElement).toBeInTheDocument();
});
