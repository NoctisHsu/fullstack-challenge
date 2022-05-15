import { Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./IdentIcon";
import PrimaryButton from "../Share/PrimaryButton";

type Props = {
  handleOpenModal: any;
};

export default function ConnectButton({ handleOpenModal }: Props) {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <Box display="flex" alignItems="center" borderRadius="xl" py="0">
      <Box px="3">
        <Text fontSize="md">
          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
        </Text>
      </Box>
      <PrimaryButton onClickButton={handleOpenModal}>
        <Text fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />
      </PrimaryButton>
    </Box>
  ) : (
    <PrimaryButton onClickButton={handleConnectWallet}>
      Connect to a wallet{" "}
    </PrimaryButton>
  );
}
