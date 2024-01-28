import { Box, Flex, Heading } from "@radix-ui/themes";
import AppLayout from "../layouts/AppLayout";
import { Container, BackButton } from "../partials";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

export default function Send() {
  return (
    <AppLayout>
      <Container>
        <Box className="pt-24 space-y-12">
          <Box className="space-y-6">
            <BackButton />

            <Flex align={"center"} gap={"4"}>
              <PaperPlaneIcon width={24} height={24} />
              <Heading>Send Funds</Heading>
            </Flex>
          </Box>
        </Box>
      </Container>
    </AppLayout>
  );
}
