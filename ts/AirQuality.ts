/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    /** Gets air quality data feed */
    get: operations["AirQuality_Get"];
  };
}

export interface components {
  schemas: {
    "System.Object": { [key: string]: unknown };
  };
}

export interface operations {
  /** Gets air quality data feed */
  AirQuality_Get: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["System.Object"];
          "text/json": components["schemas"]["System.Object"];
          "application/xml": components["schemas"]["System.Object"];
          "text/xml": components["schemas"]["System.Object"];
        };
      };
    };
  };
}

export interface external {}
