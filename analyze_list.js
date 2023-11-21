import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";

export default function App() {
  // const [record, setRecord] = useState("• 아동 구내염");
  const [record, setRecord] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: "3%",
          paddingTop: "1%",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("app2.js")}>
          <Image
            style={{ width: 10, height: 16 }}
            source={require("./assets/Vectorlessthan2.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 10,
            color: "gray",
            paddingBottom: 12,
            paddingTop: 2,
            paddingLeft: 3,
          }}
        >
          {" "}
          홈
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: "5%",
          flexDirection: "row",
        }}
      >
        <Image
          style={{ width: 23, height: 28 }}
          source={require("./assets/Groupbell.png")}
        />
        <Text
          style={{
            fontSize: 14,
            paddingBottom: 20,
            paddingTop: 7,
            paddingLeft: 3,
          }}
        >
          {" "}
          알림
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("")}>
          <View
            style={{
              flexDirection: "row",
              width: 55,
              marginLeft: 135,
              marginBottom: 5,
              height: 27,
              borderRadius: 40,
              backgroundColor: "#E6E6E6",
              elevation: 5,
            }}
          >
            <Text
              style={{
                paddingTop: 5,
                fontSize: 15,
              }}
            >
              {" "}
              👶🏻
            </Text>
            <Text
              style={{
                paddingTop: 8,
                fontSize: 10,
                marginLeft: -4,
                fontWeight: "bold",
                color: "gray",
              }}
            >
              {" "}
              아이 1
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("")}>
          <View
            style={{
              flexDirection: "row",
              width: 55,
              marginLeft: 10,
              marginBottom: 5,
              height: 27,
              borderRadius: 40,
              backgroundColor: "#FFE1B7",
              elevation: 5,
            }}
          >
            <Text
              style={{
                paddingTop: 5,
                fontSize: 15,
              }}
            >
              {" "}
              👶🏻
            </Text>
            <Text
              style={{
                paddingTop: 8,
                fontSize: 10,
                marginLeft: -4,
                fontWeight: "bold",
              }}
            >
              {" "}
              아이 2
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",
          top: 246,
          bottom: 554,
          left: 152,
          right: 152,
          backgroundColor: "#8CDCE2",
        }}
      ></View>

      <Text
        style={{
          alignSelf: "center",
          fontSize: 17.5,
          marginTop: 25,
          fontWeight: "bold",
          color: "#FAA629",
        }}
      >
        분석 레포트를 다시 열람할 수 있어요!
      </Text>

      <ScrollView style={{ height: 500 }}>
        <View
          style={{
            alignSelf: "center",
            width: "90%",
            marginTop: 30,
            marginBottom: 40,
            borderColor: "#D3D3D3",
            borderWidth: 0.3,
          }}
        />

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginLeft: 25,
              color: "#AEAEAE",
              fontSize: 19,
              fontWeight: "normal",
              color: "#858585",
              marginTop: 0,
            }}
          >
            {" "}
            65점
          </Text>
          <Text style={{ fontSize: 12, color: "#858585", marginTop: 7 }}>
            &nbsp;&nbsp;&nbsp;&nbsp; 분석 레포트
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: "#858585",
              marginTop: 7,
              marginLeft: 155,
              fontWeight: "400",
            }}
          >
            2023.10.16
          </Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            width: "90%",
            marginBottom: 8,
            marginTop: 5,
            marginBottom: 30,
            borderColor: "#D3D3D3",
            borderWidth: 0.3,
          }}
        />

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginLeft: 25,
              color: "#AEAEAE",
              fontSize: 19,
              fontWeight: "normal",
              color: "#858585",
              marginTop: 0,
            }}
          >
            {" "}
            75점
          </Text>
          <Text style={{ fontSize: 12, color: "#858585", marginTop: 7 }}>
            &nbsp;&nbsp;&nbsp;&nbsp; 분석 레포트
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: "#858585",
              marginTop: 7,
              marginLeft: 155,
              fontWeight: "400",
            }}
          >
            2023.10.10
          </Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            width: "90%",
            marginBottom: 8,
            marginTop: 5,
            marginBottom: 30,
            borderColor: "#D3D3D3",
            borderWidth: 0.3,
          }}
        />

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginLeft: 25,
              color: "#AEAEAE",
              fontSize: 19,
              fontWeight: "normal",
              color: "#858585",
              marginTop: 0,
            }}
          >
            {" "}
            65점
          </Text>
          <Text style={{ fontSize: 12, color: "#858585", marginTop: 7 }}>
            &nbsp;&nbsp;&nbsp;&nbsp; 분석 레포트
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: "#858585",
              marginTop: 7,
              marginLeft: 155,
              fontWeight: "400",
            }}
          >
            2023.09.01
          </Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            width: "90%",
            marginBottom: 8,
            marginTop: 5,
            marginBottom: 30,
            borderColor: "#D3D3D3",
            borderWidth: 0.3,
          }}
        />

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginLeft: 25,
              color: "#AEAEAE",
              fontSize: 19,
              fontWeight: "normal",
              color: "#858585",
              marginTop: 0,
            }}
          >
            {" "}
            65점
          </Text>
          <Text style={{ fontSize: 12, color: "#858585", marginTop: 7 }}>
            &nbsp;&nbsp;&nbsp;&nbsp; 분석 레포트
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: "#858585",
              marginTop: 7,
              marginLeft: 155,
              fontWeight: "400",
            }}
          >
            2022.10.12
          </Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            width: "90%",

            marginTop: 5,
            borderColor: "#D3D3D3",
            borderWidth: 0.3,
          }}
        />
        <View
          style={{
            alignSelf: "center",
            width: "90%",
            marginBottom: 8,
            marginTop: 50,
            borderColor: "#D3D3D3",
            borderWidth: 0.3,
          }}
        />
        <View
          style={{
            alignSelf: "center",
            width: "90%",
            marginBottom: 8,
            marginTop: 45,
            borderColor: "#D3D3D3",
            borderWidth: 0.3,
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "white",
  },
  text: {
    height: 40,
    fontSize: 12, // 폰트 크기 설정
  },
});
