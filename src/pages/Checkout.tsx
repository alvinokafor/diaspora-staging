import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Separator,
  TextArea,
  Select,
} from "@radix-ui/themes";
import AppLayout from "../layouts/AppLayout";
import { Container, BackButton } from "../partials";
import { AddToCart, PaymentMethod } from "@/components/shopping";

export default function Checkout() {
  return (
    <AppLayout>
      <Container>
        <Box className="pt-24 space-y-6">
          <Box className="space-y-6">
            <BackButton />

            <Heading>Checkout</Heading>
          </Box>

          <Box>
            <Heading size={"4"}>Order Summary</Heading>
            <Separator my={"2"} size={"4"} />

            <Flex align={"center"} justify={"between"}>
              <Flex direction={"column"} gap={"3"} pt={"4"}>
                <Heading size="3">Shoprite Circle Mall</Heading>

                <Flex align={"center"} gap={"3"}>
                  <Text color="gray" size="2">
                    3 items
                  </Text>

                  <Separator orientation="vertical" />

                  <Text color="gray" size="2">
                    $30
                  </Text>
                </Flex>
              </Flex>

              <Button variant="surface">Clear Order</Button>
            </Flex>

            <Box className="space-y-4 mt-4">
              <Heading size={"3"}>Your Items</Heading>

              <Box className="space-y-4 mt-4">
                {[1, 2, 3].map((item) => (
                  <Box key={item}>
                    <Flex align={"center"} justify={"between"}>
                      <Flex align={"center"} gap={"3"}>
                        <Text className="text-slate-600">Nestle Coffe</Text>
                        <Separator orientation="vertical" />
                        <Text className="text-slate-600">$3.00</Text>
                      </Flex>

                      <AddToCart />
                    </Flex>
                    <Separator my={"3"} size={"4"} />
                  </Box>
                ))}
              </Box>
            </Box>

            <Box className="space-y-2 mt-4">
              <Heading size={"3"}>Vendor Instruction</Heading>
              <TextArea />
            </Box>

            <Box className="space-y-2 mt-4">
              <Heading size={"3"}>Select Delivery Location</Heading>
              <Select.Root size={"2"}>
                <Select.Trigger />
                <Select.Content>
                  <Select.Group>
                    <Select.Label>Alvin Okafor</Select.Label>
                    <Select.Item value="lagos">
                      Kudirat Salami Street, Ajiran Agungi
                    </Select.Item>
                  </Select.Group>
                  <Select.Separator />
                  <Select.Group>
                    <Select.Label>Emeka Nkwo</Select.Label>
                    <Select.Item value="##">
                      No 4A Claris Obiageli Avenue, 33, Onitsha
                    </Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Box>

            <Box className="space-y-2 mt-4">
              <Heading size={"3"}>Payment Method</Heading>

              <Box className="space-y-4 mt-4">
                <Flex align={"center"} justify={"between"}>
                  <Text className="text-slate-600">Subtotal(3 items)</Text>
                  <Text className="text-slate-600">$3.00</Text>
                </Flex>

                <Flex align={"center"} justify={"between"}>
                  <Text className="text-slate-600">Delivery Fee</Text>
                  <Text className="text-slate-600">$1.00</Text>
                </Flex>

                <Flex align={"center"} justify={"between"}>
                  <Text className="font-medium">Total</Text>
                  <Text className="font-medium">$4.00</Text>
                </Flex>
              </Box>
            </Box>

            <Box className="space-y-2 mt-4">
              <Heading size={"3"}>Payment Method</Heading>

              <PaymentMethod />
            </Box>
          </Box>

          <Button size={"3"} className="w-full">
            Place Order
          </Button>
        </Box>
      </Container>
    </AppLayout>
  );
}
