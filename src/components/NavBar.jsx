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
    Center,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Spacer } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';



const NavBar = () => {
    return (
<>
    <Box  className='navbar'  bg="gray.300" color="#262626">
        <Flex alignItems="center" justifyContent="space-between"  gap="2" >
        
            
                <Box>
                    
                    <Heading size="sm" >
                    <Link to={"/"}>
                            <img className='logoM' src="/assets/M2.png" alt="logo" />
                    </Link>
                    </Heading>
                </Box>
                <Box mr="85" >
                    <Menu >
                        <Link to={"/catalogue"}>
                            <MenuButton
                            as={Button}
                            size="lg"
                            variant="outline"
                            colorScheme="yellow"
                            mx="2"
                            mr="85"
                            >
                            Catalogo
                            </MenuButton>
                        </Link>
                    </Menu>
                    <Menu>
                        <MenuButton
                            as={Button}
                            size="lg"
                            variant="outline"
                            colorScheme="yellow"
                            rightIcon={<ChevronDownIcon />}
                            mx="2"
                        >
                            Categoria
                        </MenuButton>
                    <MenuList className="menu-list">
                        <Link to={`/categoria/${"auto"}`}>
                            <MenuItem>Auto</MenuItem>
                        </Link>
                        <Link to={`/categoria/${"camioneta"}`}>
                            <MenuItem>Camioneta</MenuItem>
                        </Link>
                        <Link to={`/categoria/${"Camion"}`}>
                            <MenuItem>Camion</MenuItem>
                        </Link>
                        <Link to={`/categoria/${"Moto"}`}>
                            <MenuItem>Moto</MenuItem>
                        </Link>
                    </MenuList>
                    </Menu>
                </Box>
                <Box p="30" >
                    <Link to={"/cart"}>
                    <CartWidget />
                    </Link>
                </Box>
            </Flex>
      
    </Box>
        </>
    );
    };

export default NavBar
