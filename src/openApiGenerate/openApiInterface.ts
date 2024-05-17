import { Schema } from './SchemaInterface.js'

type openapi = '3.0.1'

interface IInfo {
  title: string
  description: string
  version: string
}

interface IRequestBody {
  content: {
    'application/json': {
      schema: Schema
    }
  }
}

interface IResponses {
  [code: string]: {
    description: 'string'
  } & IRequestBody
}

interface IPaths {
  [path: string]: {
    [method: string]: {
      summary: string
      requestBody: IRequestBody
      responses: IResponses
    }
  }
}
export interface IOpenapi {
  openapi: openapi
  info: IInfo
  paths: IPaths
}
