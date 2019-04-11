export interface Marker {
    id?: string;
    coordinates: MarkerCoordinates;
    mapId: string;
    type: string;
}

export interface MarkerCoordinates {
    x: number;
    y: number;
}
