# Full-stack Engineer Written Challenge

Please answer one or more questions on Section 1 and Section 2, and two or more questions in Section 3. There are no word limits on the answers; you can keep them as concise as possible as long as you have demostrate your thoughts.

You can directly write your answers in your branch following the questions.

## Section 1: Architectural Design

> Assume that you are building a discussion forum similar with [Hacker News](https://news.ycombinator.com/). The product will be very popular, and your team made the following projection: monthly traffic of 30k page views and 5k posts in the first year, and monthly traffic of 300m page views and 500k posts in the second year. How would you choose your frontend and backend technologies, infrastructures and deploying methods? What methods will you use in scaling your platform and envovling the infrastructures?

## Development

I will choose NEXTJS and ReactJS as the frontend technology. Its powerful SSG and AMP Plugin can strengthen SEO and display performance.

Since the static HTML file is generated through SSG, its content can be placed in similar AWS S3 / CloudFront to reduce the traffic burden on the server.

The backend can provide some instant API information or auth required for the frontend through the NextJS with Express as API Router.

To avoid the inquiries of DB, in the middle of the DA layer, it is optimized by Node-Cache and Redis Cache.

## Deployment

In infrastructure, I will choose Gitlab with CI / CD to build Docker Image and deploy it on the K8S cluster.

## Summary

- frontend: reactjs + nextjs

- backend: expressjs API server

- DB: Postgres for the db

- cache: Redis / S3 / cloudfront

## Section 2: Distributed Systems and Web3

> \*\* Front end: ReactJS / NextJS
>
> - Assume you are to design a product for crowdfunding creative projects with NFTs, where the creator pre-sale the ownership of the final result as NFTs. From minting the tokens to delivering the final result, what are the UX and techonogical challenges you forsee, and what do you think it takes to solve these problems well?

## UX

- The NFT platform has two main types of users : sellers and buyers, so it will be an inevitable challenge to design different dashboards.
- Need to deeply study the unit design and functions of NFT mainstream platforms, such as the NFT auction process.
- Basic elements for building a community platform, such as: user management/following/subscription functions, as well as the part of transaction history.
- Make sure to prompt the user for network error conditions, such as connecting to the wrong network cannot mint NFT.

## technology

- Learn and become familiar with the basics such as ABI (Application Binary Interface).
- Learn related APIs of web3.js.
- Let users complete the chain like metamask wallet.
- Implement Mint NFTs (through ethers lib), familiar with related API and business logic.

## Section 3: Personal Passions and Communities

> What are some technologies you are recently fascinated with, and why are they interesting to you?

Recently, I am very interested in studying Webpack, on the one hand, it is often used.

Want to know more about its actual operation, and how to write Loader and Plugin and how to actually operate in the architecture of Webpack.

Introduce a simple version of Webpack by myself to simulate and know it better.

> What are some open source projects that you are involved with, or enjoy working on? What aspect of the project (e.g. architectural design, scope, community vibe, organization) makes it enjoyable or admirable?

Participated in the open source development of DefinitelyTyped projects and contributed to the type deifnition of js sdk in the community.

ref: https://www.npmjs.com/package/@types/facebook-pixel

With the update of facebook pixel, it will continue to iterate through the power of the community, and it is a great thing to help others develop.

> If you were given the resource and freedom to start and maintain an open source project, what problem do you choose to solve, and how would you setup the community guideline and collabration process?

- I would like to participate in the maintenance of technical projects, such as solving technical problems of library and function expansion and optimization.
- Can pass information by writing community website, github, and by running discord/twitter.
