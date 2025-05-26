import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, TextInput, View } from "react-native";
import MyButton from "./components/MyButton";

const Login = () => {
  const [value, setValue] = useState({
    value1: "",
    value2: "",
  });

  useEffect(() => {
    console.log("Login Page Rendered");
  }, []);

  const router = useRouter();
  const onLogin = () => {
    // console.log(Number(email) + Number(password));
    console.log("Email: ", value?.value1, "Password: ", value?.value2);
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 400,
        }}
        resizeMode="cover"
      />
      <View
        style={{
          padding: 20,
          gap: 20,
        }}
      >
        <TextInput
          placeholder="Enter Your Email"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          onChangeText={(e) => setValue((prev) => ({ ...prev, value1: e }))}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          onChangeText={(e) => setValue((prev) => ({ ...prev, value2: e }))}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          onChangeText={(e) => setValue((prev) => ({ ...prev, value2: e }))}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          onChangeText={(e) => setValue((prev) => ({ ...prev, value2: e }))}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          onChangeText={(e) => setValue((prev) => ({ ...prev, value2: e }))}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          onChangeText={(e) => setValue((prev) => ({ ...prev, value2: e }))}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          onChangeText={(e) => setValue((prev) => ({ ...prev, value2: e }))}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          onChangeText={(e) => setValue((prev) => ({ ...prev, value2: e }))}
        />
        <MyButton title={"Login"} onPress={onLogin} />
      </View>
    </ScrollView>
  );
};

export default Login;
