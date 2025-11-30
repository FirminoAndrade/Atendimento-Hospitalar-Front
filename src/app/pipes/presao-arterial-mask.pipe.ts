import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'presaoArterialMask'
})
export class PresaoArterialMaskPipe implements PipeTransform {

 transform(value?: string | number): string {
    if (!value) return '';
    const v = value.toString().replace(/\D/g, '');
    if (v.length >= 4) {
      const sistolica = v.slice(0, v.length - 2);
      const diastolica = v.slice(-2);
      return `${sistolica}/${diastolica}`;
    }
    return value.toString(); 
  }

}
