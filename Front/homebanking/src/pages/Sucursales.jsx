import React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, Box, Text, StackDivider,Table, Thead, Tr, Th, Tbody, Td } from 
'@chakra-ui/react';

//aca es donde pone lorenzo el usestate de sucursal
const sucursalesData = [
  { numero: '023', direccion: 'AV. SAN MARTIN 3381',  nombre :'belgrano',provincia :'buenos  ires',ciudad:'cordoba' },
  { numero: '231', direccion: 'AV. J.B.ALBERDI 6367', nombre :'moreno',provincia :'merlo',ciudad:'mendoza'},
  { numero: '765', direccion: 'AV. SANTA FE 1450',    nombre :'pepito',provincia :'un lugar  feliz',ciudad:'weednas' },
  { numero: '007', direccion: 'ECHEANDIA 2602',       nombre :'cordoba',provincia :'chaco',ciudad:'buenos aires' },
  { numero: '123', direccion: 'AV. JAURETCHE 1576',   nombre :'urquiza',provincia :'patagonia',ciudad:'' },
  { numero: '468', direccion: 'CALLE 16 N 550',       nombre :'palermo',provincia :'buenos aires',ciudad:'buenos aires' },
];
const SucursalesPage = () => {
return (
  <Card maxWidth="800px" m="auto" mt="5%" shadow>
    <CardHeader>
      <Heading size="lg" textAlign="center">
        Nuestras Sucursales
      </Heading>
    </CardHeader>
    <CardBody marginTop="28px">
      <Table variant="striped" colorScheme="teal" size="sm">
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

export default SucursalesPage;
