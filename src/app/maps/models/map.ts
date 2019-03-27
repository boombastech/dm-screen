import { WayPoint } from './waypoint';

export interface MapInfo {
    id?: string;
    downloadUrl?: string;
    name: string;
    height: number;
    width: number;
    wayPoints: WayPoint[];
}
