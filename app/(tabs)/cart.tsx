import CartItem from "@components/CartItem";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useCartStore from "../../store/cartStore";
type Props = {};

const Page = (props: Props) => {
  const { products, total } = useCartStore((state) => ({
    products: state.products,
    total: state.total,
    clearCart: state.clearCart,
  }));
  return (
    <SafeAreaView className="flex justify-between flex-1 ">
      {products.length > 0 ? (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          className="mt-5 space-y-2 "
          renderItem={({ item }) => <CartItem key={item.id} data={item} />}
        ></FlatList>
      ) : (
        <View className="items-center justify-center flex-1">
          <Text
            className="text-xl text-gray-600"
            style={{ fontFamily: "urb-bold" }}
          >
            No items added to cart.
          </Text>
        </View>
      )}

      <View className="px-4 py-2 bg-slate-50">
        <View className="flex flex-row justify-between text-base font-medium text-gray-900">
          <Text className="text-lg">Subtotal</Text>
          <Text className="text-lg font-bold">${total}</Text>
        </View>
        <Text className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </Text>
        <View className="mt-2">
          <TouchableOpacity className="flex items-center justify-center py-3 bg-black rounded-md shadow-lg">
            <Text className="text-lg font-bold text-white">Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({});
