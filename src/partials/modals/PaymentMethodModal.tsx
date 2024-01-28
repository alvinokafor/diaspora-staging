import { Dialog, Button, Flex, Heading, IconButton } from "@radix-ui/themes";
import { Cross1Icon } from "@radix-ui/react-icons";
import { PaymentMethod } from "@/components/shopping";

export default function PaymentMethodModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className="mt-4">Purchase</Button>
      </Dialog.Trigger>

      <Dialog.Content className="max-w-lg space-y-4">
        <Flex align={"center"} justify={"between"} mb={"3"}>
          <Heading size={"4"}>Payment Method</Heading>

          <IconButton variant="ghost">
            <Dialog.Close>
              <Cross1Icon />
            </Dialog.Close>
          </IconButton>
        </Flex>

        <PaymentMethod />

        <Flex align={"center"} gap={"3"}>
          <Button className="mt-4">Continue</Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
