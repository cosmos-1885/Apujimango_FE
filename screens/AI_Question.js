import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const AI_Question = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const requestPost = async () => {
    const data = {
      content: text,
    };

    try {
      const response = await axios.post(
        "http://168.131.151.212:8000/apujimango/",
        data
      );
      setResponse(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View>
        <Text
          style={{
            marginTop: 125,
            alignSelf: "center",
            fontSize: 19,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          혹시, 아이가 알레르기가 있냥? {"\n"}
          <Text style={{ fontSize: 6 }}>{"\n"}</Text>
          <Text style={{ color: "#F49C1A" }}>알레르기명</Text>을 말해주라옹~
        </Text>
        <Text>{response ? response.data["title"] : null}</Text>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/realize_cat.png")}
            style={{ width: 181, height: 220, marginTop: 37 }}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            marginBottom: 85,
            fontSize: 14,
            textAlign: "center",
            color: "#9A9A9A",
          }}
        >
          추가로 아이의 특이사항이 있다면, 입력해주세요.
        </Text>
      </View>

      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View
            style={{
              flexDirection: "row",
              marginLeft: 15,
              marginTop: 20,
              marginBottom: 16,
              height: 30,
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  marginHorizontal: 5,
                  height: 24,
                  paddingVertical: 2,
                  borderRadius: 50,
                  backgroundColor: "#FAA629",
                }}
              >
                <Text
                  style={{
                    paddingVertical: 3,
                    paddingHorizontal: 8,
                    fontSize: 10,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  ❓ 감기 시럽약은 어떻게 먹이는 게 좋을까?
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  marginHorizontal: 8,
                  height: 24,
                  paddingVertical: 3,
                  borderRadius: 50,
                  backgroundColor: "#DFDFDF",
                }}
              >
                <Text
                  style={{
                    paddingVertical: 2,
                    paddingHorizontal: 8,
                    fontSize: 10,
                    fontWeight: "bold",
                    color: "#515151",
                  }}
                >
                  ❓ 아이가 탕후루를 너무 많이 먹어요
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={{ elevation: 100 }}>
        <View
          style={{
            width: "100%",
            height: 85,
            backgroundColor: "#F6F6F6",
            elevation: 40,
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../assets/plus.png")}
            style={{ width: 18, height: 18, marginLeft: 10, marginTop: 15 }}
          />

          <TextInput
            placeholder="입력하세요."
            placeholderTextColor={"#BCBCBC"}
            onChangeText={setText}
            value={text}
            style={{
              color: "black",
              fontSize: 13,
              marginLeft: 15,
              marginTop: -35,
            }}
          />

          <TouchableOpacity onPress={requestPost}>
            <Image
              source={require("../assets/send.png")}
              style={{
                width: 30,
                height: 30,
                marginLeft: 240,
                marginTop: 8,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AI_Question;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
    backgroundColor: "#F6F6F6",
  },
});
