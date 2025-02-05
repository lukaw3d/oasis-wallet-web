import { bech32 } from 'bech32'
import { quantity, staking, types } from '@oasisprotocol/client'
import { WalletBalance } from 'app/state/wallet/types'
import { decode as base64decode } from 'base64-arraybuffer'
import BigNumber from 'bignumber.js'
import { StringifiedBigInt } from 'types/StringifiedBigInt'

export const uint2hex = (uint: Uint8Array) => Buffer.from(uint).toString('hex')
export const hex2uint = (hex: string) => new Uint8Array(Buffer.from(hex, 'hex'))
export const base64ToUint = (value: string) => new Uint8Array(base64decode(value))

export const shortPublicKey = async (publicKey: Uint8Array) => {
  return await staking.addressFromPublicKey(publicKey)
}

export const publicKeyToAddress = async (publicKey: Uint8Array) => {
  const data = await staking.addressFromPublicKey(publicKey)
  return staking.addressToBech32(data)
}

export const addressToPublicKey = async (addr: string) => {
  return staking.addressFromBech32(addr)
}

export const uint2bigintString = (uint: Uint8Array): StringifiedBigInt => quantity.toBigInt(uint).toString()
export const stringBigint2uint = (number: StringifiedBigInt) => quantity.fromBigInt(BigInt(number))

export const isValidAddress = (addr: string) => {
  if (!addr.match(/^oasis1/)) {
    return false
  }
  try {
    bech32.decode(addr)
    return true
  } catch (e) {
    return false
  }
}

export function concat(...parts: Uint8Array[]) {
  let length = 0
  for (const part of parts) {
    length += part.length
  }
  const result = new Uint8Array(length)
  let pos = 0
  for (const part of parts) {
    result.set(part, pos)
    pos += part.length
  }
  return result
}

export function parseRoseStringToBaseUnitString(value: string): StringifiedBigInt {
  const baseUnitBN = new BigNumber(value).shiftedBy(9) // * 10 ** 9
  if (baseUnitBN.isNaN()) {
    throw new Error(`not a number in parseRoseStringToBaseUnitString(${value})`)
  }
  if (baseUnitBN.decimalPlaces() > 0) {
    console.error('lost precision in parseRoseStringToBaseUnitString(', value)
  }
  return BigInt(baseUnitBN.toFixed(0)).toString()
}

export function formatBaseUnitsAsRose(
  amount: StringifiedBigInt,
  { minimumFractionDigits = 0, maximumFractionDigits = Infinity } = {},
) {
  const roseBN = new BigNumber(amount).shiftedBy(-9) // / 10 ** 9
  const roseString = roseBN.toFormat(
    Math.min(Math.max(roseBN.decimalPlaces(), minimumFractionDigits), maximumFractionDigits),
  )
  return roseString
}

export function parseRpcBalance(account: types.StakingAccount): WalletBalance {
  const zero = stringBigint2uint('0')

  return {
    available: uint2bigintString(account.general?.balance || zero),
    validator: {
      escrow: uint2bigintString(account.escrow?.active?.balance || zero),
      escrow_debonding: uint2bigintString(account.escrow?.debonding?.balance || zero),
    },
  }
}

export function formatCommissionPercent(commission: number): string {
  return new BigNumber(commission).times(100).toFormat()
}
