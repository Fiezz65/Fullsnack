import { FeaturedItemCard } from './components/featured-item-card'

export function RestaurantFeaturedItems() {
    return (
        <div style={{ border: '2px solid purple', backgroundColor: '#f3e8ff', padding: '16px', margin: '8px' }}>
            <h2 style={{ color: 'purple', textAlign: 'center' }}>RestaurantFeaturedItems</h2>
            <div style={{ display: 'flex', gap: '8px' }}>
                <FeaturedItemCard />
                <FeaturedItemCard />
                <FeaturedItemCard />
                <FeaturedItemCard />
            </div>
        </div>
    )
}