/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/Meta/Categories": {
    /** Gets a list of all of the available place property categories and keys. */
    get: operations["Place_MetaCategories"];
  };
  "/Meta/PlaceTypes": {
    /** Gets a list of the available types of Place. */
    get: operations["Place_MetaPlaceTypes"];
  };
  "/Type/{types}": {
    /** Gets all places of a given type */
    get: operations["Place_GetByTypeByPathTypesQueryActiveOnly"];
  };
  "/{id}": {
    /** Gets the place with the given id. */
    get: operations["Place_GetByPathIdQueryIncludeChildren"];
  };
  "/": {
    /** Gets the places that lie within a geographic region. The geographic region of interest can either be specified by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners. Optionally filters on type and can strip properties for a smaller payload. */
    get: operations["Place_GetByGeoPointByQueryLatQueryLonQueryRadiusQueryCategoriesQueryIncludeC"];
  };
  "/{type}/At/{lat}/{lon}": {
    /** Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place must be polygonal e.g. a BoroughBoundary. */
    get: operations["Place_GetAtByPathTypePathLatPathLon"];
  };
  "/Search": {
    /** Gets all places that matches the given query */
    get: operations["Place_SearchByQueryNameQueryTypes"];
  };
  "/*": {
    /** Forwards any remaining requests to the back-end */
    get: operations["Forward_Proxy"];
  };
}

