import { Heading, Center, Box,  Text, Image, Flex, SimpleGrid,  } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center bg="#D6EAF8" h="100px" color="black">
        <Image className="logo-dunlop" src="../public/assets/dunlop.svg"/>
        <Text p="4">Distribuidor oficial</Text>
      </Center>
      <Flex justifyContent="center" alignItems="center"  flex="1" mt="110px">
        <Center>
        <SimpleGrid columns={[1, 2, 4]} spacing="10px" w="100%" h="auto"   >
            <Link to={`/categoria/${"auto"}`}>
              <Box className="box-auto" h="450px" w="350px" marginRight="35px" textAlign="center">
              <Text fontSize="4xl" fontWeight="bold">AUTO</Text>
              </Box>
            </Link>
            
            <Link to={`/categoria/${"camioneta"}`}>
              <Box className="box-camioneta" h="450px" w="350px" marginRight="35px" textAlign="center">
                <Text fontSize="4xl" fontWeight="bold">4X4</Text>
              </Box>
            </Link> 
           
            <Link to={`/categoria/${"camion"}`}>
              <Box className="box-camion" h="450px" w="350px" marginRight="35px" textAlign="center">
                <Text fontSize="4xl" fontWeight="bold">CAMION</Text>
              </Box>
            </Link>  
            
            <Link to={`/categoria/${"moto"}`}>
              <Box className="box-moto" h="450px" w="350px" marginRight="35px" textAlign="center">
                <Text fontSize="4xl" fontWeight="bold">MOTO</Text>
              </Box>
            </Link> 
              
        </SimpleGrid>
        </Center>
      </Flex>
    </div>
  );
};

export default Welcome;