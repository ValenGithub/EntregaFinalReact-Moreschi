import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const neumaticosCollection = collection(db, "neumaticos");
    getDocs(neumaticosCollection).then((querySnapshot) => {
      const cubiertas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(cubiertas);
    });
  }, []);
    
    
    
    return <ItemDetail cubiertas={data} />;

    };

export default ItemDetailContainer;