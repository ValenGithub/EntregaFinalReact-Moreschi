import React from "react";


import {
  Center,
  Card,
  CardBody,
  Heading,
  Text,
  Divider,
  Stack,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Item = ({ id, modelo , categoria, imagen,stock}) => {
    return (
        
            <div key={id}>
                
                    <Center p="1rem">
                    <Card className="card-main " borderWidth="1px" borderRadius="lg" boxShadow="2xl">
                        <CardBody>
                        <Stack mt="6" spacing="3">
                            <img  src={imagen} />
                            <Heading size="md">{modelo}</Heading>
                            <Text color="blue.800" fontSize="l">
                            Categoria: {categoria}
                            </Text>
                            <Text color="red.600" fontSize="xl">
                            Stock: {stock}
                            </Text>
                        </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter className="card-footer">
                        <Center className="btn-center">
                            <Button variant="solid" colorScheme="blue">
                            <Link to={`/item/${id}`}>Detalles</Link>
                            </Button>
                        </Center>
                        </CardFooter>
                    </Card>
                    </Center>
              
            </div>
        
        
        );
    };

    export default Item;