export interface components {
  schemas: {
    Tfl: {
      category: string;
      availableKeys: string[];
    };
    "Tfl-2": {
      category: string;
      key: string;
      sourceSystemKey: string;
      value: string;
      /** Format: date-time */
      modified: string;
    };
    "Tfl-3": {
      /** @description A unique identifier. */
      id: string;
      /** @description The unique location of this resource. */
      url: string;
      /** @description A human readable name. */
      commonName: string;
      /**
       * Format: double
       * @description The distance of the place from its search point, if this is the result
       *             of a geographical search, otherwise zero.
       */
      distance: number;
      /** @description The type of Place. See /Place/Meta/placeTypes for possible values. */
      placeType: string;
      /** @description A bag of additional key/value pairs with extra information about this place. */
      additionalProperties: components["schemas"]["Tfl-2"][];
      children: components["schemas"]["Tfl-3"][];
      childrenUrls: string[];
      /**
       * Format: double
       * @description WGS84 latitude of the location.
       */
      lat: number;
      /**
       * Format: double
       * @description WGS84 longitude of the location.
       */
      lon: number;
    };
    "Tfl-4": {
      /** @description Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc. */
      timeSlice: string;
      /**
       * Format: int32
       * @description Count of passenger flow towards a platform
       */
      value: number;
    };
    "Tfl-5": {
      /** @description The Line Name e.g. "Victoria" */
      line: string;
      /** @description Direction of the Line e.g. NB, SB, WB etc. */
      lineDirection: string;
      /** @description Direction displayed on the platform e.g. NB, SB, WB etc. */
      platformDirection: string;
      /** @description Direction in regards to Journey Planner i.e. inbound or outbound */
      direction: string;
      /** @description Naptan of the adjacent station */
      naptanTo: string;
      /** @description Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc. */
      timeSlice: string;
      /**
       * Format: int32
       * @description Scale between 1-6,
       *              1 = Very quiet, 2 = Quiet, 3 = Fairly busy, 4 = Busy, 5 = Very busy, 6 = Exceptionally busy
       */
      value: number;
    };
    "Tfl-6": {
      /** @description Busiest times at a station (static information) */
      passengerFlows: components["schemas"]["Tfl-4"][];
      /** @description Train Loading on a scale 1-6, 1 being "Very quiet" and 6 being "Exceptionally busy" (static information) */
      trainLoadings: components["schemas"]["Tfl-5"][];
    };
    "Tfl-7": {
      id: string;
      name: string;
      uri: string;
      fullName: string;
      type: string;
      crowding: components["schemas"]["Tfl-6"];
      /** @enum {string} */
      routeType:
        | "Unknown"
        | "All"
        | "Cycle Superhighways"
        | "Quietways"
        | "Cycleways"
        | "Mini-Hollands"
        | "Central London Grid"
        | "Streetspace Route";
      /** @enum {string} */
      status:
        | "Unknown"
        | "All"
        | "Open"
        | "In Progress"
        | "Planned"
        | "Planned - Subject to feasibility and consultation."
        | "Not Open";
    };
    "Tfl-8": {
      naptanIdReference: string;
      stationAtcoCode: string;
      lineIdentifier: string[];
    };
    "Tfl-9": {
      modeName: string;
      lineIdentifier: string[];
    };
    "Tfl-10": {
      naptanId: string;
      platformName: string;
      /** @description The indicator of the stop point e.g. "Stop K" */
      indicator: string;
      /** @description The stop letter, if it could be cleansed from the Indicator e.g. "K" */
      stopLetter: string;
      modes: string[];
      icsCode: string;
      smsCode: string;
      stopType: string;
      stationNaptan: string;
      accessibilitySummary: string;
      hubNaptanCode: string;
      lines: components["schemas"]["Tfl-7"][];
      lineGroup: components["schemas"]["Tfl-8"][];
      lineModeGroups: components["schemas"]["Tfl-9"][];
      fullName: string;
      naptanMode: string;
      status: boolean;
      /** @description A unique identifier. */
      id: string;
      /** @description The unique location of this resource. */
      url: string;
      /** @description A human readable name. */
      commonName: string;
      /**
       * Format: double
       * @description The distance of the place from its search point, if this is the result
       *             of a geographical search, otherwise zero.
       */
      distance: number;
      /** @description The type of Place. See /Place/Meta/placeTypes for possible values. */
      placeType: string;
      /** @description A bag of additional key/value pairs with extra information about this place. */
      additionalProperties: components["schemas"]["Tfl-2"][];
      children: components["schemas"]["Tfl-3"][];
      childrenUrls: string[];
      /**
       * Format: double
       * @description WGS84 latitude of the location.
       */
      lat: number;
      /**
       * Format: double
       * @description WGS84 longitude of the location.
       */
      lon: number;
    };
    System: { [key: string]: unknown };
    MetaCategoriesGet200ApplicationJsonResponse: components["schemas"]["Tfl"][];
    MetaCategoriesGet200TextJsonResponse: components["schemas"]["Tfl"][];
    MetaCategoriesGet200ApplicationXmlResponse: components["schemas"]["Tfl"][];
    MetaCategoriesGet200TextXmlResponse: components["schemas"]["Tfl"][];
    Get200ApplicationJsonResponse: { [key: string]: unknown };
    MetaPlaceTypesGet200ApplicationJsonResponse: components["schemas"]["Tfl"][];
    MetaPlaceTypesGet200TextJsonResponse: components["schemas"]["Tfl"][];
    MetaPlaceTypesGet200ApplicationXmlResponse: components["schemas"]["Tfl"][];
    MetaPlaceTypesGet200TextXmlResponse: components["schemas"]["Tfl"][];
    "Type-types-Get200ApplicationJsonResponse": components["schemas"]["Tfl-3"][];
    "Type-types-Get200TextJsonResponse": components["schemas"]["Tfl-3"][];
    "Type-types-Get200ApplicationXmlResponse": components["schemas"]["Tfl-3"][];
    "Type-types-Get200TextXmlResponse": components["schemas"]["Tfl-3"][];
    "id-Get200ApplicationJsonResponse": components["schemas"]["Tfl-3"][];
    "id-Get200TextJsonResponse": components["schemas"]["Tfl-3"][];
    "id-Get200ApplicationXmlResponse": components["schemas"]["Tfl-3"][];
    "id-Get200TextXmlResponse": components["schemas"]["Tfl-3"][];
    "Get200ApplicationJsonResponse-1": components["schemas"]["Tfl-10"][];
    Get200TextJsonResponse: components["schemas"]["Tfl-10"][];
    Get200ApplicationXmlResponse: components["schemas"]["Tfl-10"][];
    Get200TextXmlResponse: components["schemas"]["Tfl-10"][];
    SearchGet200ApplicationJsonResponse: components["schemas"]["Tfl-3"][];
    SearchGet200TextJsonResponse: components["schemas"]["Tfl-3"][];
    SearchGet200ApplicationXmlResponse: components["schemas"]["Tfl-3"][];
    SearchGet200TextXmlResponse: components["schemas"]["Tfl-3"][];
  };
}

