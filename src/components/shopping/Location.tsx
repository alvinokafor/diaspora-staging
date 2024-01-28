import { Flex, Select } from "@radix-ui/themes";

export default function Location() {
  return (
    <Flex align={"center"} gap={"2"}>
      <Select.Root size={"2"} defaultValue="lagos">
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="lagos">Lagos</Select.Item>
          <Select.Item value="abuja">Abuja</Select.Item>
        </Select.Content>
      </Select.Root>
    </Flex>
  );
}
