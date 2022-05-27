import { Component, OnInit } from '@angular/core';
import { SteamService } from '../shared/services/steam.service';
import { PaginationService } from '../shared/services/pagination.service';

@Component({
  selector: 'app-header-nav-desktop',
  templateUrl: './header-nav-desktop.component.html',
  styleUrls: ['./header-nav-desktop.component.css']
})
export class HeaderNavDesktopComponent implements OnInit {

  steamUserService;
  authDomain: string;
  pagesService;

  constructor(private steamService: SteamService, private paginationService: PaginationService) {

    this.steamUserService = steamService;
    this.authDomain = steamService.authDomain;
    this.pagesService = paginationService;

 }

  ngOnInit() {
  }

  logout() {
    console.log('steam logout requested');
    this.steamService.steamLogout();
    location.href = 'http://s1.combinecontrol.com:8080/logout';
  }


  serversClick() {

    this.pagesService.showServersPage.show = !this.pagesService.showServersPage.show;


  }

}
