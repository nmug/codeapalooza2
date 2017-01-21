import { Component, OnInit } from '@angular/core';
import { YelpInfo } from './yelpinfo';
import { YelpService } from './yelp.service';

@Component({
    selector: 'my-yelp',
    template: `

    `,
})
export class YelpComponent implements OnInit{
  yelpInfo: YelpInfo[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private yelpService : YelpService){ }

  ngOnInit(){
    this.yelpService
      .getAll()
      .subscribe(
         /* happy path */ p => this.yelpInfo = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }
}