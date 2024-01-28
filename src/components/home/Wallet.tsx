import { useState } from "react";
import { Flex, Heading, Text, IconButton, Button } from "@radix-ui/themes";
import {
  ReloadIcon,
  PlusCircledIcon,
  EyeOpenIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export default function Wallet() {
  const [showBalance, setShowBalance] = useState(true);
  return (
    <Flex className="justify-between flex-col md:flex-row gap-4">
      <Flex direction={"column"} gap={"2"}>
        <Text className="text-sm">Wallet</Text>
        <Heading size={"8"}>{showBalance ? "$350.00" : "****"}</Heading>
        <Flex align={"center"} gap={"3"}>
          <Text className="text-slate-500 text-sm">Last Updated 5mins ago</Text>
          <IconButton variant="ghost">
            <ReloadIcon />
          </IconButton>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={"2"}>
        <Link to={"/fund-wallet"} className="block">
          <Button className="w-full">
            <PlusCircledIcon />
            Add Money
          </Button>
        </Link>
        <Button onClick={() => setShowBalance(!showBalance)}>
          {showBalance ? <EyeOpenIcon /> : <EyeNoneIcon />}

          {showBalance ? "Hide Balance" : "Show balance"}
        </Button>
      </Flex>
    </Flex>
  );
}
