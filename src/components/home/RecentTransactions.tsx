import { Box, Flex, Heading } from "@radix-ui/themes";
import { TransactionItem } from "../transactions";

export default function RecentTransactions() {
  return (
    <Box className="space-y-4">
      <Heading size={"4"}>Recent Transactions</Heading>

      <Flex direction={"column"} gap={"4"}>
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </Flex>
    </Box>
  );
}
