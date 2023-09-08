import { AbsoluteCenter, Box, Text } from "@chakra-ui/layout";
import loadingImage from "../../assets/loading/toaster.gif";
import { Image } from "@chakra-ui/image";
export default function LoadingPage() {
  return (
    <Box height={"100vh"} width={"100vw"}>
      <AbsoluteCenter textAlign={"center"}>
        <Image
          src={loadingImage}
          alt='loading'
          width={{ base: "100vw", md: "30vw", lg: "10vw" }}
          margin={"auto"}
        />
        <Text fontSize={{ base: "12px", md: "24px", lg: "24px" }}>
          Loading...
        </Text>
      </AbsoluteCenter>
    </Box>
  );
}
