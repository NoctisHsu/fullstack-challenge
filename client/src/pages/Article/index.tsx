import React, { useState, useMemo } from "react";
import CreateArticleButton from "~/src/pages/Article/CreateArticleButton";
import Dashboard from "~/src/pages/Article/Dashboard";
import { Box } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import QUERY_ARTICLES from "~/src/graphql/queryArticles.graphql";
import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup,
  usePaginator,
} from "chakra-paginator";
import { IArticle } from "~/../typings/article";
const PAGE_SIZE = 9;

export default function Article() {
  const [articleList, setArticleList] = useState<IArticle[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const { currentPage, setCurrentPage } = usePaginator({
    initialState: { currentPage: 1 },
  });

  const { data, error } = useQuery(QUERY_ARTICLES, {
    variables: { skip: (currentPage - 1) * PAGE_SIZE, limit: PAGE_SIZE },
  });

  const handleOnCreateArticleSuccess = (article: IArticle) => {
    setArticleList([article, ...articleList]);
  };

  useMemo(() => {
    const articlesInfo = data?.articles;
    if (articlesInfo) {
      setArticleList(articlesInfo.data || []);
      setTotalPage(Math.ceil(articlesInfo.total / PAGE_SIZE));
    }
  }, [data]);

  if (error) {
    return <p>:( an error happened</p>;
  }

  return (
    <Box minH={"750px"}>
      <CreateArticleButton onCreateSuccess={handleOnCreateArticleSuccess} />
      <Dashboard
        articleList={articleList}
        startIndex={(currentPage - 1) * PAGE_SIZE}
      />
      {/** @ts-ignore */}
      <Paginator
        pagesQuantity={totalPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      >
        <Container align="center" justify="space-between" w="full" p={4}>
          <Previous>Previous</Previous>
          <PageGroup isInline align="center" />
          <Next>Next</Next>
        </Container>
      </Paginator>
    </Box>
  );
}
