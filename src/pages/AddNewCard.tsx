import { Box, Flex, Heading, Card, Text, Button } from "@radix-ui/themes";
import AppLayout from "../layouts/AppLayout";
import { Container, BackButton } from "../partials";

export default function AddNewCard() {
  return (
    <AppLayout>
      <Container>
        <Box className="pt-24 space-y-6">
          <Box className="space-y-6">
            <BackButton />
            <Flex direction={"column"}>
              <Heading>Confirm</Heading>
              <Text color="gray" size="2">
                You will be redirected to a secure payment gateway where you
                will be able to add your new card.
              </Text>
            </Flex>
          </Box>

          <Card variant="surface">
            <Box className="space-y-4">
              <Flex direction={"column"} gap={"3"}>
                <Flex direction={"column"} gap={"1"}>
                  <Heading size={"3"}>Amount</Heading>
                  <Text color="gray">$1,000.00</Text>
                </Flex>
              </Flex>

              <Flex direction={"column"} gap={"3"}>
                <Flex direction={"column"} gap={"1"}>
                  <Heading size={"3"}>From</Heading>
                  <Text color="gray">New Card</Text>
                </Flex>
              </Flex>

              <Flex direction={"column"} gap={"3"}>
                <Flex direction={"column"} gap={"1"}>
                  <Heading size={"3"}>Payment Gateway Fee</Heading>
                  <Text color="gray">$1.00</Text>
                </Flex>
              </Flex>

              <Flex direction={"column"} gap={"3"}>
                <Flex direction={"column"} gap={"1"}>
                  <Heading size={"3"}>
                    Funds To Be Added To Your Account
                  </Heading>
                  <Text color="gray">$999.00</Text>
                </Flex>
              </Flex>

              <Button>Proceed</Button>
            </Box>
          </Card>
        </Box>
      </Container>
    </AppLayout>
  );
}
