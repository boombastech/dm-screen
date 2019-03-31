export interface WayPoint {
    id?: string;
    coordinates: WayPointCoordinates;
    name: string;
    description?: string;
    mapId: string;
}

export interface WayPointCoordinates {
    x: number;
    y: number;
}
