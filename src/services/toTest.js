import { isNumber } from "lodash";

export function calculateCirclePerimeter(radius) {
  if (isNumber(radius)) {
    return Number((2 * Math.PI * radius).toFixed(2));
  }
  throw new Error();
}

export function calculateCircleArea(radius) {
  return radius * radius * Math.PI;
}
