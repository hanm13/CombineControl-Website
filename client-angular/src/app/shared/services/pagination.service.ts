import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {
  showServersPage: {} = {'show': true}; // default: false
  mobileMenuState: {} = {'show': false};
}
