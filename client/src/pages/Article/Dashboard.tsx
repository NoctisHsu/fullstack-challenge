import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Thead,
  Th,
} from "@chakra-ui/react";
import { IArticle } from "../../../../typings/article";

interface Props {
  articleList: IArticle[];
  startIndex: number;
}

export default function Dashboard(props: Props) {
  const { startIndex, articleList } = props;
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Index</Th>
            <Th>Title</Th>
            <Th>content</Th>
            <Th>Author</Th>
            <Th>Create Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {articleList?.map((article, idx) => (
            <Tr key={article._id}>
              <Td textAlign="right">{startIndex + idx + 1}</Td>
              <Td textAlign="right">{article.title}</Td>
              <Td textAlign="right">{article.content}</Td>
              <Td textAlign="right">{article.author}</Td>
              <Td textAlign="right">{article.createDate}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
