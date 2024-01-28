import {
  Flex,
  Heading,
  IconButton,
  Text,
  Separator,
  Box,
} from "@radix-ui/themes";
import { Electricity } from "@/assets/icons";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export default function TransactionItem() {
  return (
    <Box>
      <Flex align={"center"} justify={"between"}>
        <Flex gap={"3"}>
          <Flex
            align={"center"}
            justify={"center"}
            className="w-14 h-14 bg-slate-100 rounded-md"
          >
            <Electricity width="32" height="32" />
          </Flex>

          <Flex direction={"column"} gap={"2"}>
            <Heading size={"3"}>Emeka Nkwo</Heading>
            <Text className="text-slate-400">11:59PM</Text>
          </Flex>
        </Flex>

        <Flex align={"center"} gap={"6"}>
          <Heading size={"4"}> $20</Heading>
          <IconButton variant="ghost">
            <ChevronRightIcon width={32} height={32} />
          </IconButton>
        </Flex>
      </Flex>
      <Separator my="4" size="4" />
    </Box>
  );
}
