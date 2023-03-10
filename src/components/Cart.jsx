    import {
        FormControl,
        FormLabel,
        Input,
        FormHelperText,
        Button,
        Container,
        Box,
        Textarea,
        Center,
        Heading,
        Card,
        CardHeader,
        CardBody,
        CardFooter,
        Text,
        GridItem,
        Flex,
    } from "@chakra-ui/react";
    import { useState, useContext } from "react";
    import { CartContext } from "../contexts/ShoppingCartContext";
    //import SendOrder from "./SendOrder";
    
    const Cart = () => {
        const [cart, setCart] = useContext(CartContext);
        const [userName, setUserName] = useState("");
        const [userEmail, setUserEmail] = useState("");
    
        const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        console.log(userName);
        console.log(userEmail);
        alert("Formulario enviado");
        };
    
        const deleteId = cart.map((item) => {
        return item.id;
        });
    
        return (
        <>
            <Center bg="#D6EAF8" h="100px" color="black">
            <Heading as="h2" size="2xl">
                Cart
            </Heading>
            </Center>
            {cart.map((item) => {
            return (
                <Container
                key={item.id}
                maxW="container.sm"
                className="main-catalogue"
                >
                <Card maxW="sm" m="3rem">
                    <CardHeader>
                    <Heading size="md">{item.modelo}</Heading>
                    </CardHeader>
                    <CardBody>
                    <Text as="b">Cantidad: {item.quantity}</Text>
                    <Text>Precio: $ {item.precio}</Text>
                    </CardBody>
                    <CardFooter>
                    <Button
                        colorScheme="red"
                        onClick={() => console.log("Eliminando")}
                    >
                        Borrar
                    </Button>
                    </CardFooter>
                </Card>
                </Container>
            );
            })}
            
        </>
        );
    };
    
    export default Cart;