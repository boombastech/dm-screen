export interface LocationInfo {
    id?: string;
    marker: Marker;
    type: string;
}

export interface Marker {
    mapId: string;
    locationId?: string;
    x: number;
    y: number;
}
