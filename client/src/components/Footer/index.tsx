import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box w={"100%"} bgColor="black" color="white">
      <Box py={4}>
        <Text paddingLeft={5}>
          © 2022 Fullstack challege. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
