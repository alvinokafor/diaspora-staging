import { Box, Button, Flex, Grid, Heading } from "@radix-ui/themes";
import { StoreProductCard } from ".";

export default function StoreCategory({ title }: { title: string }) {
  return (
    <Box className="space-y-6">
      <Flex align={"center"} justify={"between"}>
        <Heading size={"4"}>{title}</Heading>

        <Button variant="ghost">See All</Button>
      </Flex>

      <Grid className="md:grid-cols-3" gap={"4"}>
        <StoreProductCard />
        <StoreProductCard />
        <StoreProductCard />
      </Grid>
    </Box>
  );
}
