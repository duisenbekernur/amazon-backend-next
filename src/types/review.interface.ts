import { IUser } from './user.interface'

export interface IReview {
	id: number
	text: string
	rating: string
	createdAt: string
	user: IUser
}
