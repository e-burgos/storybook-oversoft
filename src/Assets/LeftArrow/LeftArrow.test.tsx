import React from "react";
import LeftArrow from "./LeftArrow";
import { render, screen } from "@testing-library/react";

test("Check default icon values of LeftArrow", () => {
  const view = render(<LeftArrow />);
  expect(view).toBeDefined();
  expect(screen.getByTestId("LeftArrow").tagName).toEqual("svg");
  expect(screen.getByTestId("LeftArrow")).toHaveAttribute("width", "45");
  expect(screen.getByTestId("LeftArrow")).toHaveAttribute("height", "45");
  expect(screen.getByTestId("LeftArrow")).toHaveAttribute("fill", "none");
  expect(screen.getByTestId("LeftArrow")).toHaveAttribute(
    "viewBox",
    "0 0 45 45"
  );
});

test("Check icon props of LeftArrow", () => {
  render(<LeftArrow size={46} />);
  expect(screen.getByTestId("LeftArrow")).toHaveAttribute("width", "46");
  expect(screen.getByTestId("LeftArrow")).toHaveAttribute("height", "46");
});
