import {
  Card,
  Text,
  Heading,
  Flex,
  Separator,
  Button,
  IconButton,
} from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { TrashIcon } from "@radix-ui/react-icons";
import { OrderDetails } from "./modals";

export default function CartCard() {
  return (
    <Card variant="classic">
      <Flex justify={"between"}>
        <Flex direction={"column"} gap={"3"}>
          <Heading size="4">Shoprite Circle Mall</Heading>

          <Flex align={"center"} gap={"3"}>
            <Text color="gray" size="2">
              3 items
            </Text>

            <Separator orientation="vertical" />

            <Text color="gray" size="2">
              $30
            </Text>
          </Flex>

          <Flex align={"center"} gap={"3"}>
            <OrderDetails />
            <Link to={"/checkout"}>
              <Button>Check Out</Button>
            </Link>
          </Flex>
        </Flex>

        <IconButton variant="ghost" color="red">
          <TrashIcon width={20} height={20} />
        </IconButton>
      </Flex>
    </Card>
  );
}
