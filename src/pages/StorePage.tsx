import { Box, Flex, Heading } from "@radix-ui/themes";
import AppLayout from "../layouts/AppLayout";
import { Container, BackButton } from "../partials";
import { Search, PreMadeBaskets, StoreCategory } from "@/components/shopping";
import { Store } from "@/assets/icons";

export default function StorePage() {
  return (
    <AppLayout>
      <Container>
        <Box className="pt-24 space-y-12">
          <Box className="space-y-6">
            <BackButton />

            <img
              src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="block object-cover cursor-pointer w-full h-40 bg-gray-50"
            />

            <Flex
              className="flex-col md:flex-row md:items-center gap-4"
              justify={"between"}
            >
              <Flex align={"center"} gap={"4"}>
                <Store dimensions={"32"} />
                <Heading>Circle Mall lagos</Heading>
              </Flex>

              <Flex align={"center"} gap={"3"}>
                <Search />
              </Flex>
            </Flex>
          </Box>

          <PreMadeBaskets />
          <StoreCategory title="Bakery" />
        </Box>
      </Container>
    </AppLayout>
  );
}
