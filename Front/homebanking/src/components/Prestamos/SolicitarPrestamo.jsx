import {
    Flex,
    Box,
    Heading,
    Text,
    Link,
    FormControl,
    FormLabel,
    Input,
    Button,
    Checkbox,
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    HStack,
    VStack
  } from "@chakra-ui/react";
  
  import { useState } from "react";
  import { useAuth } from "../../hooks/useAuth";
  
  
  import { useNavigate } from "react-router-dom";
  
  // Login box/space
  export default function SolicitarPrestamo() {
    return (
      <Flex
        minHeight="100vh"
        width="full"
        align="Center"
        justifyContent="center"
        bg="#ebecf0"
      >
        <Box
          borderWidth={1}
          px={4}
          width="full"
          maxWidth="500px"
          borderRadius={4}
          textAlign="center"
          bg="gray.200 "
          boxShadow="dark-lg"
        >
          <PrestamoHeader />
          <PrestamoForm />
        </Box>
      </Flex>
    );
  }
  
  
  // Encabezado
  function PrestamoHeader() {
    return (
      <Box textAlign="center">
        <Heading>Formulario de Solicitud</Heading>
      </Box>
    );
  }
  
  // Formulario de Login
  function PrestamoForm() {
    const [dni, setDni] = useState("");
    const [cantidadPrestamo, setcantidadPrestamo] = useState("");
    const [tipoCliente, settipoCliente] = useState("");
  
    const handleRegister = (e) => {
      e.preventDefault();
    };
    return (
      <Box my={8} textAlign="left" maxWidth="500px" mx="auto">
        <form onSubmit={handleRegister}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>DNI</FormLabel>
              <Input
                type="dni"
                placeholder="Escribe tu DNI"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Cantidad</FormLabel>
              <Input
                type="cantidadPrestamo"
                placeholder="ingrese el monto"
                value={cantidadPrestamo}
                onChange={(e) => setCantidadPrestamo(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Tipo Cliente</FormLabel>
              <Input
                type="tipoCliente"
                placeholder="Escribe tu tipo de cliente"
                value={tipoCliente}
                onChange={(e) => setTipoCliente(e.target.value)}
              />
            </FormControl>
          </VStack>
  
          <HStack justifyContent="flex-end" mt={4}>
            <Button bg="#d4af37" type="submit">
              Solicitar
            </Button>
          </HStack>
        </form>
      </Box>
    );
  };