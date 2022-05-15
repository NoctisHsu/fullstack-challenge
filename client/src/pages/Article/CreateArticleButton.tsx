import { Fragment, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import PrimaryButton from "~/src/components/Share/PrimaryButton";
import { IArticle } from "~/../typings/article";
import CreateArticleModal from "./CreateArticleModal";

interface Props {
  onCreateSuccess: (article: IArticle) => void;
}

export default function CreateArticleButton({ onCreateSuccess }: Props) {
  const { account } = useEthers();
  const [isOpenArticleModal, setIsOpenArticleModal] = useState(false);

  const handleOpenArticleModal = () => {
    setIsOpenArticleModal(true);
  };

  const handleCloseArticleModal = () => {
    setIsOpenArticleModal(false);
  };

  return (
    <Fragment>
      <Box mt={5}>
        {account ? (
          <PrimaryButton onClickButton={handleOpenArticleModal}>
            Create A New Article{" "}
          </PrimaryButton>
        ) : null}
      </Box>
      <CreateArticleModal
        isOpen={isOpenArticleModal}
        onClose={handleCloseArticleModal}
        onSuccess={onCreateSuccess}
      />
    </Fragment>
  );
}
