import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export const Medicine_Analysis5 = ({ navigation }) => {
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
            backgroundColor: "#FAA629",
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                paddingLeft: 15,
                paddingTop: 15,
                color: "#FFFFFF",
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
            backgroundColor: "#F4F4F4",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("음식 분석");
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                paddingLeft: 20,
                paddingTop: 15,
                color: "#959595",
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
            우리 아이1의 레포트 분석 결과예요.{" "}
          </Text>
          <ScrollView style={{ height: 1000 }}>
            <Text
              style={{
                marginHorizontal: "30%",
                color: "#FAA629",
                marginTop: 10,
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              우리 아이의 주의케어 점수{" "}
            </Text>

            <View style={{ alignItems: "center", marginVertical: 10 }}>
              <Image source={require("../assets/report_score.png")} />
            </View>

            <View
              style={{
                flexDirection: "row",
                width: "70%",
                marginHorizontal: "15%",
                height: 25,
                borderRadius: 40,
                backgroundColor: "#ffeacc",
              }}
            >
              <Text
                style={{
                  paddingVertical: 2,
                  paddingLeft: 30,
                  paddingRight: 1,
                  fontSize: 15,
                }}
              >
                {" "}
                🍵
              </Text>
              <Text
                style={{
                  paddingVertical: 5,
                  paddingLeft: 1,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {" "}
                규칙적인 식생활과 휴식이 필요해요.
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginLeft: "15%",
                  marginTop: 30,
                  width: 15,
                  height: 15,
                  backgroundColor: "#FAA629",
                  borderRadius: 40,
                }}
              ></View>
              <View
                style={{
                  marginLeft: 8,
                  marginTop: 30,
                  width: 15,
                  height: 15,
                  backgroundColor: "#F1B8FF",
                  borderRadius: 40,
                }}
              ></View>
              <View
                style={{
                  marginLeft: 8,
                  marginTop: 30,
                  width: 15,
                  height: 15,
                  backgroundColor: "#A3D779",
                  borderRadius: 40,
                }}
              ></View>
              <Text
                style={{ marginHorizontal: 10, marginTop: 28, color: "gray" }}
              >
                {" "}
                입력한 약 3개를 분석한 결과예요.{" "}
              </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: "15.5%",
                  marginTop: 10,
                  width: 130,
                  height: 35,
                  backgroundColor: "#ECF8F9",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "gray",
                    fontSize: 13,
                    fontWeight: "bold",
                    marginLeft: 10,
                    marginTop: 8,
                  }}
                >
                  {" "}
                  이상 반응{" "}
                </Text>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 8,
                  marginTop: 10,
                  width: 130,
                  height: 35,
                  backgroundColor: "#ECF8F9",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "gray",
                    fontSize: 13,
                    fontWeight: "bold",
                    marginLeft: 10,
                    marginTop: 8,
                  }}
                >
                  {" "}
                  주의 음식{" "}
                </Text>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 10,
                width: 270,
                height: 35,
                backgroundColor: "#ECF8F9",
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: 13,
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginTop: 8,
                }}
              >
                {" "}
                복용 시간 난이도{" "}
              </Text>
              <View
                style={{
                  marginLeft: 5,
                  marginTop: 14,
                  width: 8,
                  height: 8,
                  backgroundColor: "#FAA629",
                  borderRadius: 40,
                }}
              ></View>
              <View
                style={{
                  marginLeft: 5,
                  marginTop: 14,
                  width: 8,
                  height: 8,
                  backgroundColor: "#FAA629",
                  borderRadius: 40,
                }}
              ></View>
              <View
                style={{
                  marginLeft: 5,
                  marginTop: 14,
                  width: 8,
                  height: 8,
                  backgroundColor: "#FAA629",
                  borderRadius: 40,
                }}
              ></View>
              <View
                style={{
                  marginLeft: 5,
                  marginTop: 14,
                  width: 8,
                  height: 8,
                  backgroundColor: "#FAA629",
                  borderRadius: 40,
                }}
              ></View>
            </View>

            {/* ----------------------여기서부터 약1 --------------------------*/}
            <View
              style={{
                width: "80%",
                marginBottom: 25,
                marginTop: 25,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginLeft: "15%",
                  width: 25,
                  height: 25,
                  backgroundColor: "#FFB957",
                  borderRadius: 40,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    textAlign: "center",
                    marginTop: -2,
                  }}
                >
                  {" "}
                  1{" "}
                </Text>
              </View>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  backgroundColor: "#ffeacc",
                  fontSize: 15,
                }}
              >
                배포탄정 - 항히스타민제{" "}
              </Text>
            </View>

            <View
              style={{
                marginRight: 30,
                alignItems: "center",
                marginVertical: 15,
              }}
            >
              <Image
                source={require("../assets/BDT_medicine.png")}
                style={{ width: 190, height: 105 }}
              />
            </View>

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 10,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#ffeacc",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                투약량/횟수/일수{" "}
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
                marginLeft: "5%",
                flexDirection: "row",
              }}
            >
              <Text style={{ marginVertical: 3, marginLeft: 50, fontSize: 9 }}>
                1회투약량
              </Text>
              <View
                style={{
                  marginVertical: 3,
                  marginLeft: 5,
                  width: 23,
                  height: 14,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    marginTop: -2,
                    fontWeight: "bold",
                    fontSize: 11,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  1{" "}
                </Text>
              </View>
              <Text style={{ marginVertical: 3, marginLeft: 20, fontSize: 9 }}>
                1일투여횟수
              </Text>
              <View
                style={{
                  marginVertical: 3,
                  marginLeft: 5,
                  width: 23,
                  height: 14,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    marginTop: -2,
                    fontWeight: "bold",
                    fontSize: 11,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  2{" "}
                </Text>
              </View>
              <Text style={{ marginVertical: 3, marginLeft: 20, fontSize: 9 }}>
                총투약일수
              </Text>
              <View
                style={{
                  marginVertical: 3,
                  marginLeft: 5,
                  width: 23,
                  height: 14,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    marginTop: -2,
                    fontWeight: "bold",
                    fontSize: 11,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  4{" "}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 7,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#ffeacc",
                }}
              ></View>
              <Text style={{ marginTop: 3, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                효능군{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%" }}>
              <Text style={{ marginBottom: 3, fontSize: 10 }}>
                항히스타민제
              </Text>

              <Text style={{ marginBottom: 3, fontSize: 10 }}>
                알레르기 반응 완화, 염증 및 발진 완화 효과가 있어요.
              </Text>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 7,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#ffeacc",
                }}
              ></View>
              <Text style={{ marginTop: 3, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                약 주의사항{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%" }}>
              <Text style={{ marginVertical: 3, fontSize: 10 }}>
                졸음, 두통, 어지러움, 피로 증상이 나타날 수 있어요.
              </Text>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 7,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#ffeacc",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                용량 제한{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%" }}>
              <Text style={{ marginVertical: 3, fontSize: 10 }}>X</Text>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 7,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#ffeacc",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                상세 보관 방법{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%" }}>
              <Text style={{ marginVertical: 3, fontSize: 10 }}>
                기밀용기,실온(1-30℃)보관
              </Text>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 10,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#ffeacc",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                복용 지도{" "}
              </Text>
            </View>

            <View style={{ marginLeft: 60, marginBottom: 7 }}>
              <Image
                style={{ width: 150, height: 60 }}
                source={require("../assets/eat_guide1.png")}
              />
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 10,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#ffeacc",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                이런 음식들은 조심해주세요!{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%", flexDirection: "row" }}>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../assets/report_milk.png")}
                />
                <Text style={{ marginTop: 0, marginBottom: 10, fontSize: 10 }}>
                  우유
                </Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: 15 }}>
                <Image
                  style={{ width: 55, height: 55 }}
                  source={require("../assets/dairy.png")}
                />
                <Text style={{ marginTop: 5, marginBottom: 10, fontSize: 10 }}>
                  유제품류
                </Text>
              </View>
            </View>
            {/* --------------------------------------여기서부터 2번째 약 ----------------------------- */}
            <View
              style={{
                width: "80%",
                marginBottom: 22,
                marginTop: 10,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginLeft: "15%",
                  width: 25,
                  height: 25,
                  backgroundColor: "#F1B8FF",
                  borderRadius: 40,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    textAlign: "center",
                    marginTop: -2,
                  }}
                >
                  {" "}
                  2{" "}
                </Text>
              </View>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  backgroundColor: "#f6d2ff",
                  fontSize: 15,
                }}
              >
                슈다펜정 - 비염, 콧물약{" "}
              </Text>
            </View>

            <View
              style={{
                marginRight: 30,
                alignItems: "center",
                marginVertical: 15,
              }}
            >
              <Image
                source={require("../assets/suda_medicine.png")}
                style={{ width: 190, height: 105 }}
              />
            </View>

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 10,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#f6d2ff",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                투약량/횟수/일수{" "}
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
                marginLeft: "5%",
                flexDirection: "row",
              }}
            >
              <Text style={{ marginVertical: 3, marginLeft: 50, fontSize: 9 }}>
                1회투약량
              </Text>
              <View
                style={{
                  marginVertical: 3,
                  marginLeft: 5,
                  width: 23,
                  height: 14,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    marginTop: -2,
                    fontWeight: "bold",
                    fontSize: 11,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  0.5{" "}
                </Text>
              </View>
              <Text style={{ marginVertical: 3, marginLeft: 20, fontSize: 9 }}>
                1일투여횟수
              </Text>
              <View
                style={{
                  marginVertical: 3,
                  marginLeft: 5,
                  width: 23,
                  height: 14,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    marginTop: -2,
                    fontWeight: "bold",
                    fontSize: 11,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  2{" "}
                </Text>
              </View>
              <Text style={{ marginVertical: 3, marginLeft: 20, fontSize: 9 }}>
                총투약일수
              </Text>
              <View
                style={{
                  marginVertical: 3,
                  marginLeft: 5,
                  width: 23,
                  height: 14,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    marginTop: -2,
                    fontWeight: "bold",
                    fontSize: 11,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  4{" "}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 7,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#f6d2ff",
                }}
              ></View>
              <Text style={{ marginTop: 3, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                효능군{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%" }}>
              <Text style={{ marginBottom: 3, fontSize: 10 }}>
                감기, 독감 및 알레르기로 인한 코막힘 증상을 개선해줘요.
              </Text>

              <Text style={{ marginBottom: 3, fontSize: 10 }}>
                알레르기 반응 완화, 염증 및 발진 완화 효과가 있어요.
              </Text>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 7,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#f6d2ff",
                }}
              ></View>
              <Text style={{ marginTop: 3, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                약 주의사항{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%" }}>
              <Text style={{ marginVertical: 3, fontSize: 10 }}>
                디비 연결~
              </Text>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 7,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#f6d2ff",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                용량 제한{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%" }}>
              <Text style={{ marginVertical: 3, fontSize: 10 }}>
                1일 최대 ‘슈도에프드린염산염 240mg’ 이내로 복용해야해요.
              </Text>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 7,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#f6d2ff",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                상세 보관 방법{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%" }}>
              <Text style={{ marginVertical: 3, fontSize: 10 }}>
                밀폐용기 보관,실온(1-30℃)보관
              </Text>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 10,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#f6d2ff",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                복용 지도{" "}
              </Text>
            </View>

            <View style={{ marginLeft: 70, marginBottom: 7 }}>
              <Image
                style={{ width: 90, height: 55 }}
                source={require("../assets/eat_guide2.png")}
              />
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 10,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#f6d2ff",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                이런 음식들은 조심해주세요!{" "}
              </Text>
            </View>

            <View
              style={{
                marginLeft: "18%",
                flexDirection: "row",
                marginBottom: 40,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  height: 60,
                  width: 60,
                  borderRadius: 10,
                  backgroundColor: "#fbfbfb",
                  elevation: 8,
                }}
              >
                <Image
                  style={{
                    marginTop: 10,
                    width: 45,
                    height: 45,
                  }}
                  source={require("../assets/x.png")}
                />
                <Text style={{ marginTop: 15, marginBottom: 30, fontSize: 10 }}>
                  없음
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "80%",
                marginBottom: 22,
                marginTop: 10,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginLeft: "15%",
                  width: 25,
                  height: 25,
                  backgroundColor: "#d2f3d5",
                  borderRadius: 40,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    textAlign: "center",
                    marginTop: -2,
                  }}
                >
                  {" "}
                  3{" "}
                </Text>
              </View>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  backgroundColor: "#e2f3d5",
                  fontSize: 15,
                }}
              >
                슈다펜정 - 비염, 콧물약{" "}
              </Text>
            </View>

            <View
              style={{
                marginRight: 30,
                alignItems: "center",
                marginVertical: 15,
              }}
            >
              <Image
                source={require("../assets/suda_medicine.png")}
                style={{ width: 190, height: 105 }}
              />
            </View>

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 10,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#e2f3d5",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                투약량/횟수/일수{" "}
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
                marginLeft: "5%",
                flexDirection: "row",
              }}
            >
              <Text style={{ marginVertical: 3, marginLeft: 50, fontSize: 9 }}>
                1회투약량
              </Text>
              <View
                style={{
                  marginVertical: 3,
                  marginLeft: 5,
                  width: 23,
                  height: 14,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    marginTop: -2,
                    fontWeight: "bold",
                    fontSize: 11,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  1{" "}
                </Text>
              </View>
              <Text style={{ marginVertical: 3, marginLeft: 20, fontSize: 9 }}>
                1일투여횟수
              </Text>
              <View
                style={{
                  marginVertical: 3,
                  marginLeft: 5,
                  width: 23,
                  height: 14,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    marginTop: -2,
                    fontWeight: "bold",
                    fontSize: 11,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  2{" "}
                </Text>
              </View>
              <Text style={{ marginVertical: 3, marginLeft: 20, fontSize: 9 }}>
                총투약일수
              </Text>
              <View
                style={{
                  marginVertical: 3,
                  marginLeft: 5,
                  width: 23,
                  height: 14,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    marginTop: -2,
                    fontWeight: "bold",
                    fontSize: 11,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  4{" "}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 7,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#e2f3d5",
                }}
              ></View>
              <Text style={{ marginTop: 3, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                효능군{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%" }}>
              <Text style={{ marginBottom: 3, fontSize: 10 }}>
                부신피질호르몬
              </Text>

              <Text style={{ marginBottom: 3, fontSize: 10 }}>
                염증을 줄이고 과도한 면역반응을 억제해요.
              </Text>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 7,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#e2f3d5",
                }}
              ></View>
              <Text style={{ marginTop: 3, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                약 주의사항{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%" }}>
              <Text style={{ marginVertical: 3, fontSize: 10 }}>
                졸음, 현기증, 시야흐릠을 유발할 수 있어요!
              </Text>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 7,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#e2f3d5",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                용량 제한{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%" }}>
              <Text style={{ marginVertical: 3, fontSize: 10 }}>
                질환에 따라 '4mg~48mg' 이내로 복용해야 해요!
              </Text>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 7,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#e2f3d5",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                상세 보관 방법{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%" }}>
              <Text style={{ marginVertical: 3, fontSize: 10 }}>
                기밀용기 보관,실온(1-30℃)보관
              </Text>
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 10,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#e2f3d5",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                복용 지도{" "}
              </Text>
            </View>

            <View style={{ marginLeft: 70, marginBottom: 7 }}>
              <Image
                style={{ width: 90, height: 55 }}
                source={require("../assets/eat_guide2.png")}
              />
            </View>

            <View
              style={{
                width: "80%",
                marginVertical: 8,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 6,
                  marginBottom: 10,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#e2f3d5",
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                이런 음식들은 조심해주세요!{" "}
              </Text>
            </View>

            <View
              style={{
                marginLeft: "18%",
                flexDirection: "row",
                marginBottom: 40,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../assets/report_milk.png")}
                />
                <Text style={{ marginTop: 0, marginBottom: 10, fontSize: 10 }}>
                  우유
                </Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: 15 }}>
                <Image
                  style={{ width: 55, height: 55 }}
                  source={require("../assets/dairy.png")}
                />
                <Text style={{ marginTop: 5, marginBottom: 10, fontSize: 10 }}>
                  유제품류
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Medicine_Analysis5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#A1E6EB",
  },
});
