import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../assets/data/products";
import ProductItem from "../../components/ProductItem";
const Page = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="mt-5 space-y-2">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Page;
