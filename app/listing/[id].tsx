import getProduct from "@api/get-product";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Product } from "types";

const DetailsPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();
  const [image, setImage] = useState<string>();
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setImage(product.images[0].url);
    };
    fetchProduct();
  }, []);
  return (
    <View className="flex flex-col items-center justify-center">
      {image && (
        <View className="w-64 h-64">
          <Image
            resizeMode="contain"
            className="object-cover object-center w-full h-full"
            source={{
              uri: image,
            }}
          />
        </View>
      )}
      <View className="flex flex-row gap-2">
        {product?.images.map((image, index) => (
          <TouchableOpacity
            className="flex-shrink-0 w-24 h-24 overflow-hidden border-2 border-gray-200 rounded-md"
            onPress={() => {
              setImage(image?.url);
            }}
          >
            <Image
              key={index}
              resizeMode="center"
              className="object-cover object-center w-full h-full"
              source={{
                uri: image?.url,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DetailsPage;
