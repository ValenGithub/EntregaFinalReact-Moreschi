    import {
        Center,
        Card,
        CardBody,
        Image,
        Stack,
        Heading,
        Text,
        CardFooter,
        Divider,
        Select,
    } from "@chakra-ui/react";
    import { useParams } from "react-router-dom";
    import ItemCount from "./ItemCount";
    import { useEffect, useState } from "react";
    import { doc, getDoc, getFirestore } from "firebase/firestore";
    
    const ItemDetail = ({ cubiertas }) => {
        const { id } = useParams();

        const [producto, setProducto] = useState([]);
        const [medidaSeleccionada, setMedidaSeleccionada] = useState(""); // cambio de estado para la medida seleccionada captando con onchange y usando el value medidaSeleccionada
        
        const handleMedidaSeleccionada = (event) => {
          setMedidaSeleccionada(event.target.value);
        }
        //console.log(medidaSeleccionada)
        useEffect(() => {
          const db = getFirestore();
      
          const cubRef = doc(db, "neumaticos", `${id}`);
      
          getDoc(cubRef).then((snapshot) => {
            if (snapshot.exists()) {
              setProducto(snapshot.data());
            } else {
              console.log("no hay documentos!");
            }
          });
        }, []);
    
        const cubiertaFilter = cubiertas.filter((cubierta) => cubierta.id == id);

            return (
            <>  
              <Center bg="#D6EAF8" h="100px" color="black">
                <Image className="logo-dunlop" src="../public/assets/dunlop.svg"/>
                <Text p="4">Distribuidor oficial</Text>
              </Center>
                {cubiertaFilter.map((cubierta) => (
                <div key={cubierta.id}>
                    <Center p="1rem">
                    <Card className="card-main">
                        <CardBody>
                        <Image borderRadius="md" src={cubierta.imagen} />
                        <Stack mt="6" spacing="3">
                            <Heading size="md">{cubierta.modelo}</Heading>
                            <Text color="blue.800" fontSize="l">
                            Descripcion: {cubierta.descripcion}
                            </Text>
                            <Text color="blue.800" fontSize="l">
                            Categoria: {cubierta.categoria}
                            </Text>
                            <Select color="red.600" fontSize="xl" onChange={handleMedidaSeleccionada} value={medidaSeleccionada} > 
                            <option >Selecciona una medida</option>
                              {cubierta.medidas.map((medida, index) => (
                                <option key={index} value={medida}>{medida}</option>
                              ))} 
                            </Select>
                            <Text color="green.600" fontSize="xl">
                            Precio: $ {cubierta.precio}
                            </Text>
                        </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter className="card-footer">
                        <ItemCount
                            stock={cubierta.stock}
                            id={cubierta.id}
                            precio={cubierta.precio}
                            modelo={cubierta.modelo}
                            imagen={cubierta.imagen}
                            handleMedidaSeleccionada={handleMedidaSeleccionada}
                            medida={medidaSeleccionada}
                        />
                        </CardFooter>
                    </Card>
                    </Center>
                </div>
                ))}
            </>
            );
        };
        
        export default ItemDetail;