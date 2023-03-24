    import { useContext, useState } from "react";
    import {
    ButtonGroup,
    IconButton,
    Tooltip,
    Center,
    Button,
    } from "@chakra-ui/react";
    import { AddIcon, MinusIcon } from "@chakra-ui/icons";
    import { CartContext } from "../contexts/ShoppingCartContext";
    import Swal from 'sweetalert2';

    const ItemCount = ({ stock, id, precio, modelo, imagen , medida:medidaSeleccionada}) => {
    const [cart, setCart] = useContext(CartContext);
    const [count, setCount] = useState(1);
   



    

    const addQty = () => {
        setCount(count + 1);0
    };

    const substractQty = () => {
        setCount(count - 1);
    };


    const addToCart = (medidaSeleccionada) => {
        if (medidaSeleccionada === "" || medidaSeleccionada === "Selecciona una medida" ) {                    //condicion para seleccionar
            return Swal.fire({
                icon: 'warning',
                title: 'Seleccione una medida',
              })
        } else {

        setCart((items) => {
          const isItemFound = items.find((item) => item.id === id && item.medidaSeleccionada === medidaSeleccionada);  //condicion para la medida select render
          if (isItemFound) {
            return items.map((item) => {
              if (item.id === id && item.medidaSeleccionada === medidaSeleccionada) {
                return { ...item, quantity: item.quantity + count };
              } else {
                return item;
              }
            });
          } else {
            return [
              ...items,
              {
                id,
                quantity: count,
                precio,
                modelo,
                imagen,
                medidaSeleccionada
              }
            ];
          };
         });
        };
      };

   // console.log(cart)

    return (
        <>
        <ButtonGroup size="sm" isAttached variant="outline">
            {count < 1 ? (
            <Tooltip label="minimum stock reached" placement="bottom">
                <IconButton icon={<MinusIcon />} isDisabled />
            </Tooltip>
            ) : (
            <IconButton icon={<MinusIcon />} onClick={substractQty} />
            )}
            <Center>
            <Button
                onClick={() => addToCart(medidaSeleccionada)}
                variant="solid"
                colorScheme="blue"
            >
                Add to cart: {count}
            </Button>
            </Center>
            {count < stock ? (
            <IconButton icon={<AddIcon />} onClick={addQty} />
            ) : (
            <Tooltip label="stock limit reached" placement="bottom">
                <IconButton icon={<AddIcon />} isDisabled />
            </Tooltip>
            )}
        </ButtonGroup>
        </>

    
    );
    };

    export default ItemCount;