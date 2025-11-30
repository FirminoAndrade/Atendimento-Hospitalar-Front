import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneMask'
})
export class TelefoneMaskPipe implements PipeTransform {

 transform(value?: string): string {
    if (!value) return '';
    const v = value.replace(/\D/g, '');
    if (v.length === 10) {
      // Formato (XX) XXXX-XXXX
      return v.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else if (v.length === 11) {
      // Formato (XX) 9XXXX-XXXX
      return v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
      return value;
    }
  }
}
