import React from "react";
import { Box, Flex, Link, Spacer, Text, Image, Center } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { Outlet } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <>
      <Box bg="#129490" p={4} color="black">
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Box mb={{ base: 4, md: 0 }} flex="1" display="flex" alignItems="center">
            <Image src={logo} alt="Logo" w={16} h={16} mr={2} />
            <Link
              as={RouterLink}
              to="/home"
              fontSize={{ base: "24px", md: "40px" }}
              fontWeight="bold"
            >
              PillarBank
            </Link>
          </Box>
          <Spacer />
          <Box>
            <DropdownMenu />
          </Box>
        </Flex>
      </Box>
      <Outlet />
    </>
  );
};

export default Navbar;
