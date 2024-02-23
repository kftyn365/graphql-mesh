export const jsonSchema: any = {
  "definitions": {
    "Cache": {
      "additionalProperties": true,
      "type": "object",
      "title": "Cache",
      "properties": {
        "cfwKv": {
          "$ref": "#/definitions/CFWorkersKVCacheConfig"
        },
        "file": {
          "$ref": "#/definitions/FileCacheConfig"
        },
        "localforage": {
          "$ref": "#/definitions/LocalforageConfig"
        },
        "redis": {
          "$ref": "#/definitions/RedisConfig"
        }
      }
    },
    "CFWorkersKVCacheConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "CFWorkersKVCacheConfig",
      "properties": {
        "namespace": {
          "type": "string",
          "description": "The name of the Workers KV namespace to use for caching.\n\nMake sure you have configured the following namespace described in [here](https://developers.cloudflare.com/workers/wrangler/cli-wrangler/commands/#kv)."
        }
      },
      "required": [
        "namespace"
      ]
    },
    "FileCacheConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "FileCacheConfig",
      "properties": {
        "path": {
          "type": "string"
        }
      }
    },
    "LocalforageConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "LocalforageConfig",
      "properties": {
        "driver": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "WEBSQL",
              "INDEXEDDB",
              "LOCALSTORAGE"
            ],
            "description": "Allowed values: WEBSQL, INDEXEDDB, LOCALSTORAGE"
          },
          "additionalItems": false,
          "description": "Allowed values: WEBSQL, INDEXEDDB, LOCALSTORAGE"
        },
        "name": {
          "type": "string"
        },
        "version": {
          "type": "number"
        },
        "size": {
          "type": "integer"
        },
        "storeName": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      }
    },
    "RedisConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "RedisConfig",
      "properties": {
        "host": {
          "type": "string"
        },
        "port": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "url": {
          "type": "string"
        },
        "lazyConnect": {
          "type": "boolean",
          "description": "Flag to indicate lazyConnect value for Redis client.\n\n@default: true"
        }
      }
    },
    "ServeConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "ServeConfig",
      "properties": {
        "fork": {
          "description": "Spawn multiple server instances as node clusters (default: `1`) (Any of: Int, Boolean)",
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "boolean"
            }
          ]
        },
        "port": {
          "description": "TCP Port to listen (default: `4000`) (Any of: Int, String)",
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "string"
            }
          ]
        },
        "hostname": {
          "type": "string",
          "description": "The binding hostname (default: `localhost`)"
        },
        "cors": {
          "$ref": "#/definitions/CorsConfig",
          "description": "Configuration for CORS"
        },
        "staticFiles": {
          "type": "string",
          "description": "Path to your static files you want to be served with GraphQL Mesh HTTP Server"
        },
        "playground": {
          "type": "boolean",
          "description": "Show GraphiQL Playground"
        },
        "sslCredentials": {
          "$ref": "#/definitions/HTTPSConfig",
          "description": "SSL Credentials for HTTPS Server\nIf this is provided, Mesh will be served via HTTPS"
        },
        "endpoint": {
          "type": "string",
          "description": "Path to GraphQL Endpoint (default: /graphql)"
        },
        "browser": {
          "description": "Path to the browser that will be used by `mesh serve` to open a playground window in development mode\nThis feature can be disabled by passing `false` (Any of: String, Boolean)",
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "boolean"
            }
          ]
        },
        "playgroundTitle": {
          "type": "string",
          "description": "Title of GraphiQL Playground"
        },
        "trustProxy": {
          "type": "string",
          "description": "Configure Express Proxy Handling\n[Learn more](https://expressjs.com/en/guide/behind-proxies.html)"
        },
        "batchingLimit": {
          "type": "integer",
          "description": "Enable and define a limit for [Request Batching](https://github.com/graphql/graphql-over-http/blob/main/rfcs/Batching.md)"
        }
      }
    },
    "CorsConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "CorsConfig",
      "properties": {
        "origin": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        },
        "allowedHeaders": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false
        },
        "exposedHeaders": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false
        },
        "credentials": {
          "type": "boolean"
        },
        "maxAge": {
          "type": "integer"
        },
        "preflightContinue": {
          "type": "boolean"
        },
        "optionsSuccessStatus": {
          "type": "integer"
        }
      }
    },
    "HTTPSConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "HTTPSConfig",
      "properties": {
        "key": {
          "type": "string"
        },
        "cert": {
          "type": "string"
        }
      },
      "required": [
        "key",
        "cert"
      ]
    },
    "SDKConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "SDKConfig",
      "properties": {
        "generateOperations": {
          "$ref": "#/definitions/GenerateOperationsConfig",
          "description": "Use this only if you don't want to use `documents` for SDK,\nand let Mesh generate them for you"
        }
      }
    },
    "GenerateOperationsConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "GenerateOperationsConfig",
      "properties": {
        "selectionSetDepth": {
          "type": "integer"
        }
      }
    },
    "Source": {
      "additionalProperties": false,
      "type": "object",
      "title": "Source",
      "properties": {
        "name": {
          "type": "string",
          "description": "The name you wish to set to your remote API, this will be used for building the GraphQL context"
        },
        "handler": {
          "$ref": "#/definitions/Handler",
          "description": "Point to the handler you wish to use, it can either be a predefined handler, or a custom"
        },
        "transforms": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Transform"
          },
          "additionalItems": false,
          "description": "List of transforms to apply to the current API source, before unifying it with the rest of the sources"
        }
      },
      "required": [
        "name",
        "handler"
      ]
    },
    "Transform": {
      "additionalProperties": true,
      "type": "object",
      "title": "Transform",
      "properties": {
        "cache": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CacheTransformConfig"
          },
          "additionalItems": false,
          "description": "Transformer to apply caching for your data sources"
        },
        "encapsulate": {
          "$ref": "#/definitions/EncapsulateTransformObject",
          "description": "Transformer to apply encapsulation to the API source, by creating a field for it under the root query"
        },
        "extend": {
          "$ref": "#/definitions/ExtendTransform"
        },
        "federation": {
          "$ref": "#/definitions/FederationTransform"
        },
        "filterSchema": {
          "description": "Transformer to filter (white/black list) GraphQL types, fields and arguments (Any of: FilterSchemaTransform, Any)",
          "anyOf": [
            {
              "$ref": "#/definitions/FilterSchemaTransform"
            },
            {
              "anyOf": [
                {
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "type": "string"
                },
                {
                  "type": "array",
                  "additionalItems": true
                }
              ]
            }
          ]
        },
        "hoistField": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/HoistFieldTransformConfig"
          },
          "additionalItems": false,
          "description": "Transformer to hoist GraphQL fields"
        },
        "namingConvention": {
          "$ref": "#/definitions/NamingConventionTransformConfig",
          "description": "Transformer to apply naming convention to GraphQL Types"
        },
        "prefix": {
          "$ref": "#/definitions/PrefixTransformConfig",
          "description": "Prefix transform"
        },
        "prune": {
          "$ref": "#/definitions/PruneTransformConfig",
          "description": "Prune transform"
        },
        "rateLimit": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/RateLimitTransformConfig"
          },
          "additionalItems": false,
          "description": "RateLimit transform"
        },
        "rename": {
          "description": "Transformer to rename GraphQL types and fields (Any of: RenameTransform, Any)",
          "anyOf": [
            {
              "$ref": "#/definitions/RenameTransform"
            },
            {
              "anyOf": [
                {
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "type": "string"
                },
                {
                  "type": "array",
                  "additionalItems": true
                }
              ]
            }
          ]
        },
        "replaceField": {
          "$ref": "#/definitions/ReplaceFieldTransformConfig",
          "description": "Transformer to replace GraphQL field with partial of full config from a different field"
        },
        "resolversComposition": {
          "description": "Transformer to apply composition to resolvers (Any of: ResolversCompositionTransform, Any)",
          "anyOf": [
            {
              "$ref": "#/definitions/ResolversCompositionTransform"
            },
            {
              "anyOf": [
                {
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "type": "string"
                },
                {
                  "type": "array",
                  "additionalItems": true
                }
              ]
            }
          ]
        },
        "transferSchema": {
          "$ref": "#/definitions/TransferSchemaTransformConfig",
          "description": "Transformer to transfer (move or copy) GraphQL parts of GraphQL schema across Types and Fields"
        },
        "typeMerging": {
          "$ref": "#/definitions/TypeMergingConfig",
          "description": "[Type Merging](https://www.graphql-tools.com/docs/stitch-type-merging) Configuration"
        }
      }
    },
    "Handler": {
      "additionalProperties": true,
      "type": "object",
      "title": "Handler",
      "properties": {
        "graphql": {
          "description": "Handler for remote/local/third-party GraphQL schema (Any of: GraphQLHandlerHTTPConfiguration, GraphQLHandlerCodeFirstConfiguration, GraphQLHandlerMultipleHTTPConfiguration)",
          "anyOf": [
            {
              "$ref": "#/definitions/GraphQLHandlerHTTPConfiguration"
            },
            {
              "$ref": "#/definitions/GraphQLHandlerCodeFirstConfiguration"
            },
            {
              "$ref": "#/definitions/GraphQLHandlerMultipleHTTPConfiguration"
            }
          ]
        },
        "grpc": {
          "$ref": "#/definitions/GrpcHandler",
          "description": "Handler for gRPC and Protobuf schemas"
        },
        "jsonSchema": {
          "$ref": "#/definitions/JsonSchemaHandler",
          "description": "Handler for JSON Schema specification.\nSource could be a local json file, or a url to it."
        },
        "mongoose": {
          "$ref": "#/definitions/MongooseHandler"
        },
        "mysql": {
          "$ref": "#/definitions/MySQLHandler"
        },
        "neo4j": {
          "$ref": "#/definitions/Neo4jHandler",
          "description": "Handler for Neo4j"
        },
        "odata": {
          "$ref": "#/definitions/ODataHandler",
          "description": "Handler for OData"
        },
        "openapi": {
          "$ref": "#/definitions/OpenapiHandler",
          "description": "Handler for Swagger / OpenAPI 2/3 specification. Source could be a local json/swagger file, or a url to it."
        },
        "postgraphile": {
          "$ref": "#/definitions/PostGraphileHandler",
          "description": "Handler for Postgres database, based on `postgraphile`"
        },
        "raml": {
          "$ref": "#/definitions/RAMLHandler"
        },
        "soap": {
          "$ref": "#/definitions/SoapHandler",
          "description": "Handler for SOAP"
        },
        "supergraph": {
          "$ref": "#/definitions/SupergraphHandler"
        },
        "thrift": {
          "$ref": "#/definitions/ThriftHandler",
          "description": "Handler for OData"
        },
        "tuql": {
          "$ref": "#/definitions/TuqlHandler",
          "description": "Handler for SQLite database, based on `tuql`"
        }
      }
    },
    "Plugin": {
      "additionalProperties": true,
      "type": "object",
      "title": "Plugin",
      "properties": {
        "maskedErrors": {
          "$ref": "#/definitions/MaskedErrorsPluginConfig"
        },
        "immediateIntrospection": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        },
        "deduplicateRequest": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        },
        "hive": {
          "$ref": "#/definitions/HivePlugin"
        },
        "httpCache": {
          "$ref": "#/definitions/HTTPCachePlugin"
        },
        "httpDetailsExtensions": {
          "$ref": "#/definitions/HTTPDetailsExtensionsConfig"
        },
        "liveQuery": {
          "$ref": "#/definitions/LiveQueryConfig"
        },
        "mock": {
          "$ref": "#/definitions/MockingConfig",
          "description": "Mock configuration for your source"
        },
        "newrelic": {
          "$ref": "#/definitions/NewrelicConfig"
        },
        "operationFieldPermissions": {
          "$ref": "#/definitions/OperationFieldPermissionsConfig"
        },
        "prometheus": {
          "$ref": "#/definitions/PrometheusConfig"
        },
        "rateLimit": {
          "$ref": "#/definitions/RateLimitPluginConfig",
          "description": "RateLimit plugin"
        },
        "responseCache": {
          "$ref": "#/definitions/ResponseCacheConfig"
        },
        "snapshot": {
          "$ref": "#/definitions/SnapshotPluginConfig",
          "description": "Configuration for Snapshot extension"
        },
        "statsd": {
          "$ref": "#/definitions/StatsdPlugin"
        }
      }
    },
    "MaskedErrorsPluginConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "MaskedErrorsPluginConfig",
      "properties": {
        "errorMessage": {
          "type": "string"
        }
      }
    },
    "AdditionalStitchingResolverObject": {
      "additionalProperties": false,
      "type": "object",
      "title": "AdditionalStitchingResolverObject",
      "properties": {
        "sourceName": {
          "type": "string"
        },
        "sourceTypeName": {
          "type": "string"
        },
        "sourceFieldName": {
          "type": "string"
        },
        "sourceSelectionSet": {
          "type": "string"
        },
        "requiredSelectionSet": {
          "type": "string"
        },
        "sourceArgs": {
          "type": "object",
          "properties": {}
        },
        "targetTypeName": {
          "type": "string"
        },
        "targetFieldName": {
          "type": "string"
        },
        "result": {
          "type": "string",
          "description": "Extract specific property from the result"
        },
        "resultType": {
          "type": "string",
          "description": "If return types don't match,\nyou can specify a result type to apply inline fragment"
        }
      },
      "required": [
        "sourceName",
        "sourceTypeName",
        "sourceFieldName",
        "targetTypeName",
        "targetFieldName"
      ]
    },
    "AdditionalStitchingBatchResolverObject": {
      "additionalProperties": false,
      "type": "object",
      "title": "AdditionalStitchingBatchResolverObject",
      "properties": {
        "sourceName": {
          "type": "string"
        },
        "sourceTypeName": {
          "type": "string"
        },
        "sourceFieldName": {
          "type": "string"
        },
        "sourceSelectionSet": {
          "type": "string"
        },
        "requiredSelectionSet": {
          "type": "string"
        },
        "keyField": {
          "type": "string"
        },
        "keysArg": {
          "type": "string"
        },
        "additionalArgs": {
          "type": "object",
          "properties": {}
        },
        "targetTypeName": {
          "type": "string"
        },
        "targetFieldName": {
          "type": "string"
        },
        "result": {
          "type": "string",
          "description": "Extract specific property from the result"
        },
        "resultType": {
          "type": "string",
          "description": "If return types don't match,\nyou can specify a result type to apply inline fragment"
        }
      },
      "required": [
        "sourceName",
        "sourceTypeName",
        "sourceFieldName",
        "keyField",
        "keysArg",
        "targetTypeName",
        "targetFieldName"
      ]
    },
    "AdditionalSubscriptionObject": {
      "additionalProperties": false,
      "type": "object",
      "title": "AdditionalSubscriptionObject",
      "properties": {
        "targetTypeName": {
          "type": "string"
        },
        "targetFieldName": {
          "type": "string"
        },
        "pubsubTopic": {
          "type": "string"
        },
        "result": {
          "type": "string"
        },
        "filterBy": {
          "type": "string"
        }
      },
      "required": [
        "targetTypeName",
        "targetFieldName",
        "pubsubTopic"
      ]
    },
    "PubSubConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "PubSubConfig",
      "properties": {
        "name": {
          "type": "string"
        },
        "config": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        }
      },
      "required": [
        "name"
      ]
    },
    "PersistedOperationsConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "PersistedOperationsConfig",
      "properties": {
        "allowArbitraryOperations": {
          "type": "boolean",
          "description": "Whether to allow execution of arbitrary GraphQL operations aside from persisted operations."
        },
        "skipDocumentValidation": {
          "type": "boolean",
          "description": "Whether to skip validation of the persisted operation"
        },
        "customErrors": {
          "$ref": "#/definitions/CustomPersistedQueryErrors",
          "description": "Custom errors to be thrown"
        }
      }
    },
    "CustomPersistedQueryErrors": {
      "additionalProperties": false,
      "type": "object",
      "title": "CustomPersistedQueryErrors",
      "properties": {
        "notFound": {
          "type": "string",
          "description": "Error to be thrown when the persisted operation is not found"
        },
        "persistedQueryOnly": {
          "type": "string",
          "description": "Error to be thrown when rejecting non-persisted operations"
        },
        "keyNotFound": {
          "type": "string",
          "description": "Error to be thrown when the extraction of the persisted operation id failed"
        }
      }
    },
    "GraphQLHandlerMultipleHTTPConfiguration": {
      "additionalProperties": false,
      "type": "object",
      "title": "GraphQLHandlerMultipleHTTPConfiguration",
      "properties": {
        "sources": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/GraphQLHandlerHTTPConfiguration"
          },
          "additionalItems": false,
          "description": "HTTP Source Configurations"
        },
        "strategy": {
          "type": "string",
          "enum": [
            "fallback",
            "race",
            "highestValue"
          ],
          "description": "Handling strategy (default: fallback) (Allowed values: fallback, race, highestValue)"
        },
        "strategyConfig": {
          "$ref": "#/definitions/GraphQLHandlerhighestValueStrategyConfig",
          "description": "Handling strategy configuration"
        }
      },
      "required": [
        "sources"
      ]
    },
    "GraphQLHandlerhighestValueStrategyConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "GraphQLHandlerhighestValueStrategyConfig",
      "properties": {
        "selectionSet": {
          "type": "string"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "selectionSet",
        "value"
      ]
    },
    "GraphQLHandlerCodeFirstConfiguration": {
      "additionalProperties": false,
      "type": "object",
      "title": "GraphQLHandlerCodeFirstConfiguration",
      "properties": {
        "source": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "A file path to your GraphQL Schema\nIf you provide a path to a code file(js or ts),\nother options will be ignored and the schema exported from the file will be used directly."
        }
      },
      "required": [
        "source"
      ]
    },
    "GraphQLHandlerHTTPConfiguration": {
      "additionalProperties": false,
      "type": "object",
      "title": "GraphQLHandlerHTTPConfiguration",
      "properties": {
        "endpoint": {
          "type": "string",
          "description": "A url or file path to your remote GraphQL endpoint.\nIf you provide a path to a code file(js or ts),\nother options will be ignored and the schema exported from the file will be used directly."
        },
        "schemaHeaders": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "JSON object representing the Headers to add to the runtime of the API calls only for schema introspection"
        },
        "operationHeaders": {
          "type": "object",
          "properties": {},
          "description": "JSON object representing the Headers to add to the runtime of the API calls only for operation during runtime"
        },
        "useGETForQueries": {
          "type": "boolean",
          "description": "Use HTTP GET for Query operations"
        },
        "method": {
          "type": "string",
          "enum": [
            "GET",
            "POST"
          ],
          "description": "HTTP method used for GraphQL operations (Allowed values: GET, POST)"
        },
        "credentials": {
          "type": "string",
          "enum": [
            "omit",
            "include"
          ],
          "description": "Request Credentials if your environment supports it.\n[See more](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials)\n\n@default \"same-origin\" (Allowed values: omit, include)"
        },
        "webSocketImpl": {
          "type": "string",
          "description": "Path to a custom W3 Compatible WebSocket Implementation"
        },
        "source": {
          "type": "string",
          "description": "Path to the introspection\nYou can separately give schema introspection or SDL"
        },
        "subscriptionsProtocol": {
          "type": "string",
          "enum": [
            "SSE",
            "WS",
            "LEGACY_WS"
          ],
          "description": "SSE - Server Sent Events\nWS - New graphql-ws\nLEGACY_WS - Legacy subscriptions-transport-ws (Allowed values: SSE, WS, LEGACY_WS)"
        },
        "subscriptionsEndpoint": {
          "type": "string",
          "description": "URL to your endpoint serving all subscription queries for this source"
        },
        "retry": {
          "type": "integer",
          "description": "Retry attempts if fails"
        },
        "timeout": {
          "type": "integer",
          "description": "Timeout in milliseconds"
        },
        "batch": {
          "type": "boolean",
          "description": "Enable/Disable automatic query batching"
        },
        "connectionParams": {
          "type": "object",
          "properties": {},
          "description": "JSON object representing the `connectionParams` from a WebSocket connection to add to the runtime of the API calls only for operation during runtime.\nMore information about the WebSocket `connectionParams`:\n  - When using `subscriptionsProtocol=WS` (graphql-ws): https://github.com/enisdenjo/graphql-ws/blob/master/docs/interfaces/client.ClientOptions.md#connectionparams\n  - When using `subscriptionsProtocol=LEGACY_WS` (subscriptions-transport-ws): https://github.com/apollographql/subscriptions-transport-ws/blob/51270cc7dbaf09c7b9aa67368f1de58148c7d334/README.md#subscriptionclient"
        }
      },
      "required": [
        "endpoint"
      ]
    },
    "GrpcHandler": {
      "additionalProperties": false,
      "type": "object",
      "title": "GrpcHandler",
      "properties": {
        "endpoint": {
          "type": "string",
          "description": "gRPC Endpoint"
        },
        "source": {
          "description": "gRPC Proto file that contains your protobuf schema\nOR\nUse a binary-encoded or JSON file descriptor set file (Any of: ProtoFilePath, String)",
          "anyOf": [
            {
              "$ref": "#/definitions/ProtoFilePath"
            },
            {
              "type": "string"
            }
          ]
        },
        "requestTimeout": {
          "type": "integer",
          "description": "Request timeout in milliseconds\nDefault: 200000"
        },
        "credentialsSsl": {
          "$ref": "#/definitions/GrpcCredentialsSsl",
          "description": "SSL Credentials"
        },
        "useHTTPS": {
          "type": "boolean",
          "description": "Use https instead of http for gRPC connection"
        },
        "metaData": {
          "type": "object",
          "properties": {},
          "description": "MetaData"
        },
        "prefixQueryMethod": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false,
          "description": "prefix to collect Query method default: list, get"
        },
        "schemaHeaders": {
          "type": "object",
          "properties": {}
        }
      },
      "required": [
        "endpoint"
      ]
    },
    "LoadOptions": {
      "additionalProperties": false,
      "type": "object",
      "title": "LoadOptions",
      "properties": {
        "defaults": {
          "type": "boolean"
        },
        "includeDirs": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false
        }
      }
    },
    "ProtoFilePath": {
      "additionalProperties": false,
      "type": "object",
      "title": "ProtoFilePath",
      "properties": {
        "file": {
          "type": "string"
        },
        "load": {
          "$ref": "#/definitions/LoadOptions"
        }
      },
      "required": [
        "file"
      ]
    },
    "GrpcCredentialsSsl": {
      "additionalProperties": false,
      "type": "object",
      "title": "GrpcCredentialsSsl",
      "properties": {
        "rootCA": {
          "type": "string"
        },
        "certChain": {
          "type": "string"
        },
        "privateKey": {
          "type": "string"
        }
      }
    },
    "QueryStringOptions": {
      "additionalProperties": false,
      "type": "object",
      "title": "QueryStringOptions",
      "properties": {
        "indices": {
          "type": "boolean",
          "description": "When arrays are stringified, by default they are not given explicit indices:\n`a=b&a=c&a=d`\nYou may override this by setting the indices option to true:\n`a[0]=b&a[1]=c&a[2]=d`"
        },
        "arrayFormat": {
          "type": "string",
          "enum": [
            "indices",
            "brackets",
            "repeat",
            "comma"
          ],
          "description": "You can configure how to format arrays in the query strings.\n\nNote: when using arrayFormat set to 'comma', you can also pass the commaRoundTrip option set to true or false, to append [] on single-item arrays, so that they can round trip through a parse. (Allowed values: indices, brackets, repeat, comma)"
        },
        "commaRoundTrip": {
          "type": "boolean",
          "description": "Even if there is a single item in an array, this option treats them as arrays\n(default: false)"
        }
      }
    },
    "JsonSchemaHandler": {
      "additionalProperties": false,
      "type": "object",
      "title": "JsonSchemaHandler",
      "properties": {
        "source": {
          "type": "string"
        },
        "endpoint": {
          "type": "string"
        },
        "operationHeaders": {
          "type": "object",
          "properties": {}
        },
        "schemaHeaders": {
          "type": "object",
          "properties": {}
        },
        "operations": {
          "type": "array",
          "items": {
            "description": "Any of: JsonSchemaHTTPOperation, JsonSchemaPubSubOperation",
            "anyOf": [
              {
                "$ref": "#/definitions/JsonSchemaHTTPOperation"
              },
              {
                "$ref": "#/definitions/JsonSchemaPubSubOperation"
              }
            ]
          },
          "additionalItems": false,
          "description": "Any of: JsonSchemaHTTPOperation, JsonSchemaPubSubOperation"
        },
        "ignoreErrorResponses": {
          "type": "boolean"
        },
        "queryParams": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        },
        "queryStringOptions": {
          "$ref": "#/definitions/QueryStringOptions"
        },
        "timeout": {
          "type": "integer",
          "description": "Timeout for the HTTP request in milliseconds"
        }
      }
    },
    "JsonSchemaHTTPOperation": {
      "additionalProperties": false,
      "type": "object",
      "title": "JsonSchemaHTTPOperation",
      "properties": {
        "field": {
          "type": "string",
          "description": "This Field based on the field name of the URL path.\nExample: \"https://MyAPIURL.com/FieldNameHere/\",\nso we will set the \"field: FieldNameHere\"."
        },
        "description": {
          "type": "string",
          "description": "Your chance to describe the operation!\nMake sure the description is clear and concise."
        },
        "type": {
          "type": "string",
          "enum": [
            "Query",
            "Mutation",
            "Subscription"
          ],
          "description": "Type field is set the opertion type: Query, Mutation or Subscription. (Allowed values: Query, Mutation, Subscription)"
        },
        "requestSchema": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "Your chance to provide request schema name."
        },
        "requestSample": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "The path definition of the JSON Schema sample.\nExample: \"./jsons/questions.response.json\"."
        },
        "requestTypeName": {
          "type": "string",
          "description": "Inset any name for the type of the request body."
        },
        "requestBaseBody": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "This body will be merged with the request body sent with\nthe underlying HTTP request"
        },
        "responseSchema": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "Yay! Now you can provide the response schema name."
        },
        "responseSample": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "Did you use Sample? Provide the response sample path."
        },
        "responseTypeName": {
          "type": "string",
          "description": "Inset any name for the type of the response body."
        },
        "responseByStatusCode": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "You can define your response schemas by status codes;\n```yaml filename=\".meshrc.yaml\"\nresponseByStatusCode:\n  200:\n    responseSchema: ./someschema.json#/somepath\n  404:\n    responseSample: ./error-sample.json\n    responseTypeName: MyError\n```"
        },
        "exposeResponseMetadata": {
          "type": "boolean",
          "description": "Expose response details done to the upstream API\nWhen you enable this, you will see a new field in the response type;\n```graphql\ntype MyResponseType {\n  myFooField: String\n  _response: ResponseMetadata\n}\n\n# And a new type for the response metadata object\ntype ResponseMetadata {\n  url: URL\n  status: Int\n  method: String\n  headers: JSON\n  body: String\n}\n```"
        },
        "argTypeMap": {
          "type": "object",
          "properties": {},
          "description": "Mapping the JSON Schema and define the arguments of the operation.\n\n# Example:\nargTypeMap:\n  user_id:\n    type: string"
        },
        "queryParamArgMap": {
          "type": "object",
          "properties": {},
          "description": "JSON object representing the mapping of query search parameters (added to the route path) and the matching argument.\n\n# Example:\nqueryParamArgMap:\n  id: user_id"
        },
        "path": {
          "type": "string"
        },
        "method": {
          "type": "string",
          "enum": [
            "GET",
            "HEAD",
            "POST",
            "PUT",
            "DELETE",
            "CONNECT",
            "OPTIONS",
            "TRACE",
            "PATCH"
          ],
          "description": "Allowed values: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH"
        },
        "headers": {
          "type": "object",
          "properties": {}
        },
        "binary": {
          "type": "boolean",
          "description": "If true, this operation cannot have requestSchema or requestSample\nAnd the request body will be passed as binary with its mime type\nunless you define an explicit Content-Type header"
        },
        "deprecated": {
          "type": "boolean",
          "description": "If true, `@deprecated` will be added to the field definition"
        }
      },
      "required": [
        "field",
        "type",
        "path"
      ]
    },
    "JsonSchemaPubSubOperation": {
      "additionalProperties": false,
      "type": "object",
      "title": "JsonSchemaPubSubOperation",
      "properties": {
        "field": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "type": {
          "type": "string",
          "enum": [
            "Query",
            "Mutation",
            "Subscription"
          ],
          "description": "Allowed values: Query, Mutation, Subscription"
        },
        "requestSchema": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        },
        "requestSample": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        },
        "requestTypeName": {
          "type": "string"
        },
        "requestBaseBody": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "This body will be merged with the request body sent with\nthe underlying HTTP request"
        },
        "responseSchema": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        },
        "responseSample": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        },
        "responseTypeName": {
          "type": "string"
        },
        "argTypeMap": {
          "type": "object",
          "properties": {}
        },
        "pubsubTopic": {
          "type": "string"
        },
        "deprecated": {
          "type": "boolean",
          "description": "If true, `@deprecated` will be added to the field definition"
        }
      },
      "required": [
        "field",
        "type",
        "pubsubTopic"
      ]
    },
    "MongooseHandler": {
      "additionalProperties": false,
      "type": "object",
      "title": "MongooseHandler",
      "properties": {
        "connectionString": {
          "type": "string"
        },
        "models": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/MongooseModel"
          },
          "additionalItems": false
        },
        "discriminators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/MongooseModel"
          },
          "additionalItems": false
        }
      }
    },
    "MongooseModel": {
      "additionalProperties": false,
      "type": "object",
      "title": "MongooseModel",
      "properties": {
        "name": {
          "type": "string"
        },
        "path": {
          "type": "string"
        },
        "options": {
          "$ref": "#/definitions/ComposeWithMongooseOpts"
        }
      },
      "required": [
        "name",
        "path"
      ]
    },
    "ComposeWithMongooseOpts": {
      "additionalProperties": false,
      "type": "object",
      "title": "ComposeWithMongooseOpts",
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "fields": {
          "$ref": "#/definitions/ComposeWithMongooseFieldsOpts"
        },
        "inputType": {
          "$ref": "#/definitions/ComposeMongooseInputType"
        },
        "resolvers": {
          "$ref": "#/definitions/TypeConverterResolversOpts"
        }
      }
    },
    "ComposeMongooseInputType": {
      "additionalProperties": false,
      "type": "object",
      "title": "ComposeMongooseInputType",
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "fields": {
          "$ref": "#/definitions/ComposeWithMongooseFieldsOpts"
        },
        "resolvers": {
          "$ref": "#/definitions/TypeConverterResolversOpts"
        }
      }
    },
    "ComposeWithMongooseFieldsOpts": {
      "additionalProperties": false,
      "type": "object",
      "title": "ComposeWithMongooseFieldsOpts",
      "properties": {
        "only": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false
        },
        "remove": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false
        },
        "required": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false
        }
      }
    },
    "TypeConverterResolversOpts": {
      "additionalProperties": false,
      "type": "object",
      "title": "TypeConverterResolversOpts",
      "properties": {
        "findById": {
          "description": "Any of: Boolean, ComposeWithMongooseResolverOpts",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/ComposeWithMongooseResolverOpts"
            }
          ]
        },
        "findByIds": {
          "description": "Any of: Boolean, ComposeWithMongooseResolverOpts",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/ComposeWithMongooseResolverOpts"
            }
          ]
        },
        "findOne": {
          "description": "Any of: Boolean, ComposeWithMongooseResolverOpts",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/ComposeWithMongooseResolverOpts"
            }
          ]
        },
        "findMany": {
          "description": "Any of: Boolean, ComposeWithMongooseResolverOpts",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/ComposeWithMongooseResolverOpts"
            }
          ]
        },
        "updateById": {
          "description": "Any of: Boolean, ComposeWithMongooseResolverOpts",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/ComposeWithMongooseResolverOpts"
            }
          ]
        },
        "updateOne": {
          "description": "Any of: Boolean, ComposeWithMongooseResolverOpts",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/ComposeWithMongooseResolverOpts"
            }
          ]
        },
        "updateMany": {
          "description": "Any of: Boolean, ComposeWithMongooseResolverOpts",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/ComposeWithMongooseResolverOpts"
            }
          ]
        },
        "removeById": {
          "description": "Any of: Boolean, ComposeWithMongooseResolverOpts",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/ComposeWithMongooseResolverOpts"
            }
          ]
        },
        "removeOne": {
          "description": "Any of: Boolean, ComposeWithMongooseResolverOpts",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/ComposeWithMongooseResolverOpts"
            }
          ]
        },
        "removeMany": {
          "description": "Any of: Boolean, ComposeWithMongooseResolverOpts",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/ComposeWithMongooseResolverOpts"
            }
          ]
        },
        "createOne": {
          "description": "Any of: Boolean, ComposeWithMongooseResolverOpts",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/ComposeWithMongooseResolverOpts"
            }
          ]
        },
        "createMany": {
          "description": "Any of: Boolean, ComposeWithMongooseResolverOpts",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/ComposeWithMongooseResolverOpts"
            }
          ]
        },
        "count": {
          "description": "Any of: Boolean, ComposeWithMongooseResolverOpts",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/ComposeWithMongooseResolverOpts"
            }
          ]
        },
        "connection": {
          "description": "Any of: Boolean, JSON",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "object",
              "properties": {}
            }
          ]
        },
        "pagination": {
          "description": "Any of: Boolean, PaginationResolverOpts",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/PaginationResolverOpts"
            }
          ]
        }
      }
    },
    "ComposeWithMongooseResolverOpts": {
      "additionalProperties": false,
      "type": "object",
      "title": "ComposeWithMongooseResolverOpts",
      "properties": {
        "filter": {
          "$ref": "#/definitions/FilterHelperArgsOpts"
        },
        "sort": {
          "$ref": "#/definitions/SortHelperArgsOpts"
        },
        "limit": {
          "$ref": "#/definitions/LimitHelperArgsOpts"
        },
        "record": {
          "$ref": "#/definitions/RecordHelperArgsOpts"
        },
        "skip": {
          "type": "boolean"
        }
      }
    },
    "FilterHelperArgsOpts": {
      "additionalProperties": false,
      "type": "object",
      "title": "FilterHelperArgsOpts",
      "properties": {
        "filterTypeName": {
          "type": "string"
        },
        "isRequired": {
          "type": "boolean"
        },
        "onlyIndexed": {
          "type": "boolean"
        },
        "requiredFields": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false
        },
        "operators": {
          "description": "Any of: Boolean, JSON",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "object",
              "properties": {}
            }
          ]
        },
        "removeFields": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false
        }
      }
    },
    "SortHelperArgsOpts": {
      "additionalProperties": false,
      "type": "object",
      "title": "SortHelperArgsOpts",
      "properties": {
        "sortTypeName": {
          "type": "string"
        }
      }
    },
    "LimitHelperArgsOpts": {
      "additionalProperties": false,
      "type": "object",
      "title": "LimitHelperArgsOpts",
      "properties": {
        "defaultValue": {
          "type": "integer"
        }
      }
    },
    "RecordHelperArgsOpts": {
      "additionalProperties": false,
      "type": "object",
      "title": "RecordHelperArgsOpts",
      "properties": {
        "recordTypeName": {
          "type": "string"
        },
        "isRequired": {
          "type": "boolean"
        },
        "removeFields": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false
        },
        "requiredFields": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false
        }
      }
    },
    "PaginationResolverOpts": {
      "additionalProperties": false,
      "type": "object",
      "title": "PaginationResolverOpts",
      "properties": {
        "perPage": {
          "type": "integer"
        }
      }
    },
    "MySQLHandler": {
      "additionalProperties": false,
      "type": "object",
      "title": "MySQLHandler",
      "properties": {
        "host": {
          "type": "string",
          "description": "The hostname of the database you are connecting to. (Default: localhost)"
        },
        "port": {
          "type": "integer",
          "description": "The port number to connect to. (Default: 3306)"
        },
        "localAddress": {
          "type": "string",
          "description": "The source IP address to use for TCP connection"
        },
        "user": {
          "type": "string",
          "description": "The MySQL user to authenticate as"
        },
        "password": {
          "type": "string",
          "description": "The password of that MySQL user"
        },
        "database": {
          "type": "string",
          "description": "Name of the database to use for this connection"
        },
        "ssl": {
          "$ref": "#/definitions/MySQLSSLOptions",
          "description": "SSL Options for your MySQL connection"
        },
        "pool": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "Use existing `Pool` instance\nFormat: modulePath#exportName"
        },
        "tables": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false,
          "description": "Use specific tables for your schema"
        },
        "tableFields": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TableField"
          },
          "additionalItems": false,
          "description": "Use specific fields of specific tables"
        }
      }
    },
    "TableField": {
      "additionalProperties": false,
      "type": "object",
      "title": "TableField",
      "properties": {
        "table": {
          "type": "string"
        },
        "fields": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false
        }
      },
      "required": [
        "table",
        "fields"
      ]
    },
    "MySQLSSLOptions": {
      "additionalProperties": false,
      "type": "object",
      "title": "MySQLSSLOptions",
      "properties": {
        "rejectUnauthorized": {
          "type": "boolean",
          "description": "Default: true"
        },
        "ca": {
          "type": "string",
          "description": "Path to your CA"
        }
      }
    },
    "Neo4jHandler": {
      "additionalProperties": false,
      "type": "object",
      "title": "Neo4jHandler",
      "properties": {
        "endpoint": {
          "type": "string",
          "description": "URL for the Neo4j Instance e.g. neo4j://localhost"
        },
        "source": {
          "type": "string",
          "description": "Provide GraphQL Type Definitions instead of inferring"
        },
        "username": {
          "type": "string",
          "description": "Username for basic authentication"
        },
        "password": {
          "type": "string",
          "description": "Password for basic authentication"
        },
        "alwaysIncludeRelationships": {
          "type": "boolean",
          "description": "Specifies whether relationships should always be included in the type definitions as [relationship](https://grandstack.io/docs/neo4j-graphql-js.html#relationship-types) types, even if the relationships do not have properties."
        },
        "database": {
          "type": "string",
          "description": "Specifies database name"
        }
      },
      "required": [
        "endpoint",
        "username",
        "password"
      ]
    },
    "ODataHandler": {
      "additionalProperties": false,
      "type": "object",
      "title": "ODataHandler",
      "properties": {
        "endpoint": {
          "type": "string",
          "description": "Base URL for OData API"
        },
        "source": {
          "type": "string",
          "description": "Custom $metadata File or URL"
        },
        "schemaHeaders": {
          "type": "object",
          "properties": {},
          "description": "Headers to be used with the $metadata requests"
        },
        "operationHeaders": {
          "type": "object",
          "properties": {},
          "description": "Headers to be used with the operation requests"
        },
        "batch": {
          "type": "string",
          "enum": [
            "multipart",
            "json"
          ],
          "description": "Enable batching (Allowed values: multipart, json)"
        },
        "expandNavProps": {
          "type": "boolean",
          "description": "Use $expand for navigation props instead of seperate HTTP requests (Default: false)"
        }
      },
      "required": [
        "endpoint"
      ]
    },
    "OpenapiHandler": {
      "additionalProperties": false,
      "type": "object",
      "title": "OpenapiHandler",
      "properties": {
        "source": {
          "type": "string",
          "description": "A pointer to your API source (Support both JSON and YAML) - could be a local file, remote file or url endpoint"
        },
        "fallbackFormat": {
          "type": "string",
          "enum": [
            "json",
            "yaml",
            "js",
            "ts"
          ],
          "description": "Format of the files referenced from the source file, for cases content type isn't detected automatically (Allowed values: json, yaml, js, ts)"
        },
        "endpoint": {
          "type": "string",
          "description": "Specifies the URL on which all paths will be based on.\nOverrides the server object in the OAS."
        },
        "schemaHeaders": {
          "type": "object",
          "properties": {},
          "description": "If you are using a remote URL endpoint to fetch your schema, you can set headers for the HTTP request to fetch your schema."
        },
        "operationHeaders": {
          "type": "object",
          "properties": {},
          "description": "JSON object representing the Headers to add to the runtime of the API calls"
        },
        "ignoreErrorResponses": {
          "type": "boolean",
          "description": "Responses are converted to a Union type grouping all possible responses.\nApplying this will ignore all responses with status code other than 2xx, resulting in simpler response types, usualy regular object type instead of union.\nDefault: false"
        },
        "selectQueryOrMutationField": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/OASSelectQueryOrMutationFieldConfig"
          },
          "additionalItems": false,
          "description": "Allows to explicitly override the default operation (Query or Mutation) for any OAS operation"
        },
        "queryParams": {
          "type": "object",
          "properties": {},
          "description": "JSON object representing the query search parameters to add to the API calls"
        },
        "timeout": {
          "type": "integer",
          "description": "Timeout for the HTTP request in milliseconds"
        }
      },
      "required": [
        "source"
      ]
    },
    "OASSelectQueryOrMutationFieldConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "OASSelectQueryOrMutationFieldConfig",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "query",
            "mutation",
            "Query",
            "Mutation"
          ],
          "description": "Allowed values: query, mutation, Query, Mutation"
        },
        "fieldName": {
          "type": "string"
        }
      },
      "required": [
        "type",
        "fieldName"
      ]
    },
    "HivePlugin": {
      "additionalProperties": false,
      "type": "object",
      "title": "HivePlugin",
      "properties": {
        "enabled": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "If this expression is truthy, mocking would be enabled\nYou can use environment variables expression, for example: `process.env.MOCKING_ENABLED != null`"
        },
        "token": {
          "type": "string",
          "description": "Access Token"
        },
        "agent": {
          "$ref": "#/definitions/HiveAgentOptions",
          "description": "Agent Options"
        },
        "usage": {
          "$ref": "#/definitions/HiveUsageOptions",
          "description": "Collects schema usage based on operations"
        },
        "reporting": {
          "$ref": "#/definitions/HiveReportingOptions",
          "description": "Schema reporting"
        },
        "selfHosting": {
          "$ref": "#/definitions/HiveSelfHostingOptions",
          "description": "Options for self-hosting\n[See more](https://github.com/kamilkisiela/graphql-hive/tree/main/packages/libraries/client#self-hosting)"
        }
      },
      "required": [
        "token"
      ]
    },
    "HiveAgentOptions": {
      "additionalProperties": false,
      "type": "object",
      "title": "HiveAgentOptions",
      "properties": {
        "timeout": {
          "type": "integer",
          "description": "30s by default"
        },
        "maxRetries": {
          "type": "integer",
          "description": "5 by default"
        },
        "minTimeout": {
          "type": "integer",
          "description": "200 by default"
        },
        "sendInterval": {
          "type": "integer",
          "description": "Send reports in interval (defaults to 10_000ms)"
        },
        "maxSize": {
          "type": "integer",
          "description": "Max number of traces to send at once (defaults to 25)"
        }
      }
    },
    "HiveUsageOptions": {
      "additionalProperties": false,
      "type": "object",
      "title": "HiveUsageOptions",
      "properties": {
        "clientInfo": {
          "$ref": "#/definitions/HiveClientInfo",
          "description": "Extract client info from GraphQL Context"
        },
        "max": {
          "type": "integer",
          "description": "Hive uses LRU cache to store info about operations.\nThis option represents the maximum size of the cache.\nDefault: 1000"
        },
        "ttl": {
          "type": "integer",
          "description": "Hive uses LRU cache to store info about operations.\nThis option represents the maximum age of an unused operation in the cache.\nDefault: no ttl"
        },
        "exclude": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false,
          "description": "A list of operations (by name) to be ignored by Hive."
        },
        "sampleRate": {
          "type": "number",
          "description": "Sample rate to determine sampling.\n0.0 = 0% chance of being sent\n1.0 = 100% chance of being sent\nDefault: 1.0"
        },
        "processVariables": {
          "type": "boolean",
          "description": "(Experimental) Enables collecting Input fields usage based on the variables passed to the operation.\nDefault: false"
        }
      }
    },
    "HiveClientInfo": {
      "additionalProperties": false,
      "type": "object",
      "title": "HiveClientInfo",
      "properties": {
        "name": {
          "type": "string",
          "description": "Extract client name\nExample: `{context.headers['x-client-name']}`"
        },
        "version": {
          "type": "string",
          "description": "Extract client version\nExample: `{context.headers['x-client-version']}`"
        }
      }
    },
    "HiveReportingOptions": {
      "additionalProperties": false,
      "type": "object",
      "title": "HiveReportingOptions",
      "properties": {
        "author": {
          "type": "string",
          "description": "Author of current version of the schema"
        },
        "commit": {
          "type": "string",
          "description": "Commit SHA hash (or any identifier) related to the schema version"
        },
        "serviceName": {
          "type": "string"
        },
        "serviceUrl": {
          "type": "string"
        }
      },
      "required": [
        "author",
        "commit"
      ]
    },
    "HiveSelfHostingOptions": {
      "additionalProperties": false,
      "type": "object",
      "title": "HiveSelfHostingOptions",
      "properties": {
        "graphqlEndpoint": {
          "type": "string",
          "description": "Point to your own instance of GraphQL Hive API\n\nUsed by schema reporting and token info."
        },
        "applicationUrl": {
          "type": "string",
          "description": "Address of your own GraphQL Hive application\n\nUsed by token info to generate a link to the organization, project and target."
        },
        "usageEndpoint": {
          "type": "string",
          "description": "Point to your own instance of GraphQL Hive Usage API\n\nUsed by usage reporting."
        }
      },
      "required": [
        "graphqlEndpoint",
        "applicationUrl"
      ]
    },
    "HTTPCachePlugin": {
      "additionalProperties": false,
      "type": "object",
      "title": "HTTPCachePlugin",
      "properties": {
        "matches": {
          "type": "array",
          "items": {
            "description": "Any of: String, URLPatternObj",
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/definitions/URLPatternObj"
              }
            ]
          },
          "additionalItems": false,
          "description": "If the following patterns match the request URL, the response will be cached. (Any of: String, URLPatternObj)"
        },
        "ignores": {
          "type": "array",
          "items": {
            "description": "Any of: String, URLPatternObj",
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/definitions/URLPatternObj"
              }
            ]
          },
          "additionalItems": false,
          "description": "If the following patterns match the request URL, the response will not be cached. (Any of: String, URLPatternObj)"
        }
      }
    },
    "URLPatternObj": {
      "additionalProperties": false,
      "type": "object",
      "title": "URLPatternObj",
      "properties": {
        "protocol": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "hostname": {
          "type": "string"
        },
        "port": {
          "type": "string"
        },
        "pathname": {
          "type": "string"
        },
        "search": {
          "type": "string"
        },
        "hash": {
          "type": "string"
        },
        "baseURL": {
          "type": "string"
        }
      }
    },
    "HTTPDetailsExtensionsConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "HTTPDetailsExtensionsConfig",
      "properties": {
        "if": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        }
      }
    },
    "LiveQueryConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "LiveQueryConfig",
      "properties": {
        "invalidations": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/LiveQueryInvalidation"
          },
          "additionalItems": false,
          "description": "Invalidate a query or queries when a specific operation is done without an error"
        },
        "resourceIdentifier": {
          "type": "string",
          "description": "Custom strategy for building resources identifiers\nBy default resource identifiers are built by concatenating the Typename with the id separated by a color (`User:1`).\n\nThis may be useful if you are using a relay compliant schema and the Typename information is not required for building a unique topic.\n\nDefault: \"{typename}:{id}\""
        },
        "includeIdentifierExtension": {
          "type": "boolean",
          "description": "Whether the extensions should include a list of all resource identifiers for the latest operation result.\nAny of those can be used for invalidating and re-scheduling the operation execution.\n\nThis is mainly useful for discovering and learning what kind of topics a given query will subscribe to.\nThe default value is `true` if `DEBUG` environment variable is set"
        },
        "idFieldName": {
          "type": "string",
          "description": "Identifier unique field\n\nDefault: \"id\""
        },
        "indexBy": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/LiveQueryIndexBy"
          },
          "additionalItems": false,
          "description": "Specify which fields should be indexed for specific invalidations."
        }
      }
    },
    "LiveQueryInvalidation": {
      "additionalProperties": false,
      "type": "object",
      "title": "LiveQueryInvalidation",
      "properties": {
        "field": {
          "type": "string",
          "description": "Path to the operation that could effect it. In a form: Mutation.something. Note that wildcard is not supported in this field."
        },
        "invalidate": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false
        }
      },
      "required": [
        "field",
        "invalidate"
      ]
    },
    "LiveQueryIndexBy": {
      "additionalProperties": false,
      "type": "object",
      "title": "LiveQueryIndexBy",
      "properties": {
        "field": {
          "type": "string"
        },
        "args": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false
        }
      },
      "required": [
        "field",
        "args"
      ]
    },
    "MockingConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "MockingConfig",
      "properties": {
        "if": {
          "type": "boolean",
          "description": "If this expression is truthy, mocking would be enabled\nYou can use environment variables expression, for example: `process.env.MOCKING_ENABLED != null`"
        },
        "preserveResolvers": {
          "type": "boolean",
          "description": "Do not mock any other resolvers other than defined in `mocks`.\nFor example, you can enable this if you don't want to mock entire schema but partially."
        },
        "mocks": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/MockingFieldConfig"
          },
          "additionalItems": false,
          "description": "Mock configurations"
        },
        "initializeStore": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "The path to the code runs before the store is attached to the schema"
        }
      }
    },
    "MockingFieldConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "MockingFieldConfig",
      "properties": {
        "apply": {
          "type": "string",
          "description": "Resolver path\nExample: User.firstName"
        },
        "if": {
          "type": "boolean",
          "description": "If this expression is truthy, mocking would be enabled\nYou can use environment variables expression, for example: `${MOCKING_ENABLED}`"
        },
        "faker": {
          "type": "string",
          "description": "Faker.js expression or function\nRead more (https://github.com/marak/Faker.js/#fakerfake)\nExample:\nfaker: `name.firstName`\nfaker: `{{ name.firstName }} {{ name.lastName }}`"
        },
        "custom": {
          "type": "string",
          "description": "Custom mocking\nIt can be a module or json file.\nBoth \"moduleName#exportName\" or only \"moduleName\" would work"
        },
        "length": {
          "type": "integer",
          "description": "Length of the mock list\nFor the list types `[ObjectType]`, how many `ObjectType` you want to return?\ndefault: 2"
        },
        "store": {
          "$ref": "#/definitions/GetFromMockStoreConfig",
          "description": "Get the data from the mock store"
        },
        "updateStore": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/UpdateMockStoreConfig"
          },
          "additionalItems": false,
          "description": "Update the data on the mock store"
        }
      },
      "required": [
        "apply"
      ]
    },
    "GetFromMockStoreConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "GetFromMockStoreConfig",
      "properties": {
        "type": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "fieldName": {
          "type": "string"
        }
      }
    },
    "UpdateMockStoreConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "UpdateMockStoreConfig",
      "properties": {
        "type": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "fieldName": {
          "type": "string"
        },
        "value": {
          "type": "string"
        }
      }
    },
    "NewrelicConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "NewrelicConfig",
      "properties": {
        "includeOperationDocument": {
          "type": "boolean",
          "description": "default `false`. When set to `true`, includes the GraphQL document defining the operations and fragments"
        },
        "includeExecuteVariables": {
          "type": "boolean",
          "description": "default `false`. When set to `true`, includes all the operation variables with their values"
        },
        "includeRawResult": {
          "type": "boolean",
          "description": "default: `false`. When set to `true`, includes the execution result of both delegation and execution"
        },
        "trackResolvers": {
          "type": "boolean",
          "description": "default `false`. When set to `true`, track resolvers as segments to monitor their performance"
        },
        "includeResolverArgs": {
          "type": "boolean",
          "description": "default `false`. When set to `true`, includes all the arguments passed to resolvers and delegation with their values"
        },
        "rootFieldsNaming": {
          "type": "boolean",
          "description": "default `false`. When set to `true` append the names of operation root fields to the transaction name"
        },
        "extractOperationName": {
          "type": "string",
          "description": "Allows to set a custom operation name to be used as transaction name and attribute\n`extractOperationName: {context.headers['x-operation-name']}`"
        }
      }
    },
    "OperationFieldPermissionsConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "OperationFieldPermissionsConfig",
      "properties": {
        "permissions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/OperationFieldPermission"
          },
          "additionalItems": false
        }
      }
    },
    "OperationFieldPermission": {
      "additionalProperties": false,
      "type": "object",
      "title": "OperationFieldPermission",
      "properties": {
        "if": {
          "type": "string"
        },
        "allow": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false
        }
      }
    },
    "PrometheusConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "PrometheusConfig",
      "properties": {
        "requestCount": {
          "description": "Any of: Boolean, String",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "string"
            }
          ]
        },
        "requestTotalDuration": {
          "description": "Any of: Boolean, String",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "string"
            }
          ]
        },
        "requestSummary": {
          "description": "Any of: Boolean, String",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "string"
            }
          ]
        },
        "parse": {
          "description": "Any of: Boolean, String",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "string"
            }
          ]
        },
        "validate": {
          "description": "Any of: Boolean, String",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "string"
            }
          ]
        },
        "contextBuilding": {
          "description": "Any of: Boolean, String",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "string"
            }
          ]
        },
        "execute": {
          "description": "Any of: Boolean, String",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "string"
            }
          ]
        },
        "errors": {
          "description": "Any of: Boolean, String",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "string"
            }
          ]
        },
        "deprecatedFields": {
          "description": "Any of: Boolean, String",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "string"
            }
          ]
        },
        "skipIntrospection": {
          "type": "boolean"
        },
        "registry": {
          "type": "string"
        },
        "delegation": {
          "description": "Any of: Boolean, String",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "string"
            }
          ]
        },
        "fetch": {
          "description": "Any of: Boolean, String",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "string"
            }
          ]
        },
        "fetchRequestHeaders": {
          "type": "boolean"
        },
        "fetchResponseHeaders": {
          "type": "boolean"
        },
        "http": {
          "description": "Any of: Boolean, String",
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "string"
            }
          ]
        },
        "httpRequestHeaders": {
          "type": "boolean"
        },
        "httpResponseHeaders": {
          "type": "boolean"
        },
        "endpoint": {
          "type": "string",
          "description": "The path to the metrics endpoint\ndefault: `/metrics`"
        }
      }
    },
    "RateLimitPluginConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "RateLimitPluginConfig",
      "properties": {
        "config": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/RateLimitTransformConfig"
          },
          "additionalItems": false
        }
      },
      "required": [
        "config"
      ]
    },
    "ResponseCacheConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "ResponseCacheConfig",
      "properties": {
        "ttl": {
          "type": "number",
          "description": "Maximum age in ms. Defaults to `Infinity`. Set it to 0 for disabling the global TTL."
        },
        "ttlPerCoordinate": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ResponseCacheTTLConfig"
          },
          "additionalItems": false,
          "description": "Overwrite the ttl for query operations whose selection contains a specific schema coordinate (e.g. Query.users).\nUseful if the selection of a specific field should reduce the TTL of the query operation."
        },
        "ignoredTypes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false,
          "description": "Skip caching of following the types."
        },
        "idFields": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false,
          "description": "List of fields that are used to identify the entity."
        },
        "invalidateViaMutation": {
          "type": "boolean",
          "description": "Whether the mutation execution result should be used for invalidating resources.\nDefaults to `true`"
        },
        "includeExtensionMetadata": {
          "type": "boolean",
          "description": "Include extension values that provide useful information, such as whether the cache was hit or which resources a mutation invalidated."
        },
        "sessionId": {
          "type": "string",
          "description": "Allows to cache responses based on the resolved session id.\nReturn a unique value for each session.\nCreates a global session by default.\nExample;\n```yaml\nsessionId: \"{context.headers.userId}\"\n```"
        },
        "if": {
          "type": "string",
          "description": "Specify whether the cache should be used based on the context.\n```yaml\nif: \"context.headers.userId != null\"\n```"
        },
        "cacheKey": {
          "type": "string",
          "description": "Customize the behavior how the response cache key is computed from the documentString, variableValues, contextValue and sessionId.\nIf the given string is interpolated as empty, default behavior is used.\nExample;\n```yaml\n# Cache by specific value\ncacheKey: \"{variableValues.userId}\"\n\n# Cache by documentString\ncacheKey: \"{documentString}\"\n\n# Cache by operationName\ncacheKey: \"{operationName}\"\n\n# Cache by some header value\ncacheKey: \"{contextValue.headers.authorization}\"\n\n# Or combine two of each\ncacheKey: \"{contextValue.headers.authorization}-{operationName}\"\n```"
        },
        "shouldCacheResult": {
          "type": "string",
          "description": "Checks if the result should be cached.\n```yaml\nshouldCacheResult: \"result.errors.length > 0\"\n```"
        }
      }
    },
    "ResponseCacheTTLConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "ResponseCacheTTLConfig",
      "properties": {
        "coordinate": {
          "type": "string"
        },
        "ttl": {
          "type": "number"
        }
      },
      "required": [
        "coordinate",
        "ttl"
      ]
    },
    "SnapshotPluginConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "SnapshotPluginConfig",
      "properties": {
        "if": {
          "description": "Expression for when to activate this extension.\nValue can be a valid JS expression string or a boolean (Any of: String, Boolean)",
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "boolean"
            }
          ]
        },
        "apply": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false,
          "description": "HTTP URL pattern to be applied\nFor example;\n  apply:\n      - http://my-remote-api.com/* \\<- * will apply this extension to all paths of remote API"
        },
        "outputDir": {
          "type": "string",
          "description": "Path to the directory of the generated snapshot files"
        }
      },
      "required": [
        "apply",
        "outputDir"
      ]
    },
    "StatsdPlugin": {
      "additionalProperties": false,
      "type": "object",
      "title": "StatsdPlugin",
      "properties": {
        "skipIntrospection": {
          "type": "boolean",
          "description": "If you wish to disable introspection for logging (default: false)"
        },
        "prefix": {
          "type": "string",
          "description": "prefix.operations.count (default: graphql)"
        },
        "client": {
          "$ref": "#/definitions/StatsdClientConfiguration",
          "description": "Client Configuration"
        }
      }
    },
    "StatsdClientConfiguration": {
      "additionalProperties": false,
      "type": "object",
      "title": "StatsdClientConfiguration",
      "properties": {
        "bufferFlushInterval": {
          "type": "integer"
        },
        "bufferHolder": {
          "$ref": "#/definitions/StatsdClientBufferHolder"
        },
        "cacheDns": {
          "type": "boolean"
        },
        "cacheDnsTtl": {
          "type": "integer"
        },
        "globalTags": {
          "type": "object",
          "properties": {}
        },
        "globalize": {
          "type": "boolean"
        },
        "host": {
          "type": "string"
        },
        "isChild": {
          "type": "boolean"
        },
        "maxBufferSize": {
          "type": "integer"
        },
        "mock": {
          "type": "boolean"
        },
        "path": {
          "type": "string"
        },
        "port": {
          "type": "integer"
        },
        "protocol": {
          "type": "string",
          "enum": [
            "tcp",
            "udp",
            "uds",
            "stream"
          ],
          "description": "Allowed values: tcp, udp, uds, stream"
        },
        "sampleRate": {
          "type": "number"
        },
        "suffix": {
          "type": "string"
        },
        "telegraf": {
          "type": "boolean"
        },
        "useDefaultRoute": {
          "type": "boolean"
        },
        "tagPrefix": {
          "type": "string"
        },
        "tagSeperator": {
          "type": "string"
        },
        "tcpGracefulErrorHandling": {
          "type": "boolean"
        },
        "tcpGracefulRestartRateLimit": {
          "type": "integer"
        },
        "udsGracefulErrorHandling": {
          "type": "boolean"
        },
        "udsGracefulRestartRateLimit": {
          "type": "integer"
        },
        "closingFlushInterval": {
          "type": "integer"
        }
      }
    },
    "StatsdClientBufferHolder": {
      "additionalProperties": false,
      "type": "object",
      "title": "StatsdClientBufferHolder",
      "properties": {
        "buffer": {
          "type": "string"
        }
      },
      "required": [
        "buffer"
      ]
    },
    "PostGraphileHandler": {
      "additionalProperties": false,
      "type": "object",
      "title": "PostGraphileHandler",
      "properties": {
        "connectionString": {
          "type": "string",
          "description": "A connection string to your Postgres database"
        },
        "schemaName": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false,
          "description": "An array of strings which specifies the PostgreSQL schemas that PostGraphile will use to create a GraphQL schema. The default schema is the public schema."
        },
        "pool": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "Connection Pool instance or settings or you can provide the path of a code file that exports any of those"
        },
        "appendPlugins": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false,
          "description": "Extra Postgraphile Plugins to append"
        },
        "skipPlugins": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false,
          "description": "Postgraphile Plugins to skip (e.g. \"graphile-build#NodePlugin\")"
        },
        "options": {
          "description": "Extra Postgraphile options that will be added to the postgraphile constructor. It can either be an object or a string pointing to the object's path (e.g. \"./my-config#options\"). See the [postgraphile docs](https://www.graphile.org/postgraphile/usage-library/) for more information. (Any of: JSON, String)",
          "anyOf": [
            {
              "type": "object",
              "properties": {}
            },
            {
              "type": "string"
            }
          ]
        },
        "subscriptions": {
          "type": "boolean",
          "description": "Enable GraphQL websocket transport support for subscriptions (default: true)"
        },
        "live": {
          "type": "boolean",
          "description": "Enables live-query support via GraphQL subscriptions (sends updated payload any time nested collections/records change) (default: true)"
        },
        "contextOptions": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "A file that exports a function which takes context as a paramter and returns postgraphile context options (e.g. \"./my-function#pgSettings\"). See the [postgraphile docs](https://www.graphile.org/postgraphile/usage-schema/) for more information."
        }
      }
    },
    "RAMLHandler": {
      "additionalProperties": false,
      "type": "object",
      "title": "RAMLHandler",
      "properties": {
        "source": {
          "type": "string"
        },
        "endpoint": {
          "type": "string"
        },
        "schemaHeaders": {
          "type": "object",
          "properties": {}
        },
        "operationHeaders": {
          "type": "object",
          "properties": {}
        },
        "ignoreErrorResponses": {
          "type": "boolean"
        },
        "selectQueryOrMutationField": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/RAMLSelectQueryOrMutationFieldConfig"
          },
          "additionalItems": false
        },
        "queryParams": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        },
        "timeout": {
          "type": "integer",
          "description": "Timeout for the HTTP request in milliseconds"
        }
      },
      "required": [
        "source"
      ]
    },
    "RAMLSelectQueryOrMutationFieldConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "RAMLSelectQueryOrMutationFieldConfig",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "query",
            "mutation",
            "Query",
            "Mutation"
          ],
          "description": "Allowed values: query, mutation, Query, Mutation"
        },
        "fieldName": {
          "type": "string"
        }
      },
      "required": [
        "type",
        "fieldName"
      ]
    },
    "SoapHandler": {
      "additionalProperties": false,
      "type": "object",
      "title": "SoapHandler",
      "properties": {
        "source": {
          "type": "string",
          "description": "A url to your WSDL or generated SDL with annotations"
        },
        "schemaHeaders": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "JSON object representing the Headers to add to the runtime of the API calls only for schema introspection\nYou can also provide `.js` or `.ts` file path that exports schemaHeaders as an object"
        },
        "operationHeaders": {
          "type": "object",
          "properties": {},
          "description": "JSON object representing the Headers to add to the runtime of the API calls only for operation during runtime"
        }
      },
      "required": [
        "source"
      ]
    },
    "SupergraphHandler": {
      "additionalProperties": false,
      "type": "object",
      "title": "SupergraphHandler",
      "properties": {
        "source": {
          "type": "string",
          "description": "A file path to your Supergraph Schema\nIf you provide a path to a code file(js or ts),\nother options will be ignored and the schema exported from the file will be used directly."
        },
        "schemaHeaders": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        },
        "operationHeaders": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        },
        "batch": {
          "type": "boolean"
        }
      },
      "required": [
        "source"
      ]
    },
    "ThriftHandler": {
      "additionalProperties": false,
      "type": "object",
      "title": "ThriftHandler",
      "properties": {
        "hostName": {
          "type": "string",
          "description": "The name of the host to connect to."
        },
        "port": {
          "type": "integer",
          "description": "The port number to attach to on the host."
        },
        "path": {
          "type": "string",
          "description": "The path on which the Thrift service is listening. Defaults to '/thrift'."
        },
        "https": {
          "type": "boolean",
          "description": "Boolean value indicating whether to use https. Defaults to false."
        },
        "protocol": {
          "type": "string",
          "enum": [
            "binary",
            "compact",
            "json"
          ],
          "description": "Name of the Thrift protocol type to use. Defaults to 'binary'. (Allowed values: binary, compact, json)"
        },
        "serviceName": {
          "type": "string",
          "description": "The name of your service. Used for logging."
        },
        "operationHeaders": {
          "type": "object",
          "properties": {},
          "description": "JSON object representing the Headers to add to the runtime of the API calls"
        },
        "schemaHeaders": {
          "type": "object",
          "properties": {},
          "description": "If you are using a remote URL endpoint to fetch your schema, you can set headers for the HTTP request to fetch your schema."
        },
        "idl": {
          "type": "string",
          "description": "Path to IDL file"
        }
      },
      "required": [
        "hostName",
        "port",
        "serviceName",
        "idl"
      ]
    },
    "CacheTransformConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "CacheTransformConfig",
      "properties": {
        "field": {
          "type": "string",
          "description": "The type and field to apply cache to, you can use wild cards as well, for example: `Query.*`"
        },
        "cacheKey": {
          "type": "string",
          "description": "Cache key to use to store your resolvers responses.\nThe default is: `{typeName}-{fieldName}-{argsHash}-{fieldNamesHash}`\n\nAvailable variables:\n  - `{args.argName}` - use resolver argument\n  - `{typeName}` - use name of the type\n  - `{fieldName}` - use name of the field\n  - `{argsHash}` - a hash based on the 'args' object\n  - `{fieldNamesHash}` - a hash based on the field names selected by the client\n  - `{info}` - the GraphQLResolveInfo of the resolver\n\nAvailable interpolations:\n  - `{format|date}` - returns the current date with a specific format"
        },
        "invalidate": {
          "$ref": "#/definitions/CacheInvalidateConfig",
          "description": "Invalidation rules"
        }
      },
      "required": [
        "field"
      ]
    },
    "CacheInvalidateConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "CacheInvalidateConfig",
      "properties": {
        "effectingOperations": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CacheEffectingOperationConfig"
          },
          "additionalItems": false,
          "description": "Invalidate the cache when a specific operation is done without an error"
        },
        "ttl": {
          "type": "integer",
          "description": "Specified in seconds, the time-to-live (TTL) value limits the lifespan"
        }
      }
    },
    "CacheEffectingOperationConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "CacheEffectingOperationConfig",
      "properties": {
        "operation": {
          "type": "string",
          "description": "Path to the operation that could effect it. In a form: Mutation.something. Note that wildcard is not supported in this field."
        },
        "matchKey": {
          "type": "string",
          "description": "Cache key to invalidate on successful resolver (no error), see `cacheKey` for list of available options in this field."
        }
      },
      "required": [
        "operation"
      ]
    },
    "EncapsulateTransformObject": {
      "additionalProperties": false,
      "type": "object",
      "title": "EncapsulateTransformObject",
      "properties": {
        "name": {
          "type": "string",
          "description": "Optional, name to use for grouping under the root types. If not specific, the API name is used."
        },
        "applyTo": {
          "$ref": "#/definitions/EncapsulateTransformApplyTo",
          "description": "Allow you to choose which root operations you would like to apply. By default, it's applied to all root types."
        }
      }
    },
    "EncapsulateTransformApplyTo": {
      "additionalProperties": false,
      "type": "object",
      "title": "EncapsulateTransformApplyTo",
      "properties": {
        "query": {
          "type": "boolean"
        },
        "mutation": {
          "type": "boolean"
        },
        "subscription": {
          "type": "boolean"
        }
      }
    },
    "ExtendTransform": {
      "additionalProperties": false,
      "type": "object",
      "title": "ExtendTransform",
      "properties": {
        "typeDefs": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        },
        "resolvers": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        }
      }
    },
    "FederationTransform": {
      "additionalProperties": false,
      "type": "object",
      "title": "FederationTransform",
      "properties": {
        "types": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/FederationTransformType"
          },
          "additionalItems": false
        },
        "version": {
          "type": "string",
          "description": "Version of the federation spec\nDefault: v2.0"
        }
      }
    },
    "FederationTransformType": {
      "additionalProperties": false,
      "type": "object",
      "title": "FederationTransformType",
      "properties": {
        "name": {
          "type": "string"
        },
        "config": {
          "$ref": "#/definitions/FederationObjectConfig"
        }
      },
      "required": [
        "name"
      ]
    },
    "FederationObjectConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "FederationObjectConfig",
      "properties": {
        "key": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/FederationObjectKeyConfig"
          },
          "additionalItems": false
        },
        "shareable": {
          "type": "boolean"
        },
        "extends": {
          "type": "boolean"
        },
        "fields": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/FederationField"
          },
          "additionalItems": false
        },
        "resolveReference": {
          "description": "Any of: String, ResolveReferenceObject",
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/ResolveReferenceObject"
            }
          ]
        }
      }
    },
    "FederationObjectKeyConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "FederationObjectKeyConfig",
      "properties": {
        "fields": {
          "type": "string"
        }
      }
    },
    "ResolveReferenceObject": {
      "additionalProperties": false,
      "type": "object",
      "title": "ResolveReferenceObject",
      "properties": {
        "queryFieldName": {
          "type": "string",
          "description": "Name of root field name that resolves the reference"
        },
        "args": {
          "type": "object",
          "properties": {},
          "description": "You need configure the arguments for that field;\n```yaml\nargs:\n  someArg: \"{root.someKeyValue}\"\n```"
        }
      },
      "required": [
        "queryFieldName"
      ]
    },
    "FederationField": {
      "additionalProperties": false,
      "type": "object",
      "title": "FederationField",
      "properties": {
        "name": {
          "type": "string"
        },
        "config": {
          "$ref": "#/definitions/FederationFieldConfig"
        }
      },
      "required": [
        "name",
        "config"
      ]
    },
    "FederationFieldConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "FederationFieldConfig",
      "properties": {
        "external": {
          "type": "boolean"
        },
        "provides": {
          "$ref": "#/definitions/FederationFieldProvidesConfig"
        },
        "requires": {
          "$ref": "#/definitions/FederationFieldRequiresConfig"
        },
        "tag": {
          "$ref": "#/definitions/FederationFieldTagConfig"
        },
        "inaccessible": {
          "type": "boolean"
        },
        "override": {
          "$ref": "#/definitions/FederationFieldOverrideConfig"
        }
      }
    },
    "FederationFieldProvidesConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "FederationFieldProvidesConfig",
      "properties": {
        "fields": {
          "type": "string"
        }
      }
    },
    "FederationFieldRequiresConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "FederationFieldRequiresConfig",
      "properties": {
        "fields": {
          "type": "string"
        }
      }
    },
    "FederationFieldTagConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "FederationFieldTagConfig",
      "properties": {
        "name": {
          "type": "string"
        }
      }
    },
    "FederationFieldOverrideConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "FederationFieldOverrideConfig",
      "properties": {
        "from": {
          "type": "string"
        }
      }
    },
    "FilterSchemaTransform": {
      "additionalProperties": false,
      "type": "object",
      "title": "FilterSchemaTransform",
      "properties": {
        "mode": {
          "type": "string",
          "enum": [
            "bare",
            "wrap"
          ],
          "description": "Specify to apply filter-schema transforms to bare schema or by wrapping original schema (Allowed values: bare, wrap)"
        },
        "filters": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false,
          "description": "Array of filter rules"
        },
        "filterDeprecatedTypes": {
          "type": "boolean",
          "description": "Filter deprecated types"
        },
        "filterDeprecatedFields": {
          "type": "boolean",
          "description": "Filter deprecated fields"
        }
      },
      "required": [
        "filters"
      ]
    },
    "HoistFieldTransformConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "HoistFieldTransformConfig",
      "properties": {
        "typeName": {
          "type": "string",
          "description": "Type name that defines where field should be hoisted to"
        },
        "pathConfig": {
          "type": "array",
          "items": {
            "description": "Any of: String, HoistFieldTransformFieldPathConfigObject",
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/definitions/HoistFieldTransformFieldPathConfigObject"
              }
            ]
          },
          "additionalItems": false,
          "description": "Array of fieldsNames to reach the field to be hoisted (Any of: String, HoistFieldTransformFieldPathConfigObject)"
        },
        "newFieldName": {
          "type": "string",
          "description": "Name the hoisted field should have when hoisted to the type specified in typeName"
        },
        "alias": {
          "type": "string"
        },
        "filterArgsInPath": {
          "type": "boolean",
          "description": "Defines if args in path are filtered (default = false)"
        }
      },
      "required": [
        "typeName",
        "pathConfig",
        "newFieldName"
      ]
    },
    "HoistFieldTransformFieldPathConfigObject": {
      "additionalProperties": false,
      "type": "object",
      "title": "HoistFieldTransformFieldPathConfigObject",
      "properties": {
        "fieldName": {
          "type": "string",
          "description": "Field name"
        },
        "filterArgs": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false,
          "description": "Match fields based on argument, needs to implement `(arg: GraphQLArgument) => boolean`;"
        }
      },
      "required": [
        "fieldName",
        "filterArgs"
      ]
    },
    "NamingConventionTransformConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "NamingConventionTransformConfig",
      "properties": {
        "mode": {
          "type": "string",
          "enum": [
            "bare",
            "wrap"
          ],
          "description": "Specify to apply naming-convention transforms to bare schema or by wrapping original schema (Allowed values: bare, wrap)"
        },
        "typeNames": {
          "type": "string",
          "enum": [
            "camelCase",
            "capitalCase",
            "constantCase",
            "dotCase",
            "headerCase",
            "noCase",
            "paramCase",
            "pascalCase",
            "pathCase",
            "sentenceCase",
            "snakeCase",
            "upperCase",
            "lowerCase"
          ],
          "description": "Allowed values: camelCase, capitalCase, constantCase, dotCase, headerCase, noCase, paramCase, pascalCase, pathCase, sentenceCase, snakeCase, upperCase, lowerCase"
        },
        "fieldNames": {
          "type": "string",
          "enum": [
            "camelCase",
            "capitalCase",
            "constantCase",
            "dotCase",
            "headerCase",
            "noCase",
            "paramCase",
            "pascalCase",
            "pathCase",
            "sentenceCase",
            "snakeCase",
            "upperCase",
            "lowerCase"
          ],
          "description": "Allowed values: camelCase, capitalCase, constantCase, dotCase, headerCase, noCase, paramCase, pascalCase, pathCase, sentenceCase, snakeCase, upperCase, lowerCase"
        },
        "enumValues": {
          "type": "string",
          "enum": [
            "camelCase",
            "capitalCase",
            "constantCase",
            "dotCase",
            "headerCase",
            "noCase",
            "paramCase",
            "pascalCase",
            "pathCase",
            "sentenceCase",
            "snakeCase",
            "upperCase",
            "lowerCase"
          ],
          "description": "Allowed values: camelCase, capitalCase, constantCase, dotCase, headerCase, noCase, paramCase, pascalCase, pathCase, sentenceCase, snakeCase, upperCase, lowerCase"
        },
        "fieldArgumentNames": {
          "type": "string",
          "enum": [
            "camelCase",
            "capitalCase",
            "constantCase",
            "dotCase",
            "headerCase",
            "noCase",
            "paramCase",
            "pascalCase",
            "pathCase",
            "sentenceCase",
            "snakeCase",
            "upperCase",
            "lowerCase"
          ],
          "description": "Allowed values: camelCase, capitalCase, constantCase, dotCase, headerCase, noCase, paramCase, pascalCase, pathCase, sentenceCase, snakeCase, upperCase, lowerCase"
        }
      }
    },
    "PrefixTransformConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "PrefixTransformConfig",
      "properties": {
        "mode": {
          "type": "string",
          "enum": [
            "bare",
            "wrap"
          ],
          "description": "Specify to apply prefix transform to bare schema or by wrapping original schema (Allowed values: bare, wrap)"
        },
        "value": {
          "type": "string",
          "description": "The prefix to apply to the schema types. By default it's the API name."
        },
        "ignore": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false,
          "description": "List of ignored types"
        },
        "includeRootOperations": {
          "type": "boolean",
          "description": "Changes root types and changes the field names (default: false)"
        },
        "includeTypes": {
          "type": "boolean",
          "description": "Changes types (default: true)"
        }
      }
    },
    "PruneTransformConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "PruneTransformConfig",
      "properties": {
        "skipPruning": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false,
          "description": "Types to skip pruning"
        },
        "skipEmptyCompositeTypePruning": {
          "type": "boolean",
          "description": "Set to `true` to skip pruning object types or interfaces with no fields"
        },
        "skipUnimplementedInterfacesPruning": {
          "type": "boolean",
          "description": "Set to `true` to skip pruning interfaces that are not implemented by any other types"
        },
        "skipEmptyUnionPruning": {
          "type": "boolean",
          "description": "Set to `true` to skip pruning empty unions"
        },
        "skipUnusedTypesPruning": {
          "type": "boolean",
          "description": "Set to `true` to skip pruning unused types"
        }
      }
    },
    "RateLimitTransformConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "RateLimitTransformConfig",
      "properties": {
        "type": {
          "type": "string",
          "description": "The type name that the following field belongs to"
        },
        "field": {
          "type": "string",
          "description": "The field of the type that the rate limit is applied to"
        },
        "max": {
          "type": "integer",
          "description": "The maximum number of requests that can be made in a given time period"
        },
        "ttl": {
          "type": "integer",
          "description": "The time period in which the rate limit is applied"
        },
        "identifier": {
          "type": "string",
          "description": "The identifier expression that determines the identity of the request (e.g. `{context.req.socket.remoteAddress}`)"
        }
      },
      "required": [
        "type",
        "field",
        "max",
        "ttl",
        "identifier"
      ]
    },
    "RenameTransform": {
      "additionalProperties": false,
      "type": "object",
      "title": "RenameTransform",
      "properties": {
        "mode": {
          "type": "string",
          "enum": [
            "bare",
            "wrap"
          ],
          "description": "Specify to apply rename transforms to bare schema or by wrapping original schema (Allowed values: bare, wrap)"
        },
        "renames": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/RenameTransformObject"
          },
          "additionalItems": false,
          "description": "Array of rename rules"
        }
      },
      "required": [
        "renames"
      ]
    },
    "RenameTransformObject": {
      "additionalProperties": false,
      "type": "object",
      "title": "RenameTransformObject",
      "properties": {
        "from": {
          "$ref": "#/definitions/RenameConfig"
        },
        "to": {
          "$ref": "#/definitions/RenameConfig"
        },
        "useRegExpForTypes": {
          "type": "boolean",
          "description": "Use Regular Expression for type names"
        },
        "useRegExpForFields": {
          "type": "boolean",
          "description": "Use Regular Expression for field names"
        },
        "useRegExpForArguments": {
          "type": "boolean",
          "description": "Use Regular Expression for field names"
        },
        "regExpFlags": {
          "type": "string",
          "description": "Flags to use in the Regular Expression"
        },
        "includeDefaults": {
          "type": "boolean",
          "description": "Flag to indicate whether certain default types (built-ins, scalars and other types specified an exclusion list) should be renamed or not.\n\n@default: false"
        }
      },
      "required": [
        "from",
        "to"
      ]
    },
    "RenameConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "RenameConfig",
      "properties": {
        "type": {
          "type": "string"
        },
        "field": {
          "type": "string"
        },
        "argument": {
          "type": "string"
        }
      }
    },
    "ReplaceFieldTransformConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "ReplaceFieldTransformConfig",
      "properties": {
        "typeDefs": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "Additional type definition to used to replace field types"
        },
        "replacements": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ReplaceFieldTransformObject"
          },
          "additionalItems": false,
          "description": "Array of rules to replace fields"
        }
      },
      "required": [
        "replacements"
      ]
    },
    "ReplaceFieldTransformObject": {
      "additionalProperties": false,
      "type": "object",
      "title": "ReplaceFieldTransformObject",
      "properties": {
        "from": {
          "$ref": "#/definitions/ReplaceFieldConfig"
        },
        "to": {
          "$ref": "#/definitions/ReplaceFieldConfig"
        },
        "scope": {
          "type": "string",
          "enum": [
            "config",
            "hoistValue"
          ],
          "description": "Allowed values: config, hoistValue"
        },
        "composer": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ]
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "from",
        "to"
      ]
    },
    "ReplaceFieldConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "ReplaceFieldConfig",
      "properties": {
        "type": {
          "type": "string"
        },
        "field": {
          "type": "string"
        }
      },
      "required": [
        "type",
        "field"
      ]
    },
    "ResolversCompositionTransform": {
      "additionalProperties": false,
      "type": "object",
      "title": "ResolversCompositionTransform",
      "properties": {
        "mode": {
          "type": "string",
          "enum": [
            "bare",
            "wrap"
          ],
          "description": "Specify to apply resolvers-composition transforms to bare schema or by wrapping original schema (Allowed values: bare, wrap)"
        },
        "compositions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ResolversCompositionTransformObject"
          },
          "additionalItems": false,
          "description": "Array of resolver/composer to apply"
        }
      },
      "required": [
        "compositions"
      ]
    },
    "ResolversCompositionTransformObject": {
      "additionalProperties": false,
      "type": "object",
      "title": "ResolversCompositionTransformObject",
      "properties": {
        "resolver": {
          "type": "string",
          "description": "The GraphQL Resolver path\nExample: Query.users"
        },
        "composer": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "Path to the composer function\nExample: ./src/auth.js#authComposer"
        }
      },
      "required": [
        "resolver",
        "composer"
      ]
    },
    "TransferSchemaTransformConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "TransferSchemaTransformConfig",
      "properties": {
        "transfers": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TransferSchemaTransformObject"
          },
          "additionalItems": false,
          "description": "Array of rules to transfer fields or args"
        }
      },
      "required": [
        "transfers"
      ]
    },
    "TransferSchemaTransformObject": {
      "additionalProperties": false,
      "type": "object",
      "title": "TransferSchemaTransformObject",
      "properties": {
        "from": {
          "type": "string"
        },
        "to": {
          "type": "string"
        },
        "action": {
          "type": "string",
          "enum": [
            "move",
            "copy"
          ],
          "description": "Allowed values: move, copy"
        }
      },
      "required": [
        "from",
        "to"
      ]
    },
    "TypeMergingConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "TypeMergingConfig",
      "properties": {
        "types": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/MergedTypeConfig"
          },
          "additionalItems": false
        },
        "queryFields": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/MergedRootFieldConfig"
          },
          "additionalItems": false,
          "description": "Denotes a root field used to query a merged type across services.\nThe marked field's name is analogous\nto the fieldName setting in\n[merged type configuration](https://www.graphql-tools.com/docs/stitch-type-merging#basic-example),\nwhile the field's arguments and return type are used to infer merge configuration.\nDirective arguments tune the merge behavior"
        },
        "additionalConfiguration": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": true
            },
            {
              "type": "string"
            },
            {
              "type": "array",
              "additionalItems": true
            }
          ],
          "description": "The path to a code file that has additional type merging configuration"
        }
      }
    },
    "MergedRootFieldConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "MergedRootFieldConfig",
      "properties": {
        "queryFieldName": {
          "type": "string"
        },
        "keyField": {
          "type": "string",
          "description": "Specifies the name of a field to pick off origin objects as the key value. When omitted, a `@key` directive must be included on the return type's definition to be built into an object key.\nhttps://www.graphql-tools.com/docs/stitch-directives-sdl#object-keys"
        },
        "keyArg": {
          "type": "string",
          "description": "Specifies which field argument receives the merge key. This may be omitted for fields with only one argument where the recipient can be inferred."
        },
        "additionalArgs": {
          "type": "string",
          "description": "Specifies a string of additional keys and values to apply to other arguments,\nformatted as `\\\"\\\"\\\" arg1: \"value\", arg2: \"value\" \\\"\\\"\\\"`."
        },
        "key": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "additionalItems": false,
          "description": "Advanced use only; Allows building a custom key just for the argument from the selectionSet included by the `@key` directive."
        },
        "argsExpr": {
          "type": "string",
          "description": "Advanced use only; This argument specifies a string expression that allows more customization of the input arguments. Rules for evaluation of this argument are as follows:\n  - basic object parsing of the input key: `\"arg1: $key.arg1, arg2: $key.arg2\"`\n  - any expression enclosed by double brackets will be evaluated once for each of the requested keys, and then sent as a list: `\"input: { keys: [[$key]] }\"`\n  - selections from the key can be referenced by using the $ sign and dot notation: `\"upcs: [[$key.upc]]\"`, so that `$key.upc` refers to the `upc` field of the key."
        }
      },
      "required": [
        "queryFieldName"
      ]
    },
    "MergedTypeConfig": {
      "additionalProperties": false,
      "type": "object",
      "title": "MergedTypeConfig",
      "properties": {
        "typeName": {
          "type": "string",
          "description": "Name of the type (Query by default)"
        },
        "key": {
          "$ref": "#/definitions/KeyAnnotation",
          "description": "Specifies a base selection set needed to merge the annotated type across subschemas.\nAnalogous to the `selectionSet` setting specified in [merged type configuration](https://www.graphql-tools.com/docs/stitch-type-merging#basic-example)."
        },
        "canonical": {
          "type": "boolean",
          "description": "Specifies types and fields\nthat provide a [canonical definition](https://www.graphql-tools.com/docs/stitch-type-merging#canonical-definitions) to be built into the gateway schema. Useful for selecting preferred characteristics among types and fields that overlap across subschemas. Root fields marked as canonical specify which subschema the field proxies for new queries entering the graph."
        },
        "fields": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/MergedTypeField"
          },
          "additionalItems": false
        }
      }
    },
    "KeyAnnotation": {
      "additionalProperties": false,
      "type": "object",
      "title": "KeyAnnotation",
      "properties": {
        "selectionSet": {
          "type": "string"
        }
      },
      "required": [
        "selectionSet"
      ]
    },
    "MergedTypeField": {
      "additionalProperties": false,
      "type": "object",
      "title": "MergedTypeField",
      "properties": {
        "fieldName": {
          "type": "string"
        },
        "computed": {
          "$ref": "#/definitions/ComputedAnnotation",
          "description": "specifies a selection of fields required from other services to compute the value of this field.\nThese additional fields are only selected when the computed field is requested.\nAnalogous to [computed field](https://www.graphql-tools.com/docs/stitch-type-merging#computed-fields) in merged type configuration.\nComputed field dependencies must be sent into the subservice using an [object key](https://www.graphql-tools.com/docs/stitch-directives-sdl#object-keys)."
        }
      },
      "required": [
        "fieldName"
      ]
    },
    "ComputedAnnotation": {
      "additionalProperties": false,
      "type": "object",
      "title": "ComputedAnnotation",
      "properties": {
        "selectionSet": {
          "type": "string"
        }
      },
      "required": [
        "selectionSet"
      ]
    },
    "TuqlHandler": {
      "additionalProperties": false,
      "type": "object",
      "title": "TuqlHandler",
      "properties": {
        "db": {
          "type": "string",
          "description": "Pointer to your SQLite database"
        },
        "infile": {
          "type": "string",
          "description": "Path to the SQL Dump file if you want to build a in-memory database"
        }
      }
    }
  },
  "title": "Config",
  "type": "object",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "required": [
    "sources"
  ],
  "properties": {
    "serve": {
      "$ref": "#/definitions/ServeConfig",
      "description": "Configuration for `mesh start` or `mesh dev` command.\nThose commands won't be available in programmatic usage."
    },
    "sdk": {
      "$ref": "#/definitions/SDKConfig",
      "description": "SDK Configuration"
    },
    "codegen": {
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": true
        },
        {
          "type": "string"
        },
        {
          "type": "array",
          "additionalItems": true
        }
      ],
      "description": "Codegen Configuration"
    },
    "require": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "additionalItems": false
    },
    "sources": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Source"
      },
      "additionalItems": false,
      "description": "Defines the list of your external data sources for your API mesh"
    },
    "transforms": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Transform"
      },
      "additionalItems": false,
      "description": "Transform to apply to the unified mesh schema"
    },
    "additionalTypeDefs": {
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": true
        },
        {
          "type": "string"
        },
        {
          "type": "array",
          "additionalItems": true
        }
      ],
      "description": "Additional type definitions, or type definitions overrides you wish to add to the schema mesh"
    },
    "additionalResolvers": {
      "type": "array",
      "items": {
        "description": "Any of: String, AdditionalStitchingResolverObject, AdditionalStitchingBatchResolverObject, AdditionalSubscriptionObject",
        "anyOf": [
          {
            "type": "string"
          },
          {
            "$ref": "#/definitions/AdditionalStitchingResolverObject"
          },
          {
            "$ref": "#/definitions/AdditionalStitchingBatchResolverObject"
          },
          {
            "$ref": "#/definitions/AdditionalSubscriptionObject"
          }
        ]
      },
      "additionalItems": false,
      "description": "Additional resolvers, or resolvers overrides you wish to add to the schema mesh (Any of: String, AdditionalStitchingResolverObject, AdditionalStitchingBatchResolverObject, AdditionalSubscriptionObject)"
    },
    "cache": {
      "$ref": "#/definitions/Cache",
      "description": "Backend cache"
    },
    "merger": {
      "type": "string",
      "description": "Merge method"
    },
    "pubsub": {
      "description": "PubSub Implementation (Any of: String, PubSubConfig)",
      "anyOf": [
        {
          "type": "string"
        },
        {
          "$ref": "#/definitions/PubSubConfig"
        }
      ]
    },
    "documents": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "additionalItems": false,
      "description": "Provide a query or queries for GraphQL Playground, validation and SDK Generation\nThe value can be the file path, glob expression for the file paths or the SDL.\n(.js, .jsx, .graphql, .gql, .ts and .tsx files are supported."
    },
    "persistedOperations": {
      "$ref": "#/definitions/PersistedOperationsConfig",
      "description": "Configure persisted operations options"
    },
    "logger": {
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": true
        },
        {
          "type": "string"
        },
        {
          "type": "array",
          "additionalItems": true
        }
      ],
      "description": "Logger instance that matches `Console` interface of NodeJS"
    },
    "customFetch": {
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": true
        },
        {
          "type": "string"
        },
        {
          "type": "array",
          "additionalItems": true
        }
      ],
      "description": "Path to a custom W3 Compatible Fetch Implementation"
    },
    "skipSSLValidation": {
      "type": "boolean",
      "description": "Allow connections to an SSL endpoint without certificates"
    },
    "additionalEnvelopPlugins": {
      "type": "string",
      "description": "Path to a JavaScript file with a default export of Envelop plugins"
    },
    "plugins": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Plugin"
      },
      "additionalItems": false
    },
    "pollingInterval": {
      "type": "integer",
      "description": "If you are using a CDN for a source (e.g. Federation Supergraph), this will be the polling interval in milliseconds for the CDN without a downtime"
    }
  },
  "additionalProperties": false
} as any;