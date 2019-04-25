export interface MarkerType {
    id: string;
    name: string;
    symbol: string;
}

export const types: MarkerType[] = [
    {
        id: 'shop',
        name: 'Shop',
        symbol: 'fa-shopping-bag',
    },
    {
        id: 'house',
        name: 'House',
        symbol: 'fa-home',
    },
    {
        id: 'shrine',
        name: 'Shrine',
        symbol: 'fa-praying-hands',
    },
    {
        id: 'tavern',
        name: 'Tavern',
        symbol: 'fa-beer',
    },
    {
        id: 'dungeon',
        name: 'Dungeon',
        symbol: 'fa-dungeon',
    },
    {
        id: 'treasure',
        name: 'Treasure',
        symbol: 'fa-ring',
    }
];
