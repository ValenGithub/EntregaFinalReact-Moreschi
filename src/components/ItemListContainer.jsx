import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
const ItemListContainer = () => {
  const [cubiertas, setCubiertas] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const cubiertasCollection = collection(db, "cubiertas");
    getDocs(cubiertasCollection).then((querySnapshot) => {
      const cubiertas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCubiertas(cubiertas);
    });
  }, []);

  const catFilter = cubiertas.filter((cubiertas) => cubiertas.categoria === categoria);

  return (
    <div>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Tipos de Neumaticos
        </Heading>
      </Center>
      {categoria ? <ItemList cubiertas={catFilter} /> : <ItemList cubiertas={cubiertas} />}
    </div>
  );
};

export default ItemListContainer;
