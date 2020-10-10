import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from 'src/app/services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form: FormGroup
  results: any[]
  query: string = ''
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      query: new FormControl()
    })
  }

  getResultGoogle(form: FormGroup): void{
    const { value: { query } } = form
    if (query) {
      this.query = query
      this.searchService.getResult(query).subscribe(v => { this.results = v; console.log(this.results);})
    }
  }

}
