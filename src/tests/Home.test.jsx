import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import { describe, it, expect } from "vitest";

describe("Home component", () => {
  it("renders the page title", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(screen.getByText(/odin shop/i)).toBeInTheDocument();
  });
});
