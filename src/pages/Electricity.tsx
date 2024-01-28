import {
  Box,
  Flex,
  Heading,
  TextField,
  Grid,
  Select,
  Text,
} from "@radix-ui/themes";
import AppLayout from "../layouts/AppLayout";
import { Container, BackButton } from "../partials";
import { Electricity as ElectricityIcon } from "@/assets/icons";
import { PaymentMethodModal } from "@/partials/modals";

export default function Electricity() {
  return (
    <AppLayout>
      <Container>
        <Box className="pt-24 space-y-12">
          <Box className="space-y-6">
            <BackButton />

            <Flex align={"center"} gap={"4"}>
              <ElectricityIcon />
              <Heading>Buy Electricity</Heading>
            </Flex>
          </Box>

          <Grid columns={"2"} gap={"4"}>
            <Flex direction={"column"} gap={"2"}>
              <label className="font-semibold">Distribution Company</label>
              <Select.Root size={"2"} defaultValue="eedc">
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="eedc">
                    Enugu Electrical Distribution Company
                  </Select.Item>
                  <Select.Item value="iedc">
                    Ibadan Electrical Distribution Company
                  </Select.Item>
                  <Select.Item value="bedc">
                    Benin Electrical Distribution Company
                  </Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>

            <Flex direction={"column"} gap={"2"}>
              <label className="font-semibold">Meter Type</label>
              <Select.Root size={"2"} defaultValue="prepaid">
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="prepaid">Prepaid</Select.Item>
                  <Select.Item value="postpaid">Postpaid</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>

            <Flex direction={"column"} gap={"2"}>
              <label className="font-semibold">Beneficiary Name</label>
              <Select.Root size={"2"} defaultValue="alvin">
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="alvin">Alvin Okafor</Select.Item>
                  <Select.Item value="emeka">Emeka Nkwo</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>

            <Flex direction={"column"} gap={"2"}>
              <label className="font-semibold">Meter/Account Number</label>
              <TextField.Input placeholder="Enter meter number" />
            </Flex>

            <Flex direction={"column"} gap={"2"}>
              <label className="font-semibold">Beneficiary Address</label>
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
            </Flex>

            <Flex direction={"column"} gap={"2"}>
              <label className="font-semibold">Amount</label>
              <TextField.Root>
                <TextField.Slot>
                  <Text>$</Text>
                </TextField.Slot>
                <TextField.Input placeholder="Enter the amount you want to purchase…" />
              </TextField.Root>
            </Flex>
          </Grid>
        </Box>

        <PaymentMethodModal />
      </Container>
    </AppLayout>
  );
}
