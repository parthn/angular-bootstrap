import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'reversestring'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string): string {
    let newStr: string = "";
    if(value){
      for (var i = value.length - 1; i >= 0; i -- ) {
        newStr += value.charAt(i);
      }
    }
    return newStr;
  }

}
