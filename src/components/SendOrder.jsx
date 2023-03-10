
import { useState } from "react";
    //import {collection, getFirestore, addDoc} from "firebase/firestore"
    import {FormControl,
        FormLabel,
        Input,
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
        Flex, } from "@chakra-ui/react";
        import { collection, getFirestore, addDoc } from "firebase/firestore";
    
    
    const SendOrder = () => {
    
    
    
    return(
    <Container className="cart-container">
                <FormControl onSubmit={handleSubmit}>
                    <Box>
                    <FormLabel>Nombre</FormLabel>
                    <Input type="text" onChange={(e) => setUserName(e.target.value)} />
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    </Box>
                    <Textarea></Textarea>
                    <Box className="btn-send">
                    <Button type="submit" colorScheme="teal" variant="outline">
                        Enviar Informacion
                    </Button>
                    </Box>
                </FormControl>
    </Container>
    );
    }
    
    export default SendOrder;