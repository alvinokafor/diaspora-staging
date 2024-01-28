import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import { StoreCard } from ".";
import { Link } from "react-router-dom";

export default function FeaturedStores() {
  return (
    <Box className="space-y-6">
      <Flex align={"center"} justify={"between"}>
        <Heading size={"4"}>Stores</Heading>

        {/* <Button variant="ghost">See All</Button> */}
      </Flex>
      <Grid className="sm:grid-cols-2" gap={"4"}>
        {[1, 2, 3, 4, 5].map((val) => (
          <Link key={val} to={`/shopping/${val}`}>
            <StoreCard />
          </Link>
        ))}
      </Grid>
    </Box>
  );
}
