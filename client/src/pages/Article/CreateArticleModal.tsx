import {
  Box,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import CREATE_ARTICLE from "~/src/graphql/createArticle.graphql";
import QUERY_ARTICLES from "~/src/graphql/queryArticles.graphql";
import { useMutation } from "@apollo/client";
import { useEthers } from "@usedapp/core";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  isOpen: any;
  onClose: any;
  onSuccess: any;
};

export default function CreateArticleModal({
  isOpen,
  onClose,
  onSuccess,
}: Props) {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [createArticle] = useMutation(CREATE_ARTICLE, {
    onCompleted: () => {
      toast.success("Success added !", {
        position: toast.POSITION.TOP_CENTER,
      });
    },
    onError: () => {
      toast.error("Error occured !", {
        position: toast.POSITION.TOP_LEFT,
      });
    },
  });
  const { account } = useEthers();

  const handleSubmit = (e) => {
    e.preventDefault();
    createArticle({
      variables: {
        article: {
          title: articleTitle,
          content: articleContent,
          author: account,
        },
      },
      update(cache, result) {
        // Update the cache as an approximation of server-side mutation effects
        console.log("update", { cache, result });
        onSuccess(result?.data?.createArticle);
      },
    });
    setArticleTitle("");
    setArticleContent("");
    onClose();
  };

  return (
    <Fragment>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
        <ModalOverlay />
        <ModalContent border="1px" borderStyle="solid" borderRadius="3xl">
          <ModalHeader px={4} fontSize="lg" fontWeight="medium">
            Create Article
          </ModalHeader>
          <ModalCloseButton fontSize="sm" />
          <ModalBody pt={0} px={4}>
            <Flex width="full" align="center" justifyContent="center">
              <Box p={2}>
                <Box my={4} textAlign="left">
                  <form onSubmit={handleSubmit}>
                    <FormControl>
                      <FormLabel>Title</FormLabel>
                      <Input
                        required
                        type="text"
                        onChange={(e) => setArticleTitle(e.target.value)}
                        value={articleTitle}
                      />
                    </FormControl>
                    <FormControl mt={6}>
                      <FormLabel>Content</FormLabel>
                      <Input
                        required
                        type="text"
                        onChange={(e) => setArticleContent(e.target.value)}
                        value={articleContent}
                      />
                    </FormControl>
                    <Button width="full" mt={10} type="submit">
                      Add New Article
                    </Button>
                  </form>
                </Box>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter
            justifyContent="end"
            borderBottomLeftRadius="3xl"
            borderBottomRightRadius="3xl"
          ></ModalFooter>
        </ModalContent>
      </Modal>
      <ToastContainer />
    </Fragment>
  );
}
