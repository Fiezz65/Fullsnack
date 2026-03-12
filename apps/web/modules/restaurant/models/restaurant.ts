import { fetchRestaurant, fetchRestaurantCategories, fetchRestaurantReviews } from '../lib/api'
import { Restaurant, Ratings } from './types'

export async function getRestaurant(id: string): Promise<Restaurant> {
    const restaurant = await fetchRestaurant(id)
    const { attributes, relationships } = restaurant

    const categories = await fetchRestaurantCategories(relationships.categories)
    const reviews = relationships.reviews.map((review) => ({
        rating: review.rating,
        comment: review.comment,
        date: review.date,
        userName: review.user.name,
    }))

    return {
        id: restaurant.id,
        ...attributes,
        categories: categories.map((c) => c.name),
        reviews,
    }
}

export async function getRatings(restaurantId: string): Promise<Ratings> {
    const [restaurant, reviews] = await Promise.all([
        fetchRestaurant(restaurantId),
        fetchRestaurantReviews(restaurantId),
    ])

    return {
        rating: restaurant.attributes.rating,
        numRatings: restaurant.attributes.numRatings,
        reviews: reviews.map((review) => ({
            rating: review.rating,
            comment: review.comment,
            date: review.date,
            userName: review.user.name,
        })),
    }
}