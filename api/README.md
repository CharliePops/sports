## Documentation

### Commands

- `yarn start` starts GraphQL server on `http://localhost:4000`
- `yarn prisma <subcommand>` gives access to local version of Prisma CLI (e.g. `yarn prisma deploy`)

> **Note**: We recommend that you're using `yarn dev` during development as it will give you access to the GraphQL API or your server (defined by the [application schema](./src/schema.graphql)) as well as to the Prisma API directly (defined by the [Prisma database schema](./generated/prisma.graphql)). If you're starting the server with `yarn start`, you'll only be able to access the API of the application schema.

### Project structure

![](https://imgur.com/95faUsa.png)

| File name 　　　　　　　　　　　　　　 | Description 　　　　　　　　<br><br>                                                                                                                           |
| :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `├── .env`                             | Defines environment variables                                                                                                                                  |
| `├── .graphqlconfig.yml`               | Configuration file based on [`graphql-config`](https://github.com/prisma/graphql-config) (e.g. used by GraphQL Playground).                                    |
| `└── database` (_directory_)           | _Contains all files that are related to the Prisma database service_                                                                                           | \ |
| `├── prisma.yml`                       | The root configuration file for your Prisma database service ([docs](https://www.prismagraphql.com/docs/reference/prisma.yml/overview-and-example-foatho8aip)) |
| `└── datamodel.graphql`                | Defines your data model (written in [GraphQL SDL](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51))                                |
| `└── src` (_directory_)                | _Contains the source files for your GraphQL server_                                                                                                            |
| `├── index.ts`                         | The entry point for your GraphQL server                                                                                                                        |
| `├── schema.graphql`                   | The **application schema** defining the API exposed to client applications                                                                                     |
| `├── resolvers` (_directory_)          | _Contains the implementation of the resolvers for the application schema_                                                                                      |
| `└── generated` (_directory_)          | _Contains generated files_                                                                                                                                     |
| `└── prisma-client` (_directory_)      | The generated Prisma client                                                                                                                                    |
