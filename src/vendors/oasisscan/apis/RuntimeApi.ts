/* tslint:disable */
/* eslint-disable */
/**
 * Oasisscan API
 * https://github.com/bitcat365/oasisscan-backend#readme
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    InlineResponse2003,
    InlineResponse2003FromJSON,
    InlineResponse2003ToJSON,
} from '../models';

export interface GetRuntimeTransactionInfoRequest {
    id: string;
    hash: string;
    round?: number;
}

/**
 * 
 */
export class RuntimeApi extends runtime.BaseAPI {

    /**
     */
    async getRuntimeTransactionInfoRaw(requestParameters: GetRuntimeTransactionInfoRequest): Promise<runtime.ApiResponse<InlineResponse2003>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getRuntimeTransactionInfo.');
        }

        if (requestParameters.hash === null || requestParameters.hash === undefined) {
            throw new runtime.RequiredError('hash','Required parameter requestParameters.hash was null or undefined when calling getRuntimeTransactionInfo.');
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.hash !== undefined) {
            queryParameters['hash'] = requestParameters.hash;
        }

        if (requestParameters.round !== undefined) {
            queryParameters['round'] = requestParameters.round;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/runtime/transaction/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2003FromJSON(jsonValue));
    }

    /**
     */
    async getRuntimeTransactionInfo(requestParameters: GetRuntimeTransactionInfoRequest): Promise<InlineResponse2003> {
        const response = await this.getRuntimeTransactionInfoRaw(requestParameters);
        return await response.value();
    }

}
