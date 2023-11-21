import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export const Medicine_Analysis6 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            position: "absolute",
            top: 50,
            bottom: -50,
            left: 0,
            right: "75%",
            borderColor: "#FDFDFF",
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            backgroundColor: "#F4F4F4",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("약성분 분석");
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                paddingLeft: 15,
                paddingTop: 15,
                color: "#959595",
              }}
            >
              {" "}
              약성분 분석{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "25%",
            height: 40,
            marginTop: 50,
            marginLeft: "25%",
            borderColor: "#FDFDFF",
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            backgroundColor: "#FAA629",
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                paddingLeft: 20,
                paddingTop: 15,
                color: "#FFFFFF",
              }}
            >
              {" "}
              음식 분석{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ borderRadius: 50 }}>
        <View
          style={{
            width: "100%",
            height: 610,
            borderWidth: 1,
            elevation: 10,
            borderColor: "#FDFDFF",
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
            backgroundColor: "#FFFFFF",
          }}
        >
          <Text
            style={{
              marginHorizontal: "27%",
              color: "#858585",
              marginVertical: 30,
              marginBottom: 5,
              fontSize: 12,
            }}
          >
            2023/ 10/ 16 월요일 제조받았어요!{" "}
          </Text>
          <Text
            style={{
              marginHorizontal: "20%",
              color: "black",
              marginBottom: 10,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            김꾸꾸 의 레포트 분석 결과예요.{" "}
          </Text>

          <ScrollView style={{ height: 1000 }}>
            <View
              style={{
                flexDirection: "row",
                marginLeft: "10%",
                marginTop: 20,
                width: "80%",
                height: 35,
                backgroundColor: "#ECF8F9",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  paddingVertical: 6,
                  paddingLeft: 30,
                  paddingRight: 1,
                  fontSize: 15,
                }}
              >
                {" "}
                🤧
              </Text>
              <Text
                style={{
                  paddingVertical: 5,
                  alignSelf: "center",
                  paddingLeft: 10,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                [비염] 코가 막혀 호흡이 불편해요!
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: "10%",
                marginTop: 10,
                width: "80%",
                height: 35,
                backgroundColor: "#ECF8F9",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  paddingVertical: 6,
                  paddingLeft: 30,
                  paddingRight: 1,
                  fontSize: 15,
                }}
              >
                {" "}
                🤒
              </Text>
              <Text
                style={{
                  paddingVertical: 5,
                  alignSelf: "center",
                  paddingLeft: 10,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                [비염] 맑은 콧물이 나와요!
              </Text>
            </View>

            <View
              style={{
                width: "80%",
                marginBottom: 20,
                marginTop: 20,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <Text
              style={{ alignSelf: "center", fontWeight: "bold", fontSize: 18 }}
            >
              이런 음식들을 조심해주세요.{" "}
            </Text>

            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                marginLeft: "10%",
                marginTop: 20,
                width: "80%",
                height: 80,
                backgroundColor: "#ffeacc",
                borderRadius: 15,
              }}
            >
              <View style={{ paddingLeft: 20 }}>
                <Image
                  style={{ width: 70, height: 70 }}
                  source={require("../assets/report_food_milk.png")}
                ></Image>
              </View>
              <View style={{ paddingLeft: 25 }}>
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../assets/report_food_icecream.png")}
                ></Image>
              </View>
              <View style={{ paddingLeft: 30 }}>
                <Image
                  style={{ width: 70, height: 70 }}
                  source={require("../assets/report_food_cheese.png")}
                ></Image>
              </View>
            </View>

            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                marginLeft: "10%",
                marginTop: 10,
                width: "80%",
                height: 80,
                backgroundColor: "#d1ebbc",
                borderRadius: 15,
              }}
            >
              <View style={{ paddingLeft: 20 }}>
                <Image
                  style={{ width: 70, height: 70 }}
                  source={require("../assets/report_food_milk.png")}
                ></Image>
              </View>
              <View style={{ paddingLeft: 25 }}>
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../assets/report_food_icecream.png")}
                ></Image>
              </View>
              <View style={{ paddingLeft: 30 }}>
                <Image
                  style={{ width: 70, height: 70 }}
                  source={require("../assets/report_food_cheese.png")}
                ></Image>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Medicine_Analysis6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#A1E6EB",
  },
});
