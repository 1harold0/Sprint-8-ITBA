import React from "react";
import {
  Button,
  Avatar,
  Card,
  CardHeader,
  Text,
  CardFooter,
} from "@chakra-ui/react";

export default function TransferenciaCard({ name }) {
  return (
    <Card maxW={{ base: "300px", md: "400px" }} mx="auto" boxShadow="dark-lg">
      <CardHeader textAlign="center">
        <Avatar name={name} />
      </CardHeader>
      <Text textAlign="center" fontSize={{ base: "sm", md: "md" }}>
        {name}
      </Text>
      <CardFooter justifyContent="center">
        <Button bg="#d4af37">Transferir</Button>
      </CardFooter>
    </Card>
  );
}