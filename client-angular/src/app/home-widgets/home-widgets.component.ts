import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../shared/services/pagination.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home-widgets',
  templateUrl: './home-widgets.component.html',
  styleUrls: ['./home-widgets.component.css'],
  animations: [
    trigger('animationOption2', [
      state('close', style({
        opacity: 0,
        display: 'none',
      })),
      state('open', style({
        opacity: 1,
        display: 'block',
      })),
      transition('close <=> open', animate(1000)),
    ])
  ]
})
export class HomeWidgetsComponent implements OnInit {

  pagesService: any;
  showServersPage: {show: boolean} = {'show': false};


  constructor(private paginationService: PaginationService) {

    this.pagesService = paginationService;
    this.showServersPage = this.pagesService.showServersPage;
  }

  ngOnInit() {
  }

}
