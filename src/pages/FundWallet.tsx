import {
  Box,
  Flex,
  Heading,
  TextField,
  Card,
  Text,
  IconButton,
  Button,
  Dialog,
} from "@radix-ui/themes";
import AppLayout from "../layouts/AppLayout";
import { Container, BackButton } from "../partials";
import { Visa } from "@/assets/icons";
import { AddFundsModal } from "@/components/transactions/modals";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export default function FundWallet() {
  return (
    <AppLayout>
      <Container>
        <Box className="pt-24 space-y-6">
          <Box className="space-y-6">
            <BackButton />
            <Flex direction={"column"}>
              <Heading>Fund Wallet</Heading>
              <Text color="gray" size="2">
                You will be charged for adding money with a card.
              </Text>
            </Flex>
          </Box>

          <Card variant="surface">
            <Box className="space-y-4">
              <Flex direction={"column"} gap={"4"}>
                <Heading size={"3"}>Saved Cards</Heading>
                <Card>
                  <Flex align={"center"} justify={"between"}>
                    <Flex align={"center"} gap={"4"}>
                      <Visa />

                      <Flex direction={"column"} gap={"1"}>
                        <Heading size={"3"}>**** 9589</Heading>
                        <Text color="gray">Chase Visa</Text>
                      </Flex>
                    </Flex>

                    <AddFundsModal />
                  </Flex>
                </Card>
              </Flex>

              <Dialog.Root>
                <Dialog.Trigger>
                  <Button>Add New Card</Button>
                </Dialog.Trigger>

                <Dialog.Content className="max-w-lg space-y-4">
                  <Flex align={"center"} justify={"between"} mb={"3"}>
                    <Heading size={"4"}>Fund Your Wallet</Heading>

                    <IconButton variant="ghost">
                      <Dialog.Close>
                        <Cross1Icon />
                      </Dialog.Close>
                    </IconButton>
                  </Flex>

                  <Flex direction={"column"} gap={"2"}>
                    <label className="font-semibold">Enter Amount</label>
                    <TextField.Root>
                      <TextField.Slot>
                        <Text>$</Text>
                      </TextField.Slot>
                      <TextField.Input placeholder="Enter the amount you want to fund…" />
                    </TextField.Root>
                  </Flex>
                  <Flex align={"center"} gap={"3"}>
                    <Link to={"/add-new-card"}>
                      <Button className="mt-4">Continue</Button>
                    </Link>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </Box>
          </Card>
        </Box>
      </Container>
    </AppLayout>
  );
}
