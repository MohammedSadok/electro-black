import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import useCartStore from "../store/cartStore";
import { Product } from "../types";

interface ProductProps extends Product {}

const ProductItem = ({
  color,
  id,
  imageSrc,
  name,
  price,
  quantity,
}: ProductProps) => {
  const { addProduct, products } = useCartStore((state) => ({
    addProduct: state.addProduct,
    products: state.products,
  }));
  const selected = products.some((product) => product.id === id);
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
                addProduct({
                  color,
                  id,
                  imageSrc,
                  name,
                  price,
                  quantity,
                })
              }
            >
              {selected ? (
                <FontAwesome5 name="shopping-cart" size={24} color="black" />
              ) : (
                <Feather name="shopping-cart" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
          <Text className="mt-1 text-sm text-gray-500">{color}</Text>
        </View>
        <View className="flex flex-row items-end justify-between flex-1 text-sm">
          <Text className="text-gray-500">Quantity {quantity}</Text>
          <Text className="ml-4 font-bold">$ {price}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
