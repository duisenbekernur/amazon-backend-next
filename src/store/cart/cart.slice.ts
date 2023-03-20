import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage } from 'utils/local-storage'

import { checkAuth, login, logout, register } from '../user/user.actions'
import { IInitialState } from '../user/user.interface'

const initialState = {
	cart: getLocalStorage('cart'),
	isLoading: false
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
				state.cart = null
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.cart = null
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.cart = null
			})
	}
})
