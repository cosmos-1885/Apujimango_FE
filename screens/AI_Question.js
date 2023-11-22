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
  KeyboardAvoidingView,
} from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const AI_Question = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState(null);

  const requestPost = async () => {
    const data = {
      content: text,
    };
    setText("");

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

  const renderResponse = () => {
    if (response === null) {
      return (
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginTop: 160,
              fontSize: 21,
              fontWeight: "bold",
            }}
          >
            안냥~
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 21,
              fontWeight: "bold",
            }}
          >
            궁금한 게 있냥~
          </Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginTop: 150,
              fontSize: 21,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {response.data["content"]}
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            // backgroundColor: "#ffffff",
            height: 670,
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          {renderResponse()}
          <Image
            source={require("../assets/mango_cat.png")}
            style={{
              marginTop: 60,
              width: 180,
              height: 200,
            }}
          />
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              color: "#747474",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            망고냥이가
            <Text
              style={{
                fontSize: 15,
                color: "#6FBCC2",
                fontWeight: "bold",
              }}
            >
              {" "}
              아이 건강관리와 복약지도
            </Text>
            {"\n"} 고민 해결을 도와드릴게요.
          </Text>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              marginTop: 80,
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 10,
                  height: 24,
                  width: 230,
                  // paddingVertical: 2,
                  borderRadius: 50,
                  backgroundColor: "#DFDFDF",
                }}
              >
                <Text
                  style={{
                    // paddingVertical: 3,
                    // paddingHorizontal: 8,
                    fontSize: 11,
                    fontWeight: "bold",
                    color: "#515151",
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
                  justifyContent: "center",
                  marginLeft: 10,
                  marginRight: 10,
                  height: 24,
                  width: 200,
                  // paddingVertical: 2,
                  borderRadius: 50,
                  backgroundColor: "#DFDFDF",
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    color: "#515151",
                  }}
                >
                  ❓ 아이가 탕후루를 너무 많이 먹어요
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>

      <View
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "#F6F6F6",
          elevation: 40,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/plus.png")}
          style={{ width: 18, height: 18, marginLeft: 5 }}
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
            width: 290,
          }}
        />

        <TouchableOpacity onPress={requestPost}>
          <Image
            source={require("../assets/send.png")}
            style={{
              width: 30,
              height: 30,
              marginLeft: 15,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AI_Question;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: "10%",
    backgroundColor: "#F6F6F6",
  },
});
