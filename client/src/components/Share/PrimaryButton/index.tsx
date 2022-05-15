import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  onClickButton: () => void;
  children: React.ReactNode;
}

export default function PrimaryButton(props: Props) {
  const { onClickButton } = props;
  return (
    <Button
      onClick={onClickButton}
      border="1px solid transparent"
      _hover={{
        border: "1px",
        borderStyle: "solid",
      }}
      bg={"black"}
      color="white"
      borderRadius="xl"
      m="1px"
      px={3}
      height="38px"
    >
      {props.children}
    </Button>
  );
}
