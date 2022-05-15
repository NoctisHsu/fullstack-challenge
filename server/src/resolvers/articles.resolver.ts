import { v4 as uuidV4 } from 'uuid';
import { IArticle } from '../../../typings/article';
import { articleDb } from '../providers/db.provider'

interface ArticleCreate {
    title: string;
    content: string;
    author: string;
}

export const Mutation = {
    createArticle: async (
        _: unknown,
        { article: { title, content, author } }: { article: ArticleCreate },
    ) => {
        const article: IArticle = {
            _id: uuidV4(),
            author,
            title,
            content,
            createDate: new Date().toUTCString(),
        };
        await articleDb.put(article);
        return article;
    },
}

export const Query = {
    articles: async (_: unknown, { skip, limit }: {
        skip: number
        limit: number
    }) => {
        const articles = articleDb.get('').reverse();
        const result: { data: IArticle[], total: number } = {
            data: [],
            total: articles.length,
        };
        if (skip) {
            articles.splice(0, skip);
        }
        result.data = limit ? articles.slice(0, limit) : articles;
        return result;
    },
    article: async (_: unknown, { id }: { id: string }) => {
        const articles = articleDb.get(id);
        if (articles.length === 0) {
            return {};
        }
        return articles[0];
    },
}