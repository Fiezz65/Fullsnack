import { ReviewSummary } from './components/review-summary'
import { ReviewCard } from './components/review-card'

export function RestaurantReviews() {
    return (
        <div style={{ border: '2px solid purple', backgroundColor: '#f3e8ff', padding: '16px', margin: '8px' }}>
            <h2 style={{ color: 'purple', textAlign: 'center' }}>RestaurantReviews</h2>
            <ReviewSummary />
            <div style={{ display: 'flex', gap: '8px' }}>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
    )
}