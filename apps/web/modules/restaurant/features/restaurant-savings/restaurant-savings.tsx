import { SavingsCard } from './components/savings-card'

export function RestaurantSavings() {
    return (
        <div style={{ border: '2px solid purple', backgroundColor: '#f3e8ff', padding: '16px', margin: '8px' }}>
            <h2 style={{ color: 'purple', textAlign: 'center' }}>RestaurantSavings</h2>
            <div style={{ display: 'flex', gap: '8px' }}>
                <SavingsCard />
                <SavingsCard />
            </div>
        </div>
    )
}