import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";

export const Information = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 40,
          marginLeft: 10,
          //   textAlign: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../assets/lessthan_image.png")}
        />
        <Text
          style={{
            fontSize: 15,
            color: "#818181",
            // paddingBottom: "10%",
            // paddingTop: 2,
          }}
        >
          {" "}
          홈
        </Text>
      </TouchableOpacity>

      <View
        style={{
          marginLeft: 20,
          marginTop: 15,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 23, height: 28 }}
          source={require("../assets/Groupbell.png")}
        />
        <Text
          style={{
            marginLeft: 5,
            fontSize: 15,
            fontWeight: "bold",
            color: "#666666",
          }}
        >
          {" "}
          알림
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: 65,
            height: 30,
            borderRadius: 30,
            backgroundColor: "#ffb9576e",
            alignItems: "center",
            // elevation: 1,
          }}
        >
          <Text
            style={{
              marginLeft: 2,
              fontSize: 15,
            }}
          >
            {" "}
            👶🏻
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "bold",
            }}
          >
            {" "}
            아이 1
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: 65,
            height: 30,
            marginLeft: 10,
            borderRadius: 30,
            backgroundColor: "#E6E6E6",
            alignItems: "center",
            // elevation: 1,
          }}
        >
          <Text
            style={{
              marginLeft: 2,
              fontSize: 15,
              color: "#7F7F7F",
            }}
          >
            {" "}
            👶🏻
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "bold",
              color: "#7F7F7F",
            }}
          >
            {" "}
            아이 2
          </Text>
        </View>
      </View>

      <Text
        style={{
          alignSelf: "center",
          fontSize: 18,
          marginTop: 30,
          fontWeight: "bold",
          color: "#FAA629",
        }}
      >
        분석 레포트를 다시 열람할 수 있어요!
      </Text>

      <View
        style={{
          alignSelf: "center",
          width: "90%",
          marginTop: 30,
          borderColor: "#CDCDCD",
          borderWidth: 0.3,
        }}
      />

      <ScrollView style={{ marginTop: 50, height: 500 }}>
        <View
          style={{
            marginHorizontal: 25,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#858585",
              fontSize: 23,
            }}
          >
            {" "}
            65점
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#858585",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            분석 레포트
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "#666666",
              marginTop: 13,
              marginLeft: 135,
            }}
          >
            2023.10.16
          </Text>
        </View>

        <View
          style={{
            alignSelf: "center",
            width: "90%",
            marginTop: 5,
            borderColor: "#CDCDCD",
            borderWidth: 0.3,
          }}
        />

        <View
          style={{
            marginTop: 20,
            marginHorizontal: 25,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#858585",
              fontSize: 23,
            }}
          >
            {" "}
            70점
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#858585",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            분석 레포트
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "#666666",
              marginTop: 13,
              marginLeft: 135,
            }}
          >
            2023.10.10
          </Text>
        </View>

        <View
          style={{
            alignSelf: "center",
            width: "90%",
            marginTop: 5,
            borderColor: "#CDCDCD",
            borderWidth: 0.3,
          }}
        />

        <View
          style={{
            marginTop: 20,
            marginHorizontal: 25,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#858585",
              fontSize: 23,
            }}
          >
            {" "}
            65점
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#858585",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            분석 레포트
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "#666666",
              marginTop: 13,
              marginLeft: 135,
            }}
          >
            2023.09.01
          </Text>
        </View>

        <View
          style={{
            alignSelf: "center",
            width: "90%",
            marginTop: 5,
            borderColor: "#CDCDCD",
            borderWidth: 0.3,
          }}
        />

        <View
          style={{
            marginTop: 20,
            marginHorizontal: 25,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#858585",
              fontSize: 23,
            }}
          >
            {" "}
            65점
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#858585",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            분석 레포트
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "#666666",
              marginTop: 13,
              marginLeft: 135,
            }}
          >
            2023.08.29
          </Text>
        </View>

        <View
          style={{
            alignSelf: "center",
            width: "90%",
            marginTop: 5,
            borderColor: "#CDCDCD",
            borderWidth: 0.3,
          }}
        />

        <View
          style={{
            alignSelf: "center",
            width: "90%",
            marginTop: 50,
            borderColor: "#CDCDCD",
            borderWidth: 0.3,
          }}
        />

        <View
          style={{
            alignSelf: "center",
            width: "90%",
            marginTop: 50,
            borderColor: "#CDCDCD",
            borderWidth: 0.3,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: "26%",
    backgroundColor: "#f6f6f6",
  },
  text: {
    color: "#616161",
    fontSize: 10, // 폰트 크기 설정
    textAlign: "center",
    // margin: 5,
    // borderWidth: 1,
  },
});
