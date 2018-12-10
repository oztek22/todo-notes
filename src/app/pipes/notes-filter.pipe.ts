import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notesFilter'
})
export class NotesFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args === 'all') {
      return value;
    }
    return value.filter((e) => {
      return e.isTodo && e.dueDate;
    });
  }

}
