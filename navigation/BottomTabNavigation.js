import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Iconify } from "react-native-iconify";

import Home from "../screens/Home";
import Child_Management from "../screens/Child_Management";
import Information from "../screens/Information";
import Food_Chatbot from "../screens/Food_Chatbot";
import Medicine_Analysis1 from "../screens/Medicine_Analysis1";
import Medicine_Analysis2 from "../screens/Medicine_Analysis2";
import Medicine_Analysis3 from "../screens/Medicine_Analysis3";
import Medicine_Analysis4 from "../screens/Medicine_Analysis4";
import Medicine_Analysis5 from "../screens/Medicine_Analysis5";
import Medicine_Analysis6 from "../screens/Medicine_Analysis6";
import AI_Question from "../screens/AI_Question";
import Disease_Encyclopedia1 from "../screens/Disease_Encyclopedia1";
import Disease_Encyclopedia2 from "../screens/Disease_Encyclopedia2";
import { Icon } from "react-native-elements";

// const BottomTabNavigationIcon = ({ iconName, color, size }) => {
//   return <Iconify icon={iconName} color={color} size={size} />;
// };

const BottomTabNavigator = createBottomTabNavigator();
const StackNavigator = createStackNavigator();

const Home_Stack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="홈1"
        component={Home}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name="아이 관리"
        component={Child_Management}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name="알림"
        component={Information}
        options={{ headerShown: false }}
      />
    </StackNavigator.Navigator>
  );
};

const Medicine_Analysis_Stack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="처방전 등록"
        component={Medicine_Analysis1}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name="직접 등록"
        component={Medicine_Analysis2}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name="약 선택"
        component={Medicine_Analysis3}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name="중간 알림"
        component={Medicine_Analysis4}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name="약성분 분석"
        component={Medicine_Analysis5}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name="음식 분석"
        component={Medicine_Analysis6}
        options={{ headerShown: false }}
      />
    </StackNavigator.Navigator>
  );
};

const Disease_Encyclopedia_Stack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="질환백과1"
        component={Disease_Encyclopedia1}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name="질환백과2"
        component={Disease_Encyclopedia2}
        options={{ headerShown: false }}
      />
    </StackNavigator.Navigator>
  );
};

const BottomTabNavigation = () => {
  return (
    <BottomTabNavigator.Navigator
      initialRouteName="홈"
      screenOptions={{
        tabBarActiveTintColor: "#FBB144",
        tabBarStyle: {
          elevation: 20,
          height: 60,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderTopWidth: 0,
        },
        tabBarIconStyle: {
          position: "absolute",
          top: 25,
        },
        tabBarLabelStyle: {
          position: "absolute",
          top: 40,
          fontSize: 10,
        },
      }}
    >
      <BottomTabNavigator.Screen
        name="홈"
        component={Home_Stack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Iconify icon="lucide:baby" size={size} color={color} />
          ),
          // headerRight: (props) => <AlertButton {...props} />,
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name="식품 챗봇"
        component={Food_Chatbot}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Iconify icon="ep:bowl" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name="약 분석"
        component={Medicine_Analysis_Stack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Iconify
              icon="healthicons:medicines-outline"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name="AI 질문"
        component={AI_Question}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Iconify icon="solar:cat-linear" size={size} color={color} />
          ),
          tabBarHideOnKeyboard: true,
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name="질환백과"
        component={Disease_Encyclopedia_Stack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Iconify icon="iconoir:book" size={size} color={color} />
          ),
          tabBarHideOnKeyboard: true,
          headerShown: false,
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default BottomTabNavigation;
