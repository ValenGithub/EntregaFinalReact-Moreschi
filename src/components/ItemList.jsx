import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ cubiertas }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {cubiertas?.map((cubierta) => (
          <Item key={cubierta.id} 
          id={cubierta.id}
          modelo={cubierta.modelo}
          descripcion={cubierta.descripcion}
          price={cubierta.price}
          stock={cubierta.stock}
          categoria={cubierta.categoria}
          image={cubierta.image}/> 
        ))}
      </Container>
    </>
  );
};

export default ItemList;