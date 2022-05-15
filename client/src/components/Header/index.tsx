import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";
import { Fragment } from "react";

export default function WithSubnavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <Box w={"100%"} bgColor="black" color="white">
        <Flex minH={"60px"} py={{ base: 2 }} px={{ base: 4 }} align={"center"}>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
            >
              Logo
            </Text>
          </Flex>
          <Flex flex={{ base: 1, md: 0 }} justify={"flex-end"}>
            <ConnectButton handleOpenModal={onOpen} />
          </Flex>
        </Flex>
      </Box>
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
