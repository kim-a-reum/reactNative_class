import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const onChangeEmail = (event) => {
    console.log(event.nativeEvent.text);
    setEmail(event.nativeEvent.text);
  };
  const onPressLogin = () => {
    navigation.navigate("LoginSuccess", { email: email });
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.logo}
          source={require("../../../public/login/logo.png")}
        ></Image>
      </View>
      <View style={styles.middle}>
        <TextInput
          style={styles.emailBox}
          placeholder="이메일 혹은 유저네임을 입력해주세요"
          onChange={onChangeEmail}
        ></TextInput>
        <TextInput
          style={styles.passwordBox}
          placeholder="비밀번호를 입력해주세요"
        ></TextInput>
        <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
          <Text>로그인</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Text style={styles.findText}> 아이디찾기 | </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.findText}>비밀번호 찾기 </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    flex: 0.18,
  },
  logo: {
    width: 100,
    height: 100,
  },
  middle: {
    padding: 20,
    flex: 0.22,
  },
  emailBox: {
    borderWidth: 1.5,
    width: 300,
    height: 40,
    borderRadius: 12,
    borderColor: "lightgray",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  passwordBox: {
    borderWidth: 1.5,
    width: 300,
    height: 40,
    borderRadius: 12,
    borderColor: "lightgray",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    width: 300,
    height: 40,
    backgroundColor: "#FFE100",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  bottom: {
    width: 200,
    flexDirection: "row",
    justifyContent: "center",
  },
  findText: {
    color: "gray",
  },
});
