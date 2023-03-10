import { Heading, Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src=" /assets/dunlop.svg"
            alt="negocio"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;