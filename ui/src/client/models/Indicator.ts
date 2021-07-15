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
    IndicatorLatency,
    IndicatorLatencyFromJSON,
    IndicatorLatencyFromJSONTyped,
    IndicatorLatencyToJSON,
    IndicatorRatio,
    IndicatorRatioFromJSON,
    IndicatorRatioFromJSONTyped,
    IndicatorRatioToJSON,
} from './';

/**
 * 
 * @export
 * @interface Indicator
 */
export interface Indicator {
    /**
     * 
     * @type {IndicatorRatio}
     * @memberof Indicator
     */
    ratio?: IndicatorRatio;
    /**
     * 
     * @type {IndicatorLatency}
     * @memberof Indicator
     */
    latency?: IndicatorLatency;
}

export function IndicatorFromJSON(json: any): Indicator {
    return IndicatorFromJSONTyped(json, false);
}

export function IndicatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Indicator {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ratio': !exists(json, 'ratio') ? undefined : IndicatorRatioFromJSON(json['ratio']),
        'latency': !exists(json, 'latency') ? undefined : IndicatorLatencyFromJSON(json['latency']),
    };
}

export function IndicatorToJSON(value?: Indicator | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ratio': IndicatorRatioToJSON(value.ratio),
        'latency': IndicatorLatencyToJSON(value.latency),
    };
}


