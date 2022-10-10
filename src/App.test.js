import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import HomePage from "./routes/HomePage";

describe("Home Page", () => {
  it("renders correct heading", () => {
    render(<HomePage />);
    expect(screen.getByText("Jungle")).toBeVisible();
  });

  it("renders check out button", () => {
    render(<HomePage />);
    const cart = screen.getByRole("div", { name: "cart" });

    userEvent.hover(cart);

    expect();
  });
});
