import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(result: string, query: string): string {
    return result.replace(new RegExp(`[^${query}].*`), "<b>$&</b>");
  }

}
