import Item from "./Item";
import { Container, SimpleGrid , Center} from "@chakra-ui/react";
const ItemList = ({ cubiertas }) => {
  return (
    <>
      <Container maxW="container.xl" className="main-catalogue">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} p={4}>
          
            {cubiertas?.map((cubierta) => (
              <Item  key={cubierta.id} 
              id={cubierta.id}
              modelo={cubierta.modelo}
              descripcion={cubierta.descripcion}
              precio={cubierta.precio}
              stock={cubierta.stock}
              categoria={cubierta.categoria}
              imagen={cubierta.imagen}/> 
          ))}
        </SimpleGrid>

      </Container>
    </>
  );
};

export default ItemList;


