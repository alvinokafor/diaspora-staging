import { Box, Button, Flex, Heading, Tabs, Text } from "@radix-ui/themes";
import AppLayout from "../layouts/AppLayout";
import { Container, BackButton } from "../partials";
import { ArchiveIcon } from "@radix-ui/react-icons";
import { MyCart } from "@/components/shopping";

export default function Orders() {
  return (
    <AppLayout>
      <Container>
        <Box className="pt-24 space-y-6">
          <Box className="space-y-6">
            <BackButton />

            <Flex align={"center"} justify={"between"}>
              <Flex align={"center"} gap={"4"}>
                <ArchiveIcon width={24} height={24} />
                <Heading>Orders</Heading>
              </Flex>

              <Button variant="surface">Clear Cart</Button>
            </Flex>
          </Box>

          <Tabs.Root defaultValue="cart">
            <Tabs.List>
              <Tabs.Trigger value="cart">My Cart</Tabs.Trigger>
              <Tabs.Trigger value="ongoing">Ongoing</Tabs.Trigger>
              <Tabs.Trigger value="completed">Completed</Tabs.Trigger>
            </Tabs.List>

            <Box pt="3" pb="2">
              <Tabs.Content value="cart">
                <MyCart />
              </Tabs.Content>

              <Tabs.Content value="ongoing">
                <Text size="2">You have no ongoing orders.</Text>
              </Tabs.Content>

              <Tabs.Content value="completed">
                <Text size="2">You have no completed orders.</Text>
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </Box>
      </Container>
    </AppLayout>
  );
}
