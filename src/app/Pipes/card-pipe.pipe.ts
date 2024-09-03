import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardPipe',
  standalone: true
})
export class CardPipePipe implements PipeTransform {

  transform(value: string,def='0000-0000-0000-0000'): String{
    if(value.length!=16){
      return def;
    }
    
    value = value.substring(0, 4) + '-' + value.substring(4, 8) + '-' + value.substring(8, 12) + '-' + value.substring(12, 16);
    return value;
}

  

}
