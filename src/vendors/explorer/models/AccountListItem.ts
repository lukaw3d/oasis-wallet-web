/* tslint:disable */
/* eslint-disable */
/**
 * OasisExplorer API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
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
 * @interface AccountListItem
 */
export interface AccountListItem {
    /**
     * 
     * @type {string}
     * @memberof AccountListItem
     */
    account_id: string;
    /**
     * 
     * @type {number}
     * @memberof AccountListItem
     */
    created_at?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountListItem
     */
    general_balance: number;
    /**
     * 
     * @type {number}
     * @memberof AccountListItem
     */
    escrow_balance: number;
    /**
     * 
     * @type {number}
     * @memberof AccountListItem
     */
    escrow_balance_share: number;
    /**
     * 
     * @type {number}
     * @memberof AccountListItem
     */
    delegations_balance?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountListItem
     */
    debonding_delegations_balance?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountListItem
     */
    self_delegation_balance?: number;
    /**
     * 
     * @type {string}
     * @memberof AccountListItem
     */
    delegate?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountListItem
     */
    type?: string;
}

export function AccountListItemFromJSON(json: any): AccountListItem {
    return AccountListItemFromJSONTyped(json, false);
}

export function AccountListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountListItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account_id': json['account_id'],
        'created_at': !exists(json, 'created_at') ? undefined : json['created_at'],
        'general_balance': json['general_balance'],
        'escrow_balance': json['escrow_balance'],
        'escrow_balance_share': json['escrow_balance_share'],
        'delegations_balance': !exists(json, 'delegations_balance') ? undefined : json['delegations_balance'],
        'debonding_delegations_balance': !exists(json, 'debonding_delegations_balance') ? undefined : json['debonding_delegations_balance'],
        'self_delegation_balance': !exists(json, 'self_delegation_balance') ? undefined : json['self_delegation_balance'],
        'delegate': !exists(json, 'delegate') ? undefined : json['delegate'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function AccountListItemToJSON(value?: AccountListItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.account_id,
        'created_at': value.created_at,
        'general_balance': value.general_balance,
        'escrow_balance': value.escrow_balance,
        'escrow_balance_share': value.escrow_balance_share,
        'delegations_balance': value.delegations_balance,
        'debonding_delegations_balance': value.debonding_delegations_balance,
        'self_delegation_balance': value.self_delegation_balance,
        'delegate': value.delegate,
        'type': value.type,
    };
}


