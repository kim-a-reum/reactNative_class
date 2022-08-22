import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const LoginSuccess = ({ route }) => {
  const [asyncStorage, setAsyncstorage] = useState({});

  const props = route.params;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await AsyncStorage.getItem("passWord");
    setAsyncstorage(JSON.parse(data));
  };

  console.log(asyncStorage.passWord);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text>{props.email}</Text>님 반갑습니다!
        <Text>{asyncStorage.passWord}</Text>{" "}
      </Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={{ fontSize: 20, fontWeight: "800" }}>완료</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    paddingBottom: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 30,
    fontWeight: "900",
  },
  nameText: {
    fontSize: 30,
    fontWeight: "900",
    color: "FFE100",
  },
  loginButton: {
    width: 380,
    height: 50,
    backgroundColor: "#FFE100",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
