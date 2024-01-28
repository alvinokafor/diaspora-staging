import { Avatar, Box, Button, Flex, Heading, Text } from "@radix-ui/themes";

export default function Beneficiaries() {
  return (
    <Box className="space-y-4">
      <Flex align={"center"} justify={"between"}>
        <Heading size={"4"}>Beneficaries</Heading>

        <Button variant="ghost">See All</Button>
      </Flex>

      <Flex className="flex-wrap lg:justify-between gap-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <Flex key={item} direction={"column"} align={"center"} gap={"2"}>
            <Avatar size={"6"} radius="full" fallback={"AC"} />
            <Text className="text-slate-500">Alvin Chinedu</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
