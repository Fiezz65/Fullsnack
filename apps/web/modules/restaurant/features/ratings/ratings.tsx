import React from 'react'
import { CustomerReview } from './components/customer-review'
import { getRatings } from '../../models/restaurant'

interface Props {
    restaurantId: string
}

export const Ratings = async ({ restaurantId }: Props) => {
    const ratings = await getRatings(restaurantId)

    return (
        <div className="bg-purple-100 border-purple-600 border-2 p-4 rounded-lg flex flex-col items-center justify-center text-2xl font-mono text-purple-600">
            <h1 className="py-8">Ratings</h1>
            <p className="text-lg">⭐ {ratings.rating} · {ratings.numRatings}+ Ratings</p>
            <div className="grid grid-cols-2 gap-4 w-full mt-4">
                {ratings.reviews.map((review) => (
                    <CustomerReview key={review.date} review={review} />
                ))}
            </div>
        </div>
    )
}