import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDifference',
  pure: true
})
export class DateDifferencePipe implements PipeTransform {

  transform(startingDate: Date, endingDate: Date): any {
    var startDate = new Date(startingDate);
    let endDate = new Date(endingDate);
    if (startDate !== endDate){
        var timeDifference = endDate.getTime() - startDate.getTime() 
        var dayDifference = timeDifference/(1000 * 3600 * 24)
        return dayDifference;
    }
    else{

    }
  }

}
