import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";

export const Food_Chatbot = () => {
  const [isTouched, setIsTouched] = useState(0);
  const [isCold, setIsCold] = useState(false);
  const [isFood, setIsFood] = useState(false);
  const [isGoodFood, setIsGoodFood] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isTouched !== 0) {
        if (isCold === false) {
          setIsCold(true);
          this.scrollView.scrollTo({
            y: 1000,
          });
          setIsTouched(3);
        } else {
          if (isFood === false) {
            setIsFood(true);
            this.scrollView.scrollTo({
              y: 1000,
            });
          } else {
            if (isGoodFood === false) {
              setIsGoodFood(true);
              this.scrollView.scrollTo({
                y: 1000,
              });
            }
          }
        }
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [isTouched]);

  // const handlePress2 = () => {
  //   setIsTouched(!isTouched); // 터치할 때마다 상태를 반전시킴
  //   this.scrollView.scrollTo({
  //     y: 1050,
  //   });
  // };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={(ref) => (this.scrollView = ref)}
        style={{ height: 1000 }}
      >
        {/* 1번째 챗 */}
        <View
          style={{
            marginTop: 50,
            marginLeft: 30,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 45,
              height: 45,
              backgroundColor: "#EDEBE8",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 33, height: 33 }}
              source={require("../assets/cat.png")}
            />
          </View>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 15,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            망고냥이
          </Text>
        </View>

        <View
          style={{
            width: 0,
            height: 0,
            backgroundColor: "transparent",
            borderStyle: "solid",
            borderLeftWidth: 12,
            borderRightWidth: 12,
            borderBottomWidth: 18,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: "#E0DCD66E",
            marginLeft: 53,
            marginTop: 3,
          }}
        />
        <View
          style={{
            // flexDirection: "row",
            width: 260,
            marginLeft: 30,
            borderRadius: 15,
            backgroundColor: "#E0DCD66E",
          }}
        >
          <Text
            style={{
              marginVertical: 15,
              marginHorizontal: 12,
              fontSize: 11,
            }}
          >
            {" "}
            아이에게 나타난 증상이 무엇인가요? {"\n"}
            {"\n"}
            증상별
            <Text
              style={{
                // paddingVertical: 5,
                // paddingLeft: 1,
                fontSize: 11,
                fontWeight: "bold",
              }}
            >
              🚫주의해야할 음식🚫
            </Text>
            이 어떤 것이 있는지 {"\n"}
            궁금하신가요? {"\n"}
            {"\n"}
            제가 도와드릴게요!
          </Text>
        </View>

        <View
          style={{
            width: 260,
            marginLeft: 30,
            borderRadius: 15,
            backgroundColor: "#E0DCD66E",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              marginTop: 15,
              marginHorizontal: 20,
              fontSize: 13,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {" "}
            먼저 아이의 증상을 알려주실래요?
          </Text>
          <Text
            style={{
              marginTop: 10,
              textAlign: "center",
              fontSize: 10,
            }}
          >
            찾고있는 증상이 목록에 없다면,{"\n"}
            증상을 2글자 이상 채방창에 직접 입력해주세요.
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              marginHorizontal: 50,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => setIsTouched(1)}>
              <View
                style={{
                  width: 80,
                  height: 40,
                  alignItems: "center",
                  borderRadius: 15,
                  backgroundColor: isTouched === 1 ? "#F8BC62" : "#DADADA",
                  // marginTop: 5,
                  // y: 100,
                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    textAlign: "center",
                    color: "#464646",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  감기
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  width: 80,
                  height: 40,
                  marginLeft: 10,
                  alignItems: "center",
                  borderRadius: 15,
                  backgroundColor: "#DADADA",
                  // marginTop: 5,
                  // y: 100,
                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    textAlign: "center",
                    color: "#464646",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  설사
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 8,
              marginHorizontal: 50,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  width: 80,
                  height: 40,
                  alignItems: "center",
                  borderRadius: 15,
                  backgroundColor: "#DADADA",
                  // marginTop: 5,
                  // y: 100,
                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    textAlign: "center",
                    color: "#464646",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  아토피
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  width: 80,
                  height: 40,
                  marginLeft: 10,
                  alignItems: "center",
                  borderRadius: 15,
                  backgroundColor: "#DADADA",
                  // marginTop: 5,
                  // y: 100,
                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    textAlign: "center",
                    color: "#464646",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  수면
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 8,
              marginHorizontal: 50,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  width: 80,
                  height: 40,
                  alignItems: "center",
                  borderRadius: 15,
                  backgroundColor: "#DADADA",
                  // marginTop: 5,
                  // y: 100,
                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    textAlign: "center",
                    color: "#464646",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  해열
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  width: 80,
                  height: 40,
                  marginLeft: 10,
                  alignItems: "center",
                  borderRadius: 15,
                  backgroundColor: "#DADADA",
                  // marginTop: 5,
                  // y: 100,
                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    textAlign: "center",
                    color: "#464646",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  소화
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 8,
              marginBottom: 15,
              marginHorizontal: 50,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  width: 80,
                  height: 40,
                  alignItems: "center",
                  borderRadius: 15,
                  backgroundColor: "#DADADA",
                  // marginTop: 5,
                  // y: 100,
                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    textAlign: "center",
                    color: "#464646",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  성장
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  width: 80,
                  height: 40,
                  marginLeft: 10,
                  alignItems: "center",
                  borderRadius: 15,
                  backgroundColor: "#DADADA",
                  // marginTop: 5,
                  // y: 100,
                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    textAlign: "center",
                    color: "#464646",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  불안
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* 2번째 챗 */}
        {isCold ? (
          <View>
            <View
              style={{
                marginTop: 30,
                marginLeft: 30,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: 45,
                  height: 45,
                  backgroundColor: "#EDEBE8",
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 33, height: 33 }}
                  source={require("../assets/cat.png")}
                />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                망고냥이
              </Text>
            </View>

            <View
              style={{
                width: 0,
                height: 0,
                backgroundColor: "transparent",
                borderStyle: "solid",
                borderLeftWidth: 12,
                borderRightWidth: 12,
                borderBottomWidth: 18,
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
                borderBottomColor: "#E0DCD66E",
                marginLeft: 53,
                marginTop: 3,
              }}
            />

            <View
              style={{
                width: 260,
                marginLeft: 30,
                borderRadius: 15,
                backgroundColor: "#E0DCD66E",
              }}
            >
              <Text
                style={{
                  marginVertical: 15,
                  marginHorizontal: 12,
                  fontSize: 11,
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  [ 감기 ]
                </Text>{" "}
                증상에 대해서 궁금하시군요.{"\n"}
                {"\n"}
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  [ 감기 ]
                </Text>{" "}
                증상일 때,
                <Text
                  style={{
                    paddingVertical: 5,
                    paddingLeft: 1,
                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  🚫주의해야할 음식🚫
                </Text>
                은 다음과{"\n"}
                같습니다.
                {"\n"}
                {"\n"}
                1. 떡볶이{"\n"}
                2. 아이스크림{"\n"}
                3. 초코
              </Text>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 28,
                    marginTop: 10,
                    height: 200,
                  }}
                >
                  <TouchableOpacity>
                    <View
                      style={{
                        alignItems: "center",
                        marginHorizontal: 5,
                        // height: 170,
                        width: 150,
                        borderRadius: 20,
                        backgroundColor: "#ffeacc",
                      }}
                    >
                      <Image
                        source={require("../assets/food1.png")}
                        style={{
                          width: 150,
                          height: 100,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        }}
                      />
                      <Text
                        style={{
                          paddingBottom: 20,
                          paddingTop: 5,
                          paddingHorizontal: 12,
                          fontSize: 8,
                          marginBottom: -20,
                        }}
                      >
                        <Text
                          style={{
                            paddingVertical: 5,
                            fontSize: 11,
                            fontWeight: "bold",
                          }}
                        >
                          떡볶이 {"\n"}
                        </Text>
                        감기 초기라면 열이 오르기 전에 에너지 소모를 아끼기 위해
                        맵고 짠을 피하는 게 좋아요!{"\n"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={{
                        alignItems: "center",
                        marginHorizontal: 5,
                        width: 150,
                        borderRadius: 20,
                        backgroundColor: "#ffeacc",
                      }}
                    >
                      <Image
                        source={require("../assets/food2.png")}
                        style={{
                          width: 150,
                          height: 100,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        }}
                      />
                      <Text
                        style={{
                          paddingBottom: 20,
                          paddingTop: 5,
                          paddingHorizontal: 12,
                          fontSize: 8,
                          marginBottom: -20,
                        }}
                      >
                        <Text
                          style={{
                            paddingVertical: 5,
                            fontSize: 11,
                            fontWeight: "bold",
                          }}
                        >
                          아이스크림 {"\n"}
                        </Text>
                        유제품을 먹으면 몸속에 있는 점액이 더 진해지는 경우가
                        있어 코와 목의 통증과 가래를 더욱 심하게 만들 수 있어요!
                        {"\n"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={{
                        alignItems: "center",
                        marginHorizontal: 5,
                        width: 150,
                        borderRadius: 20,
                        backgroundColor: "#ffeacc",
                      }}
                    >
                      <Image
                        source={require("../assets/food3.png")}
                        style={{
                          width: 150,
                          height: 100,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        }}
                      />
                      <Text
                        style={{
                          paddingBottom: 20,
                          paddingTop: 5,
                          paddingHorizontal: 12,
                          fontSize: 8,
                          marginBottom: -20,
                        }}
                      >
                        <Text
                          style={{
                            paddingVertical: 5,
                            fontSize: 11,
                            fontWeight: "bold",
                          }}
                        >
                          초코 {"\n"}
                        </Text>
                        시중 판매제품 20~30% 카카오 함유 초콜릿은 당분이 과하게
                        많아 백혈구를 약하게 해요!{"\n"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  width: 250,
                  marginTop: -20,
                  marginLeft: 35,
                  borderRadius: 20,
                  backgroundColor: "#E1F4F5",
                  elevation: 3,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    marginVertical: 5,
                    paddingHorizontal: 12,
                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  📎 [ 감기 ] 증상에 대한 의학정보가 궁금하다면?
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null}

        {/* 3번째 챗 */}
        {isFood ? (
          <View>
            <View
              style={{
                marginTop: 30,
                marginLeft: 30,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: 45,
                  height: 45,
                  backgroundColor: "#EDEBE8",
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 33, height: 33 }}
                  source={require("../assets/cat.png")}
                />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                망고냥이
              </Text>
            </View>

            <View
              style={{
                width: 0,
                height: 0,
                backgroundColor: "transparent",
                borderStyle: "solid",
                borderLeftWidth: 12,
                borderRightWidth: 12,
                borderBottomWidth: 18,
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
                borderBottomColor: "#E0DCD66E",
                marginLeft: 53,
                marginTop: 3,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                width: 260,
                marginHorizontal: "8%",
                borderRadius: 15,
                backgroundColor: "#edebe8",
              }}
            >
              <Text
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  fontSize: 11,
                  fontWeight: "bold",
                }}
              >
                [ 감기 ]{" "}
                <Text
                  style={{
                    paddingVertical: 5,
                    fontSize: 11,
                    fontWeight: "normal",
                  }}
                >
                  증상에 도움이 되는 음식도 알려드릴까요?
                </Text>
              </Text>
            </View>
            <View
              style={{ marginTop: 8, flexDirection: "row", marginVertical: 5 }}
            >
              <TouchableOpacity
                onPress={() => {
                  setIsTouched(4);
                }}
              >
                <View
                  style={{
                    width: 110,
                    marginLeft: 32,
                    marginRight: 5,
                    borderRadius: 15,
                    backgroundColor: isTouched === 4 ? "#F8BC62" : "#EDEBE8",
                  }}
                >
                  <Text
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 12,
                      fontSize: 10,
                    }}
                  >
                    <Text style={{ fontSize: 13 }}>🧐</Text> 네, 알려주세요.
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    width: 85,
                    borderRadius: 15,
                    // backgroundColor: "#edebe8",
                    backgroundColor: "#EDEBE8",
                  }}
                >
                  <Text
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 12,
                      fontSize: 10,
                    }}
                  >
                    <Text style={{ fontSize: 13 }}>😊 </Text>
                    괜찮아요.
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        {/* 4번재 챗 */}
        {isGoodFood ? (
          <View>
            <View
              style={{
                marginTop: 30,
                marginLeft: 30,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: 45,
                  height: 45,
                  backgroundColor: "#EDEBE8",
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 33, height: 33 }}
                  source={require("../assets/cat.png")}
                />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                망고냥이
              </Text>
            </View>

            <View
              style={{
                width: 0,
                height: 0,
                backgroundColor: "transparent",
                borderStyle: "solid",
                borderLeftWidth: 12,
                borderRightWidth: 12,
                borderBottomWidth: 18,
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
                borderBottomColor: "#E0DCD66E",
                marginLeft: 53,
                marginTop: 3,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                width: 260,
                marginHorizontal: "8%",
                borderRadius: 15,
                backgroundColor: "#edebe8",
              }}
            >
              <Text
                style={{
                  paddingVertical: 15,
                  paddingHorizontal: 12,
                  fontSize: 11,
                  marginBottom: -20,
                }}
              >
                <Text
                  style={{
                    paddingVertical: 5,
                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  [ 감기 ]
                </Text>{" "}
                증상일 때,
                <Text
                  style={{
                    paddingVertical: 5,

                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  👍도움되는 음식👍{" "}
                </Text>
                은 다음과 {"\n"}같습니다.{"\n"}
                {"\n"}
                1. 비타민C, 비타민D 함유된 과일, 채소{"\n"}
                2. 유자차나 녹차{"\n"}
                3. 염증 완화에 좋은 붉은 양배추, 강황, 브로콜리 {"\n"}
              </Text>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 25,
                    marginTop: 10,
                    // marginBottom: 20,
                    height: 200,
                  }}
                >
                  <TouchableOpacity>
                    <View
                      style={{
                        alignItems: "center",
                        marginHorizontal: 5,
                        // height: 170,
                        width: 140,
                        borderRadius: 20,
                        backgroundColor: "#ffeacc",
                      }}
                    >
                      <Image
                        source={require("../assets/helpful_food1.png")}
                        style={{
                          width: 140,
                          height: 100,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        }}
                      />
                      <Text
                        style={{
                          paddingBottom: 20,
                          paddingTop: 5,
                          paddingHorizontal: 12,
                          fontSize: 8,
                          marginBottom: -20,
                        }}
                      >
                        <Text
                          style={{
                            paddingVertical: 5,
                            fontSize: 11,
                            fontWeight: "bold",
                          }}
                        >
                          귤, 고추, 피망 {"\n"}
                        </Text>
                        비타민C, 비타민D 함유된 과일이나 채소가 도움이돼요.
                        {"\n"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={{
                        alignItems: "center",
                        marginHorizontal: 5,
                        width: 140,
                        borderRadius: 20,
                        backgroundColor: "#ffeacc",
                      }}
                    >
                      <Image
                        source={require("../assets/help_food2.png")}
                        style={{
                          width: 140,
                          height: 100,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        }}
                      />
                      <Text
                        style={{
                          paddingBottom: 20,
                          paddingTop: 5,
                          paddingHorizontal: 12,
                          fontSize: 8,
                          marginBottom: -20,
                        }}
                      >
                        <Text
                          style={{
                            paddingVertical: 5,
                            fontSize: 11,
                            fontWeight: "bold",
                          }}
                        >
                          유자차, 녹차{"\n"}
                        </Text>
                        입 안이 건조하지 않게 따뜻한 물이나 차를 먹는 게 좋아요.
                        {"\n"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={{
                        alignItems: "center",
                        marginHorizontal: 5,
                        width: 140,
                        borderRadius: 20,
                        backgroundColor: "#ffeacc",
                      }}
                    >
                      <Image
                        source={require("../assets/help_food3.png")}
                        style={{
                          width: 140,
                          height: 100,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        }}
                      />
                      <Text
                        style={{
                          paddingBottom: 20,
                          paddingTop: 5,
                          paddingHorizontal: 12,
                          fontSize: 8,
                          marginBottom: -20,
                        }}
                      >
                        <Text
                          style={{
                            paddingVertical: 5,
                            fontSize: 10,
                            fontWeight: "bold",
                          }}
                        >
                          붉은양배추, 강황, 브로콜리 {"\n"}
                        </Text>
                        염증을 빨리 낫는데 도움이 되는 채소예요.
                        {"\n"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        ) : null}
      </ScrollView>

      <View style={{ elevation: 100 }}>
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#F6F6F6",
            elevation: 40,
            flexDirection: "row",
          }}
        >
          <TextInput
            placeholder="망고냥이에게 질문하세요."
            placeholderTextColor={"#BCBCBC"}
            style={{
              color: "black",
              fontSize: 13,
              marginLeft: 20,
              marginTop: 3,
            }}
          />

          <TouchableOpacity>
            <Image
              source={require("../assets/send.png")}
              style={{
                position: "absolute",
                left: 190,
                right: 10,
                width: 32,
                height: 31,
                marginRight: "5%",
                marginTop: 8,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Food_Chatbot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: "26%",
    backgroundColor: "#f6f6f6",
  },
});
