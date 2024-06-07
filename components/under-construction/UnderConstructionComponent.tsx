import { Image } from "react-native";
import { UnderConstructionStyle } from "./UnderConstructionStyle";

export default function UnderConstructionComponent() {
  const underConstructionUrl = "./under-construction.jpg";

  return (
    <Image
      source={require(underConstructionUrl)}
      style={UnderConstructionStyle.image}
    />
  );
}
