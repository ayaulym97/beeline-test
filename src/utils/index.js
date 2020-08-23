
import {Dimensions, Platform, PixelRatio} from 'react-native';
export const Theme = {
  colors: {
    white: "#FFFFFF",
    primary: "#3D3D4F",
    secondary: "#76C741",
    inactive: "#C4C4C4",
    text: "#333333",
    lightGray: "#DADADA",
    darkGray: "#979797",
    border: "#F6F6F6",
    red: "#FF5438",
    purple: "#AD00FF",
    santasGray:"#9F9FAF",
    brightGray:"#EAEAEA",
    suvaGray:"#8A8A8A",
    silver:"#BDBDBD",
    whiteSmoke:"#F2F2F2"
  },
  weight: {
    Thin: "100",
    UltraLight: "200",
    Light: "300",
    Regular: "400",
    Medium: "500",
    Semibold: "600",
    Bold: "700",
    Heavy: "800",
    Black: "900",
  },
};

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get(
  'window',
);
// based on iphone 11s's scale
const scale = SCREEN_WIDTH / 375;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
//

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */

const HP = (heightPercent) => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100);
};

export {HP};
