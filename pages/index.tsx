import Button from '@/ui/Button/Button'
import { NextPage } from 'next'

const HomePage: NextPage = () => {
	return (
		<div>
			{' '}
			<h1 className="text-3xl font-bold underline">
				<Button variant="white">Hellcco world!</Button>
			</h1>
		</div>
	)
}

export default HomePage
