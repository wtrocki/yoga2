export type PrismaInputConfig =
  | true
  | {
      /**
       * Path to the prisma.graphql file.
       * @default ./src/generated/prisma.graphql
       */
      schemaPath?: string
      /**
       * Variable name of the Prisma Client instance
       * @default prisma
       */
      contextClientName?: string
      /**
       * Path to the prisma-client/index.ts file
       * @default ./src/generated/prisma-client/index.ts
       */
      prismaClientPath?: string
    }

export type OutputInputConfig = {
  /**
   * Path to the generated typings
   * @default ./src/generated/nexus.ts
   */
  typegenPath?: string
  /**
   * Path to the generated schema
   * @default ./src/generated/nexus.graphql
   */
  schemaPath?: string
}

export interface InputConfig {
  /**
   * Path to the directory where your resolvers are defined.
   * **Path has to exist**
   * @default ./src/graphql/
   */
  resolversPath?: string
  /**
   * Path to your context.ts file. **If provided, path has to exist**
   * @default ./src/context.ts
   */
  contextPath?: string
  /**
   * Path to an `index.ts` file to eject from default configuration file `yoga.config.ts`.
   * When provided, all other configuration properties are ignored and should be configured programatically.
   * **If provided, path has to exist**
   * @default ./src/index.ts
   */
  ejectFilePath?: string
  /**
   * Config for the outputted files (schema, typings ..)
   */
  output?: OutputInputConfig
  /**
   * Config for the prisma integration
   */
  prisma?: PrismaInputConfig
}

export interface Config {
  resolversPath: string
  contextPath?: string
  ejectFilePath?: string
  output: {
    schemaPath: string
    typegenPath: string
    buildPath: string
  }
  prisma?: {
    schemaPath: string
    contextClientName: string
    prismaClientPath: string
  }
}

export interface Yoga<Server = any> {
  server: (dirname: string) => Server | Promise<Server>
  startServer: (server: Server) => any | Promise<any>
  stopServer: (server: Server) => any | Promise<any>
}
