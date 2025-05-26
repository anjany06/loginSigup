import React from "react";
import { FlatList, Text, View } from "react-native";

const Login = () => {
  return (
    <View>
      <FlatList
        contentContainerStyle={{
          paddingTop: 40,
        }}
        data={[1, 2, 3, 4, 5, 5, 6, 9, 8, 9]}
        numColumns={3}
        
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "red",
                marginBottom: 20,
                marginRight: 20,
              }}
            >
              <Text>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Login;
