import React from "react";
import { Text, Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Iconify } from "react-native-iconify";

export const Home = ({ navigation }) => {
  return (
    <View
      style={{
        // flex: 1,
        height: 730,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 105,
            height: 50,
            marginTop: 40,
            marginLeft: 20,
          }}
          source={require("../assets/logo.png")}
        />

        <TouchableOpacity onPress={() => navigation.navigate("알림")}>
          <Image
            style={{
              width: 20,
              height: 25,
              marginTop: 40,
              marginLeft: 220,
            }}
            source={require("../assets/alert.png")}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            height: 210,
            marginTop: 30,
            borderRadius: 20,
            borderWidth: 3,
            borderColor: "#D5D5D540",
            // alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../assets/cat.png")}
              style={{ width: 110, height: 110 }}
            />

            <View
              style={{
                marginLeft: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#A1A1A1",
                  }}
                >
                  1:1 실시간으로{"\n"}고민을 해결해드릴게요.
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  ChatGPT에게 물어보는{"\n"}복약지도 및 건강관리 노하우!
                </Text>
              </View>
            </View>
          </View>

          <Text
            style={{
              marginTop: 5,
              marginLeft: 30,
              fontSize: 15,
              color: "#89D4DA",
              fontWeight: "bold",
            }}
          >
            AI 질문하러 가기
          </Text>
          <Text
            style={{
              marginTop: 15,
              marginLeft: 30,
              fontSize: 9,
              color: "#A5A5A5",
            }}
          >
            망고냥이는 의약품안전사용서비스(DUR) DB를 학습한 ChatGPT임을
            알려드립니다.
          </Text>
        </View>

        <View
          style={{
            marginTop: 30,
            width: "90%",
            height: 150,
            backgroundColor: "#FFDDAD6E",
            borderRadius: 20,
            borderWidth: 3,
            borderColor: "#D5D5D540",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("아이 관리")}>
            <View>
              <Text
                style={{
                  marginTop: 13,
                  marginLeft: 20,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                우리 아이를 등록하고,{"\n"}맞춤형 건강관리를 해보세요!
              </Text>
            </View>
            <View
              style={{
                marginTop: 3,
                marginLeft: 20,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "#D5840C",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                >> 아이 등록하기
              </Text>
              <Image
                source={require("../assets/bag.png")}
                style={{ marginLeft: 130, width: 75, height: 75 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "90%",
            height: 140,
            marginTop: 30,
            borderRadius: 20,
            borderWidth: 3,
            borderColor: "#D5D5D540",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/bell.png")}
            style={{ width: 73, height: 78 }}
          />
          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              언제든, 바로 물어보세요!
            </Text>
            <View
              style={{
                marginTop: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Iconify icon="ep:bowl" size={18} color={"#FAA629"} />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 11,
                  color: "#949494",
                }}
              >
                복약 중인데 먹으면 안되는 음식이 뭘까요?
              </Text>
            </View>
            <View
              style={{
                marginTop: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Iconify
                icon="healthicons:medicines-outline"
                size={19}
                color={"#FAA629"}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 11,
                  color: "#949494",
                }}
              >
                우리 아이가 어떤 약을 먹는지 궁금해요!
              </Text>
            </View>
            <View
              style={{
                marginTop: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Iconify icon="solar:cat-linear" size={18} color={"#FAA629"} />
              <View>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 11,
                    color: "#949494",
                  }}
                >
                  아이가 약을 잘 안 먹어요.{"\n"}재미있게 먹을 수 있는 방법은
                  없을까요?
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
