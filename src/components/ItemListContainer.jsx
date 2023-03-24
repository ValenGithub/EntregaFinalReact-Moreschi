import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Text, Center, Image } from "@chakra-ui/react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
const ItemListContainer = () => {
  const [cubiertas, setCubiertas] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const cubiertasCollection = collection(db, "neumaticos");
    if (categoria) {
      const cubiertasFiltro = query (cubiertasCollection , where("categoria","==", categoria))
      getDocs(cubiertasFiltro).then((querySnapshot)=>{
          const cubiertas = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setCubiertas(cubiertas);
          
        })
    }else
    getDocs(cubiertasCollection).then((querySnapshot) => {
      const cubiertas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCubiertas(cubiertas);
    });
  }, [categoria]);


 
  return (
    <div className="contenedor-subtitulo">
      <Center bg="yellow" h="100px" color="black">
        <Image className="logo-dunlop" src="../public/assets/dunlop.svg"/>
        <Text p="4">Distribuidor oficial</Text>
      </Center>
      <ItemList cubiertas={cubiertas} />
    </div>
  );
};

export default ItemListContainer;
