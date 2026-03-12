import {
    MenuResponse,
    RestaurantCategoryResponse,
    RestaurantResponse,
    CustomerReview,
} from './types'

export async function fetchRestaurant(
    restaurantId: string
): Promise<RestaurantResponse> {
    const response = await fetch(
        `http://localhost:3002/restaurants/${restaurantId}`
    )
    return response.json()
}

export async function fetchRestaurantMenu(
    restaurantId: string
): Promise<MenuResponse> {
    const response = await fetch(
        `http://localhost:3002/restaurants/${restaurantId}/menu`
    )
    return response.json()
}

export async function fetchRestaurantCategories(
    categoryIds: string[]
): Promise<RestaurantCategoryResponse[]> {
    const response = await fetch(
        `http://localhost:3002/categories?ids=${categoryIds.join(',')}`
    )
    return response.json()
}

export async function fetchRestaurantReviews(
    restaurantId: string
): Promise<CustomerReview[]> {
    const response = await fetch(
        `http://localhost:3002/restaurants/${restaurantId}/reviews`
    )
    return response.json()
}