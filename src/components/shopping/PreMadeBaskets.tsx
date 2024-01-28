import { Box, Button, Flex, Grid, Heading } from "@radix-ui/themes";
import { ProductCard } from ".";

export default function PreMadeBaskets({ title = "Premade Baskets" }) {
  return (
    <Box className="space-y-6">
      <Flex align={"center"} justify={"between"}>
        <Heading size={"4"}>{title}</Heading>

        <Button variant="ghost">See All</Button>
      </Flex>

      <Grid className="md:grid-cols-3" gap={"4"}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
    </Box>
  );
}
