import { Box, Grid, GridItem, Heading, Text, Button, Accordion, AccordionIcon, AccordionButton, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useAuth} from '../../hooks/useAuth'
import { Link } from "react-router-dom";



const images = [
  {
    url: "/imagen1.png",
    alt: "Imagen 1",
    width: "600px",
  },
  {
    url: "/bancopordentro.jpg",
    alt: "bancopordentro",
    width: "600px",
  },
  {
    url: "/imagen3.png",
    alt: "Imagen 3",
    width: "600px",
  },
  {
    url: "/imagen22.png",
    alt: "Imagen 22",
    width: "600px",
  },
  {
    url: "/imagen2.png",
    alt: "Imagen 2",
    width: "600px",
  },
  {
    url: "/reunionadministrativa.jpg",
    alt: "reunionadministrativa",
    width: "600px",
  },
];

const MyCarousel = () => {
  const {isLogged} = useAuth();

  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={6} align="center" justifyContent={"center"}>
        <GridItem textAlign='center' mt='5rem'>
            <Heading textAlign='center' mt={20} fontSize={50} mb={5}>
                Bienvenido a PILLARBANK
            </Heading>
            <br />
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='center'>
                      ¿Quienes somos?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  
                    Somos tu aliado financiero, comprometidos en brindarte seguridad, confianza y soluciones que impulsan tus metas. ¡Bienvenido a PILLARBANK donde tu éxito es nuestra prioridad!"
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='center'>
                      ¿A que nos dedicamos?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                En PIllARBAK, nos dedicamos a ofrecer servicios financieros integrales para satisfacer tus necesidades. Desde cuentas de ahorro hasta préstamos y asesoría personalizada, trabajamos incansablemente para ser tu socio confiable en el camino hacia tus metas financieras.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='center'>
                      ¿Porque deberias elegirnos?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Nos comprometemos a ofrecerte una experiencia financiera excepcional. Destacamos por nuestra transparencia, servicio personalizado y una amplia gama de productos diseñados para impulsar tu bienestar financiero. Tu confianza es nuestra prioridad, y estamos aquí para ser tu socio en cada paso de tu camino.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='center'>
                      Nuestra vision y propuesta
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                En PILLARBANK, nuestra visión es ser líderes en la transformación financiera, brindando soluciones innovadoras que empoderen a nuestros clientes. Nos comprometemos a proporcionar servicios bancarios eficientes, accesibles y personalizados. Nuestra propuesta se centra en la excelencia, la tecnología avanzada y el compromiso con la comunidad, trabajando juntos para construir un futuro financiero sólido y exitoso para todos.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            {isLogged ? null : <Link to='/login'><Button mt="20" w="200px" bg="#d4af37">Ingresá</Button></Link>}
        </GridItem>
      <GridItem w="45rem" textAlign="center" mt={20}>
        <Carousel autoPlay interval={4000} infiniteLoop>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.url}
                alt={image.alt}
                style={{ width: image.width }}
              />
            </div>
          ))}
        </Carousel>
      </GridItem>
    </Grid>
  );
};

export default MyCarousel;
  