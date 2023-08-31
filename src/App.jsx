import { Button, Center, Text, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { increment, setStatus } from "./app/features/test/testSlicer";

export default function App() {
  const status = useSelector((state) => state.test.status);
  const counter = useSelector((state) => state.test.counter);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setStatus("clicked"));
    dispatch(increment());
  };

  return (
    <Center height={"100vh"}>
      <VStack>
        <Text>Status on state: {status}</Text>
        <Text>Clicked : {counter}</Text>
        <Button onClick={handleClick}>Click me</Button>
      </VStack>
    </Center>
  );
}
