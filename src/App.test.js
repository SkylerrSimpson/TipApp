import { render, screen, fireEvent } from "@testing-library/react";
import TipApp from "./TipApp";
test("presets, custom Enter, invalid people and Reset preserve the calculator workflow", () => {
  render(<TipApp />);
  fireEvent.change(screen.getByLabelText("Bill"), { target: { value: "100" } });
  fireEvent.change(screen.getByLabelText("Number of people"), {
    target: { value: "2" },
  });
  fireEvent.click(screen.getByRole("button", { name: "15%" }));
  expect(screen.getByText("$7.50")).toBeInTheDocument();
  expect(screen.getByText("$57.50")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Custom" }));
  const custom = screen.getByLabelText(/Custom tip percentage/);
  fireEvent.change(custom, { target: { value: "12.5" } });
  expect(screen.getByText("$7.50")).toBeInTheDocument();
  fireEvent.keyDown(custom, { key: "Enter" });
  expect(screen.getByText("$6.25")).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText("Number of people"), {
    target: { value: "0" },
  });
  expect(screen.getByRole("alert")).toHaveTextContent("whole person");
  expect(screen.getByRole("status")).not.toHaveTextContent(/NaN|Infinity/);
  fireEvent.click(screen.getByRole("button", { name: "Custom" }));
  fireEvent.change(screen.getByLabelText(/Custom tip percentage/), {
    target: { value: "18" },
  });
  fireEvent.click(screen.getByRole("button", { name: "RESET" }));
  expect(
    screen.queryByLabelText(/Custom tip percentage/),
  ).not.toBeInTheDocument();
  expect(screen.getByLabelText("Number of people")).toHaveValue("1");
  expect(screen.getByLabelText("Bill")).toHaveValue("");
  expect(screen.queryByRole("alert")).not.toBeInTheDocument();
});
