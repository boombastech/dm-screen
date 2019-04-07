export interface Marker {
    id?: string;
    coordinates: MarkerCoordinates;
    name: string;
    description?: string;
    mapId: string;
    colour?: string;
    icon?: string;
}

export interface MarkerCoordinates {
    x: number;
    y: number;
}

export interface Colour {
    name: string;
    hex: string;
}

export interface Icon {
    name: string;
    value: string;
}

export const icons: Icon[] = [
    {
        name: 'Marker',
        value: 'fa-map-marker-alt',
    },
];

export const colours: Colour[] = [
    {
        name: 'White',
        hex: '#FFFFFF',
    },
    {
        name: 'Black',
        hex: '#000000',
    },
    {
        name: 'Yellow',
        hex: '#FFFF00',
    },
    {
        name: 'Green',
        hex: '#008000',
    },
    {
        name: 'Red',
        hex: '#FF0000',
    },
    {
        name: 'Blue',
        hex: '#0000FF',
    },
    {
        name: 'Orange',
        hex: '#FFA500',
    },
    {
        name: 'Purple',
        hex: '#800080',
    },
    {
        name: 'Pink',
        hex: '#FF00FF',
    },
];
