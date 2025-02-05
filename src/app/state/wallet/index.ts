import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'

import { AddWalletPayload, BalanceUpdatePayload, Wallet, WalletState } from './types'

export const initialState: WalletState = {
  wallets: {},
  isOpen: false,
  selectedWallet: undefined,
}

const slice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    openWalletFromMnemonic(state, action: PayloadAction<void>) {},
    openWalletFromPrivateKey(state, action: PayloadAction<string>) {},
    openWalletsFromLedger(state, action: PayloadAction<void>) {},
    selectWallet(state, action: PayloadAction<string | undefined>) {
      state.selectedWallet = action.payload
    },
    closeWallet(state, action: PayloadAction<void>) {},
    fetchWallet(state, action: PayloadAction<Wallet>) {},
    updateBalance(state, action: PayloadAction<BalanceUpdatePayload>) {
      Object.assign(state.wallets[action.payload.address].balance, action.payload.balance)
    },
    addWallet(state, action: PayloadAction<AddWalletPayload>) {},
    walletOpened(state, action: PayloadAction<Wallet>) {
      const newWallet = action.payload
      state.wallets[newWallet.address] = newWallet
      state.isOpen = true
    },
    walletClosed(state, action: PayloadAction<void>) {
      // Revert to initial state
      Object.assign(state, initialState)
    },
  },
})

export const { actions: walletActions } = slice

export default slice.reducer
