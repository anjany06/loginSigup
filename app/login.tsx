import React from "react";
import { ScrollView, View } from "react-native";

const Login = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ marginTop: 40, padding: 20 }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 5, 5, 5, 55, 5, 5, 5, 5, 5, 5, 5].map(
        (item) => {
          return (
            <View
              key={item}
              style={{
                width: 100,
                height: 100,
                backgroundColor: "orange",
                margin: 10,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          );
        }
      )}
    </ScrollView>
  );
};

export default Login;
