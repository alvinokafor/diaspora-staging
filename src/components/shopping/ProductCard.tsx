import { Card, Box, Text, Heading, Flex, Separator } from "@radix-ui/themes";
import { Store } from "@/assets/icons";
import { AddToCart } from ".";
import { PreMadeBasketDetails } from "./modals";

export default function ProductCard() {
  return (
    <Card size="2">
      <PreMadeBasketDetails />
      <Box className="space-y-2">
        <Heading size="3">Breakfast Package</Heading>
        <Flex align={"center"} gap={"2"}>
          <Text className="text-lg text-slate-500 font-medium">$8.00</Text>
          <Separator orientation="vertical" />
          <Flex align={"center"} gap={"2"}>
            <Store />
            <Text className="text-slate-500">Circle Mall</Text>
          </Flex>
        </Flex>

        <AddToCart />
      </Box>
    </Card>
  );
}
