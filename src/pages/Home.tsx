import { Box } from "@radix-ui/themes";
import AppLayout from "../layouts/AppLayout";
import { Container } from "../partials";
import {
  Wallet,
  ServiceList,
  RecentTransactions,
  Beneficiaries,
} from "@/components/home";

export default function Home() {
  return (
    <AppLayout>
      <Container>
        <Box className="pt-24 space-y-12">
          <Wallet />
          <Beneficiaries />
          <ServiceList />
          <RecentTransactions />
        </Box>
      </Container>
    </AppLayout>
  );
}
