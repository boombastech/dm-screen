import { Pipe, PipeTransform } from '@angular/core';
import { LocationInfo } from '../../markers/models/locationInfo';

@Pipe({
    name: 'filter',
})
export class MarkerFilterPipe implements PipeTransform {

    transform(value: LocationInfo[], term: string) {
        return value;
        // return value.filter(marker => {
        //     return marker.name.toLowerCase().indexOf(term) >= 0;
        // });
    }
}
