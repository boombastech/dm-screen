import { Marker } from '../../markers/models/locationInfo';

export interface LocationInfo {
    id: string;
    marker: Marker;
    type: string;
}
