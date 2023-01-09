import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const Field = ({ color, action, container }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => {
        action(container);
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: color,
          alignSelf: "stretch",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            color: "white",
          }}
        >
          {container}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Field;
