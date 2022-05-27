import { Component } from '@angular/core';
import { PaginationService } from './shared/services/pagination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CombineControl';
  pagesService: any;

  constructor(private paginationService: PaginationService) {
    this.pagesService = paginationService;
  }

}
