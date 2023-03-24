import {
    Container,
    Heading,
    Stack,
    Input,
    Button,
    Text,
    Center,
    FormControl,
    FormLabel,
  } from "@chakra-ui/react";
  import Swal from 'sweetalert2';
  import { collection, getFirestore, addDoc } from "firebase/firestore";
  import { useState , useContext} from "react";
  import { CartContext } from "../contexts/ShoppingCartContext";
  
  const SendOrder = (precioTotal) => {
    const [cart, setCart] = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] =useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name === "" || email === "" || telefono === "") {
        alert("No pueden existir campos vacios");
      } else {
        addDoc(ordersCollection, order).then(({ id }) =>  {
          Swal.fire({
            icon: 'success',
            title: 'Su orden fue enviada correctamente!',
            text: `${id}`,
            footer: 'Guarde el codigo de compra'
          })

        }).then(()=> setCart([]))
      }
    };
  
    const cartEnviado = cart.map(item => {
      const { imagen, ...itemEnviados } = item;
      return itemEnviados;
    });

    const db = getFirestore();
    const ordersCollection = collection(db, "orden");
  
    const order = {
      name,
      email,
      telefono,
      cartEnviado,
      precioTotal
      
    };
  
    return (
      <div>
        <Center>
          <Heading>Envie su orden</Heading>
        </Center>
  
        <Container>
          <FormControl>
            <form onSubmit={handleSubmit}>
              <FormLabel>Nombre y Apellido</FormLabel>
              <Input type="name" size="lg" onChange={(e) => setName(e.target.value)} />
              <FormLabel>Email</FormLabel>
              <Input type="email" size="lg" onChange={(e) => setEmail(e.target.value)} required />
              <FormLabel>Telefono</FormLabel>
              <Input type="tel" size="lg" onChange={(e) => setTelefono(e.target.value)} pattern="[0-9]*"
              required/>
              <Button colorScheme="blue" type="submit" m={5}>
                Enviar
              </Button>
            </form>
          </FormControl>
        </Container>
      </div>
    );
  };
  
  export default SendOrder;