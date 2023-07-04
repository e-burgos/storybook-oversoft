import React from "react";
import RightArrow from "./RightArrow";
import { render, screen } from "@testing-library/react";

test("Check default icon values of RightArrow", () => {
  const view = render(<RightArrow />);
  expect(view).toBeDefined();
  expect(screen.getByTestId("RightArrow").tagName).toEqual("svg");
  expect(screen.getByTestId("RightArrow")).toHaveAttribute("width", "45");
  expect(screen.getByTestId("RightArrow")).toHaveAttribute("height", "45");
  expect(screen.getByTestId("RightArrow")).toHaveAttribute("fill", "none");
  expect(screen.getByTestId("RightArrow")).toHaveAttribute(
    "viewBox",
    "0 0 45 45"
  );
});

test("Check icon props of RightArrow", () => {
  render(<RightArrow size={46} />);
  expect(screen.getByTestId("RightArrow")).toHaveAttribute("width", "46");
  expect(screen.getByTestId("RightArrow")).toHaveAttribute("height", "46");
});
