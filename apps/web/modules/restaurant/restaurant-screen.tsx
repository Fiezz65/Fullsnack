import { RestaurantHero } from './features/restaurant-hero/restaurant-hero'
import { RestaurantInfo } from './features/restaurant-info/restaurant-info'
import { RestaurantSavings } from './features/restaurant-savings/restaurant-savings'
import { RestaurantFeaturedItems } from './features/restaurant-featured-items/restaurant-featured-items'
import { RestaurantMenu } from './features/restaurant-menu/restaurant-menu'
import { RestaurantReviews } from './features/restaurant-reviews/restaurant-reviews'

export function RestaurantScreen() {
    return (
        <div style={{ padding: '16px' }}>
            <RestaurantHero />
            <RestaurantInfo />
            <RestaurantSavings />
            <RestaurantFeaturedItems />
            <RestaurantMenu />
            <RestaurantReviews />
        </div>
    )
}