import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import ProductCard from "../components/ProductCard";

describe("ProductCard", () => {
  it("renders product information", () => {
    render(
      <ProductCard
        id={1}
        title="Backpack"
        image="test-image.jpg"
        price={49.99}
        description="Test description"
        onAddToCart={vi.fn()}
      />,
    );

    expect(screen.getByText("Backpack")).toBeInTheDocument();

    expect(screen.getByText("$49.99")).toBeInTheDocument();

    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("calls onAddToCart when button is clicked", async () => {
    const mockAddToCart = vi.fn();

    const user = userEvent.setup();

    render(
      <ProductCard
        id={1}
        title="Backpack"
        image="test-image.jpg"
        price={49.99}
        description="Test description"
        onAddToCart={mockAddToCart}
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: /add to cart/i,
      }),
    );

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
});
