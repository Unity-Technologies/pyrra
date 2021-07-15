/* tslint:disable */
/* eslint-disable */
/**
 * Pyrra
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Burnrate
 */
export interface Burnrate {
    /**
     * 
     * @type {number}
     * @memberof Burnrate
     */
    window: number;
    /**
     * 
     * @type {number}
     * @memberof Burnrate
     */
    current: number;
    /**
     * 
     * @type {string}
     * @memberof Burnrate
     */
    query: string;
}

export function BurnrateFromJSON(json: any): Burnrate {
    return BurnrateFromJSONTyped(json, false);
}

export function BurnrateFromJSONTyped(json: any, ignoreDiscriminator: boolean): Burnrate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'window': json['window'],
        'current': json['current'],
        'query': json['query'],
    };
}

export function BurnrateToJSON(value?: Burnrate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'window': value.window,
        'current': value.current,
        'query': value.query,
    };
}


