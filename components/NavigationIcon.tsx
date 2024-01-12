import { AntDesign, EvilIcons, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Animated, StyleSheet, View } from "react-native";

interface NavigationIconProps {
  route: string;
  isFocused: boolean;
}

const NavigationIcon = ({ route, isFocused }: NavigationIconProps) => {
  const renderIcon = (route: string, isFocues: boolean) => {
    let height: number = 20;
    let width: number = 20;

    switch (route) {
      case "index":
        return isFocues ? (
          <AntDesign
            name="home"
            size={20}
            color="black"
            height={height}
            width={width}
          />
        ) : (
          <AntDesign
            name="home"
            size={20}
            color="black"
            height={height}
            width={width}
          />
        );
      case "search":
        return isFocues ? (
          <FontAwesome
            name="search"
            size={20}
            color="black"
            height={height}
            width={width}
          />
        ) : (
          <EvilIcons
            name="search"
            size={20}
            color="black"
            height={height}
            width={width}
          />
        );
      case "profile":
        return isFocues ? (
          <FontAwesome
            name="user"
            size={20}
            color="black"
            height={height}
            width={width}
          />
        ) : (
          <FontAwesome
            name="user"
            size={20}
            color="black"
            height={height}
            width={width}
          />
        );
      default:
        break;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

const styles = StyleSheet.create({});

export default NavigationIcon;
