import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";
const sucursalesData =[]
export default function Sucursales() {

  //Esta página por el momento se encuentra hardcodeada
  //Está pensada para que los usuarios válidos puedan ver su información y editarla si asi lo quisiesen.

 return (
    <Card maxWidth="800px" m="auto" mt="5%" 
  shadow>
      <CardHeader>
        <Heading size="lg" 
  textAlign="center">
           Nuestras Sucursales
        </Heading>
      </CardHeader>
      <CardBody marginTop="10px">
        <Table variant="striped" 
  colorScheme="green" size="sm">
          <Thead>
            <Tr>
              <Th>Sucursal</Th>
              <Th>Dirección</Th>
              <Th>Ciudad</Th>
              <Th>Provincia</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sucursalesData.map((sucursal) => (
              <Tr key={sucursal.numero}>
                <Td>{sucursal.numero}</Td>
                <Td>{sucursal.direccion}</Td>
                <Td>{sucursal.ciudad}</Td>
                <Td>{sucursal.provincia}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
}
