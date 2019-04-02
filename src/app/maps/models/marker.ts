export interface Marker {
    id?: string;
    coordinates: MarkerCoordinates;
    name: string;
    description?: string;
    mapId: string;
}

export interface MarkerCoordinates {
    x: number;
    y: number;
}
