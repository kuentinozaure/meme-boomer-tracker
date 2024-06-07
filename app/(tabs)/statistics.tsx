import UnderConstructionComponent from "../../components/under-construction/UnderConstructionComponent";
import { SafeAreaView, View } from "react-native";
import { Styles } from "./style";

export default function HomeScreen() {
  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <UnderConstructionComponent />
      </View>
    </SafeAreaView>
  );
}
