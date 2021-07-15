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
import {
    Burnrate,
    BurnrateFromJSON,
    BurnrateFromJSONTyped,
    BurnrateToJSON,
} from './';

/**
 * 
 * @export
 * @interface MultiBurnrateAlert
 */
export interface MultiBurnrateAlert {
    /**
     * 
     * @type {string}
     * @memberof MultiBurnrateAlert
     */
    severity: string;
    /**
     * 
     * @type {number}
     * @memberof MultiBurnrateAlert
     */
    _for: number;
    /**
     * 
     * @type {number}
     * @memberof MultiBurnrateAlert
     */
    factor: number;
    /**
     * 
     * @type {Burnrate}
     * @memberof MultiBurnrateAlert
     */
    _short: Burnrate;
    /**
     * 
     * @type {Burnrate}
     * @memberof MultiBurnrateAlert
     */
    _long: Burnrate;
    /**
     * 
     * @type {string}
     * @memberof MultiBurnrateAlert
     */
    state: MultiBurnrateAlertStateEnum;
}

/**
* @export
* @enum {string}
*/
export enum MultiBurnrateAlertStateEnum {
    Inactive = 'inactive',
    Pending = 'pending',
    Firing = 'firing'
}

export function MultiBurnrateAlertFromJSON(json: any): MultiBurnrateAlert {
    return MultiBurnrateAlertFromJSONTyped(json, false);
}

export function MultiBurnrateAlertFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultiBurnrateAlert {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'severity': json['severity'],
        '_for': json['for'],
        'factor': json['factor'],
        '_short': BurnrateFromJSON(json['short']),
        '_long': BurnrateFromJSON(json['long']),
        'state': json['state'],
    };
}

export function MultiBurnrateAlertToJSON(value?: MultiBurnrateAlert | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'severity': value.severity,
        'for': value._for,
        'factor': value.factor,
        'short': BurnrateToJSON(value._short),
        'long': BurnrateToJSON(value._long),
        'state': value.state,
    };
}


