import {
  Dialog,
  Button,
  Flex,
  Heading,
  IconButton,
  TextField,
  Text,
} from "@radix-ui/themes";
import { Cross1Icon, ChevronRightIcon } from "@radix-ui/react-icons";

export default function AddFundsModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IconButton variant="ghost">
          <ChevronRightIcon width={32} height={32} />
        </IconButton>
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
          <Button className="mt-4">Continue</Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
