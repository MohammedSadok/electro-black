import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useCartStore from "../store/cartStore";
import { Product } from "../types";

interface CartItemProps extends Product {}

const CartItem = ({
  color,
  id,
  imageSrc,
  name,
  price,
  quantity,
}: CartItemProps) => {
  const { reduceProduct, decrementQuantity, incrementQuantity } = useCartStore(
    (state) => ({
      reduceProduct: state.reduceProduct,
      incrementQuantity: state.incrementQuantity,
      decrementQuantity: state.decrementQuantity,
    })
  );
  return (
    <View
      className="flex flex-row px-2 py-2 mx-2 mb-2 bg-white rounded-lg shadow-xl"
      key={id}
    >
      <View className="flex-shrink-0 w-20 h-20 overflow-hidden border border-gray-200 rounded-md">
        <Image
          className="object-cover object-center w-full h-full"
          source={{
            uri: imageSrc,
          }}
        />
      </View>
      <View className="flex flex-1 ml-2">
        <View>
          <View className="flex flex-row justify-between text-base font-medium text-gray-900">
            <Link href={"/"} asChild>
              <Text>{name}</Text>
            </Link>
            <TouchableOpacity
              className="transition active:scale-110"
              onPress={() =>
                reduceProduct({
                  color,
                  id,
                  imageSrc,
                  name,
                  price,
                  quantity,
                })
              }
            >
              <AntDesign name="closecircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text className="my-1 text-sm text-gray-500">{color}</Text>
        </View>
        <View className="flex flex-row items-end justify-between flex-1 text-sm">
          <View className="flex flex-row items-center justify-center gap-3">
            <TouchableOpacity
              disabled={quantity === 1 ? true : false}
              onPress={() =>
                decrementQuantity({
                  color,
                  id,
                  imageSrc,
                  name,
                  price,
                  quantity,
                })
              }
            >
              <AntDesign name="minuscircleo" size={22} color="black" />
            </TouchableOpacity>
            <Text className="text-lg font-bold text-gray-500">{quantity}</Text>
            <TouchableOpacity
              onPress={() =>
                incrementQuantity({
                  color,
                  id,
                  imageSrc,
                  name,
                  price,
                  quantity,
                })
              }
            >
              <AntDesign name="pluscircleo" size={22} color="black" />
            </TouchableOpacity>
          </View>
          <Text className="ml-4 font-bold">$ {price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
