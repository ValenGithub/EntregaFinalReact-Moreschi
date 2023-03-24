    import {
        Button,
        Container,
        Center,
        Heading,
        Card,
        CardHeader,
        CardBody,
        CardFooter,
        Text,
        Flex,
        Image,
        SimpleGrid,
    } from "@chakra-ui/react";
    import {  useContext } from "react";
    import { CartContext } from "../contexts/ShoppingCartContext";
    import SendOrder from "./SendOrder";
    
    const Cart = () => {
        const [cart, setCart] = useContext(CartContext);

        const clearCart =( ) => {
            setCart ([])
        }
   

        const handleRemoveItem = (id) => {
            const updatedCart = cart.filter((item) => item.id !== id);
            setCart(updatedCart);
          };

          const precioSubtotal = (item) => {
            return item.quantity * item.precio;
          };

          const precioTotal = () => {
            let total = 0;
            cart.forEach((item) => {
              total += precioSubtotal(item);
            });
            return total;
          };
          //preciototal pasado como prop individual a sendorder y medidaSeleccionada agregada al cart context modificando la variable medida

         
          return (
            <>
              <Center bg="yellow" h="100px" color="black">
                <Heading as="h2" size="2xl">
                  Carrito 
                </Heading>
              </Center>
              {cart.length > 0 ? (
                <>
                  {cart.map((item) => {
                    
                    return (
                    
                      <Container
                        key={item.id}
                        maxW="container.md"
                        className="main-catalogue"
                      >
                        <Card maxW="sm" m="3rem">
                          <CardHeader>
                            <Image src={item.imagen}/>
                            <Heading size="md">{item.modelo}</Heading>
                          </CardHeader>
                          <CardBody>
                            <Text as="b">Cantidad: {item.quantity}</Text>
                            <Text>Precio: $ {item.precio}</Text>
                            <Text> Medida: {item.medidaSeleccionada}</Text>
                          </CardBody>
                          <CardFooter>
                            <Flex flexDirection="column">    
                                <Text p="4">Subtotal: $ {precioSubtotal(item)}</Text>
                                <Button
                                colorScheme="red"
                                onClick={() => handleRemoveItem(item.id)}
                                >
                                Eliminar
                                </Button>
                            </Flex>
                          </CardFooter>
                        </Card>
                      </Container>
                  
                    );
                  })}
                  <Flex flexDirection="column"  >
                    <Center>
                        <Text>  Precio total: $  {precioTotal()} </Text>
                        <Button colorScheme="red" onClick={clearCart}>
                        Borrar carrito
                        </Button>
                    </Center>
                  </Flex>
                  <SendOrder cart={cart} precioTotal={precioTotal()} />
                </>
              ) : (
                <Flex alignItems="center" justifyContent="center" className="nada-carrito">
                  <Center >
                      <Text fontSize='5xl' >No hay elementos en el carrito</Text>
                  </Center>
                </Flex>
              )}
            </>
          );
        };
        
        
        
        
        
    export default Cart;