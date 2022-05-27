import { Component, OnInit } from '@angular/core';
import { SteamService } from '../shared/services/steam.service';
import { PaginationService } from '../shared/services/pagination.service';

@Component({
  selector: 'app-header-nav-mobile',
  templateUrl: './header-nav-mobile.component.html',
  styleUrls: ['./header-nav-mobile.component.css']
})
export class HeaderNavMobileComponent implements OnInit {

  steamUserService;
  authDomain: string;
  paginationService;

  constructor(private steamService: SteamService, private myPaginationService: PaginationService) {

    this.steamUserService = steamService;
    this.authDomain = steamService.authDomain;
    this.paginationService = myPaginationService;

 }


  ngOnInit() {
  }

  logout() {
    console.log('steam logout requested');
    this.steamService.steamLogout();
    location.href = 'http://s1.combinecontrol.com:8080/logout';
  }

  serversClick() {
    this.paginationService.showServersPage.show = !this.paginationService.showServersPage.show;


  }

  mobileMenuSlide() {

    this.paginationService.mobileMenuState.show = !this.paginationService.mobileMenuState.show;

  }


}
