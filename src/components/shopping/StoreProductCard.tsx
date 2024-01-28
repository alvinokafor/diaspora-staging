import { Card, Box, Text, Heading, Inset } from "@radix-ui/themes";
import { AddToCart } from ".";

export default function StoreProductCard() {
  return (
    <Card size="2">
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="block object-cover cursor-pointer w-full h-40 bg-gray-50"
        />
      </Inset>
      <Box className="space-y-2">
        <Heading size="3">Sweet Brown Bread</Heading>
        <Text className="text-lg text-slate-500 font-medium">$2.00</Text>

        <AddToCart />
      </Box>
    </Card>
  );
}
