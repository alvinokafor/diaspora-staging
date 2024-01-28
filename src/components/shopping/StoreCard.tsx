import { Card, Box, Inset, Text, Heading } from "@radix-ui/themes";

export default function StoreCard() {
  return (
    <Card size="2">
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="block object-cover cursor-pointer w-full h-40 bg-gray-50"
        />
      </Inset>
      <Box className="space-y-2">
        <Heading size="3">Circle Mall Lagos</Heading>
        <Text className="text-slate-500">
          Agungi Ajiran Road Eti Osa, Lagos
        </Text>
        <Text className="block text-slate-500 font-medium">From $8.00</Text>
      </Box>
    </Card>
  );
}
