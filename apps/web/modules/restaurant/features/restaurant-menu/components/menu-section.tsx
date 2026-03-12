import { MenuItemCard } from './menu-item-card'

export function MenuSection() {
    return (
        <div style={{ border: '2px solid green', backgroundColor: '#dcfce7', padding: '16px', margin: '8px' }}>
            <h3 style={{ color: 'green', textAlign: 'center' }}>MenuSection</h3>
            <div style={{ display: 'flex', gap: '8px' }}>
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
            </div>
        </div>
    )
}