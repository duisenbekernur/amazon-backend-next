import { instance } from 'api/api.interceptor'
import { IReview } from 'types/review.interface'

const REVIEWS = 'reviews'

type TypeData = {
	rating: number
	text: string
}

export const ReviewService = {
	async getAll() {
		return instance<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},
	async update(productId: string | number, data: TypeData) {
		return instance<IReview>({
			url: `${REVIEWS}/${productId}`,
			method: 'POST',
			data
		})
	}
}
