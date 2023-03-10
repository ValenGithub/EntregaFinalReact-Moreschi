import React from 'react'
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Container } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';



const NavBar = () => {
    return (
<>
    <Container  maxW="150rem" bg="blue.100" color="#262626">
        <Flex alignItems="center" gap="2" >
            <Box>
                
                <Heading size="sm" >
                <Link to={"/"}>
                        <img className='logoM' src="/assets/M2.png" alt="logo" />
                </Link>
                </Heading>
            </Box>
                <Spacer />
            <Box>
                <Menu>
                <Link to={"/catalogue"}>
                    <MenuButton
                    as={Button}
                    size="lg"
                    variant="outline"
                    colorScheme="blue"
                    m="5"
                    >
                    Catalogue
                    </MenuButton>
                </Link>
                </Menu>
                <Menu>
                <MenuButton
                    as={Button}
                    size="lg"
                    variant="outline"
                    colorScheme="blue"
                    rightIcon={<ChevronDownIcon />}
                    m="5"
                >
                    Categories
                </MenuButton>
                <MenuList className="menu-list">
                    <Link to={`/tipo/${"Auto"}`}>
                    <MenuItem>Auto</MenuItem>
                    </Link>
                    <Link to={`/tipo/${"Camioneta"}`}>
                    <MenuItem>Camioneta</MenuItem>
                    </Link>
                    <Link to={`/tipo/${"Camion"}`}>
                    <MenuItem>Camion</MenuItem>
                    </Link>
                    <Link to={`/tipo/${"Moto"}`}>
                    <MenuItem>Moto</MenuItem>
                    </Link>
                </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box p="10" w="300px" h="100">
                <Link to={"/cart"}>
                <CartWidget />
                </Link>
            </Box>
            </Flex>
        </Container>
        </>
    );
    };

export default NavBar
