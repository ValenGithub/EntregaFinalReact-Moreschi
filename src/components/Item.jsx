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
  Image,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Item = ({ id, modelo , categoria, imagen,stock}) => {
    return (
        <div>
        <div key={id}>
            <Center p="1rem">
            <Card className="card-main">
                <CardBody>
                <Stack mt="6" spacing="3">
                    <Heading size="md">{modelo}</Heading>
                    <Image borderRadius="lg" src={imagen} />
                    <Text color="blue.800" fontSize="l">
                    Category: {categoria}
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
                    <Link to={`/item/${id}`}>Details</Link>
                    </Button>
                </Center>
                </CardFooter>
            </Card>
            </Center>
        </div>
        </div>
    );
    };

    export default Item;
