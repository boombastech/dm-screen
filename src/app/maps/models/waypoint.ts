export interface WayPoint {
    id?: string;
    coordinates: WayPointCoordinates;
    name: string;
    description?: string;
}

export interface WayPointCoordinates {
    x: number;
    y: number;
}
