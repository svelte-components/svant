import { generate as generateColor } from "@ant-design/colors";

export function normalizeTwoToneColors(colors) {
  if (!colors) {
    return [];
  }

  return Array.isArray(colors) ? colors : [colors];
}

export function getTwoToneColors({ primaryColor, secondaryColor }) {
  return {
    primaryColor,
    secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
  };
}

export function getSecondaryColor(primaryColor) {
  // choose the second color
  return generateColor(primaryColor)[0];
}
