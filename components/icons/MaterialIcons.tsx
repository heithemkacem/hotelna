// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import IoniconsIcon from "@expo/vector-icons/MaterialIcons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export function MaterialIcon({
  style,
  size = 23,
  ...rest
}: IconProps<ComponentProps<typeof IoniconsIcon>["name"]>) {
  return <IoniconsIcon size={size} style={style} {...rest} />;
}