export interface operations {
  /** Gets a list of all of the available place property categories and keys. */
  Place_MetaCategories: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["MetaCategoriesGet200ApplicationJsonResponse"];
          "text/json": components["schemas"]["MetaCategoriesGet200TextJsonResponse"];
          "application/xml": components["schemas"]["MetaCategoriesGet200ApplicationXmlResponse"];
          "text/xml": components["schemas"]["MetaCategoriesGet200TextXmlResponse"];
        };
      };
    };
  };
  /** Gets a list of the available types of Place. */
  Place_MetaPlaceTypes: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["MetaPlaceTypesGet200ApplicationJsonResponse"];
          "text/json": components["schemas"]["MetaPlaceTypesGet200TextJsonResponse"];
          "application/xml": components["schemas"]["MetaPlaceTypesGet200ApplicationXmlResponse"];
          "text/xml": components["schemas"]["MetaPlaceTypesGet200TextXmlResponse"];
        };
      };
    };
  };
  /** Gets all places of a given type */
  Place_GetByTypeByPathTypesQueryActiveOnly: {
    parameters: {
      path: {
        /**
         * A comma-separated list of the types to return. Max. approx 12 types.
         *             A valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint.
         */
        types: string;
      };
      query: {
        /** An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported) */
        activeOnly?: boolean;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["Type-types-Get200ApplicationJsonResponse"];
          "text/json": components["schemas"]["Type-types-Get200TextJsonResponse"];
          "application/xml": components["schemas"]["Type-types-Get200ApplicationXmlResponse"];
          "text/xml": components["schemas"]["Type-types-Get200TextXmlResponse"];
        };
      };
    };
  };
  /** Gets the place with the given id. */
  Place_GetByPathIdQueryIncludeChildren: {
    parameters: {
      path: {
        /** The id of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their ids */
        id: string;
      };
      query: {
        /** Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned */
        includeChildren?: boolean;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["id-Get200ApplicationJsonResponse"];
          "text/json": components["schemas"]["id-Get200TextJsonResponse"];
          "application/xml": components["schemas"]["id-Get200ApplicationXmlResponse"];
          "text/xml": components["schemas"]["id-Get200TextXmlResponse"];
        };
      };
    };
  };
  /** Gets the places that lie within a geographic region. The geographic region of interest can either be specified by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners. Optionally filters on type and can strip properties for a smaller payload. */
  Place_GetByGeoPointByQueryLatQueryLonQueryRadiusQueryCategoriesQueryIncludeC: {
    parameters: {
      query: {
        /** Format - double. lat is latitude of the centre of the bounding circle. */
        Lat: number;
        /** Format - double. lon is longitude of the centre of the bounding circle. */
        Lon: number;
        /** Format - double. The radius of the bounding circle in metres when only lat/lon are specified. */
        radius?: number;
        /** An optional list of comma separated property categories to return in the Place's property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /Place/Meta/categories endpoint) */
        categories?: unknown[];
        /** Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned */
        includeChildren?: boolean;
        /** Place types to filter on, or null to return all types */
        type?: unknown[];
        /** An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported) */
        activeOnly?: boolean;
        /** Format - int32. If specified, limits the number of returned places equal to the given value */
        numberOfPlacesToReturn?: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["Get200ApplicationJsonResponse-1"];
          "text/json": components["schemas"]["Get200TextJsonResponse"];
          "application/xml": components["schemas"]["Get200ApplicationXmlResponse"];
          "text/xml": components["schemas"]["Get200TextXmlResponse"];
        };
      };
    };
  };
  /** Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place must be polygonal e.g. a BoroughBoundary. */
  Place_GetAtByPathTypePathLatPathLon: {
    parameters: {
      path: {
        /** The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint) */
        type: string;
        /** Format - double. lat is latitude of the centre of the bounding circle. */
        lat: number;
        /** Format - double. lon is longitude of the centre of the bounding circle */
        lon: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["System"];
          "text/json": components["schemas"]["System"];
          "application/xml": components["schemas"]["System"];
          "text/xml": components["schemas"]["System"];
        };
      };
    };
  };
  /** Gets all places that matches the given query */
  Place_SearchByQueryNameQueryTypes: {
    parameters: {
      query: {
        /** The name of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their names. */
        name: string;
        /** A comma-separated list of the types to return. Max. approx 12 types. */
        types?: unknown[];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["SearchGet200ApplicationJsonResponse"];
          "text/json": components["schemas"]["SearchGet200TextJsonResponse"];
          "application/xml": components["schemas"]["SearchGet200ApplicationXmlResponse"];
          "text/xml": components["schemas"]["SearchGet200TextXmlResponse"];
        };
      };
    };
  };
  /** Forwards any remaining requests to the back-end */
  Forward_Proxy: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["Get200ApplicationJsonResponse"];
        };
      };
    };
  };
}

export interface external {}
