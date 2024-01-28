import { Box, Heading, Text, Grid, Flex } from "@radix-ui/themes";
import { serviceList } from "@/static/data";
import { FullServiceList } from "./modals";
import { Link } from "react-router-dom";

export default function ServiceList() {
  return (
    <Box className="space-y-4">
      <Heading size={"4"}>Service List</Heading>

      <Grid className="grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-4">
        {serviceList.map((item) => (
          <Flex direction={"column"} gap={"2"}>
            <Link to={item.link}>
              <Box
                className={`w-20 h-20 bg-slate-100 flex items-center justify-center rounded-lg bg-[${item.color}]`}
              >
                {item.icon}
              </Box>
            </Link>

            <Text>{item.name}</Text>
          </Flex>
        ))}

        <Flex direction={"column"} gap={"2"}>
          <FullServiceList />

          <Text>More</Text>
        </Flex>
      </Grid>
    </Box>
  );
}
