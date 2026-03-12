import { MenuCategoryNav } from './components/menu-category-nav'
import { MenuSection } from './components/menu-section'

export function RestaurantMenu() {
    return (
        <div style={{ border: '2px solid purple', backgroundColor: '#f3e8ff', padding: '16px', margin: '8px', display: 'flex', gap: '8px' }}>
            <MenuCategoryNav />
            <div style={{ flex: 1 }}>
                <h2 style={{ color: 'purple', textAlign: 'center' }}>RestaurantMenu</h2>
                <MenuSection />
                <MenuSection />
            </div>
        </div>
    )
}