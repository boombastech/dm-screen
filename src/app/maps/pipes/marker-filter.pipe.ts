import { Pipe, PipeTransform } from '@angular/core';
import { Marker } from '../models/marker';

@Pipe({
    name: 'filter',
})
export class MarkerFilterPipe implements PipeTransform {

    transform(value: Marker[], term: string) {
        return value.filter(marker => {
            return marker.name.toLowerCase().indexOf(term) >= 0;
        });
    }
}
