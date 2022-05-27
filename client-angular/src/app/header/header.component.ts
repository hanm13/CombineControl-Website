import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { SteamService } from '../shared/services/steam.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { PaginationService } from '../shared/services/pagination.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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
export class HeaderComponent implements OnInit {

  userData: any = {};
  domain: string;
  authDomain: string;
  steamUserService;
  paginationService;
  mobileMenuState: {show: boolean} = {'show': false};

  constructor(private steamService: SteamService, private myPaginationService: PaginationService) {

      this.domain = steamService.domain;
      this.authDomain = steamService.authDomain;
      this.steamUserService = steamService;
      this.paginationService = myPaginationService;
      this.mobileMenuState = this.paginationService.mobileMenuState;

   }


  login() {

    // this.oauthService.initImplicitFlow();
  }

  mobileMenuSlide() {
    this.paginationService.mobileMenuState.show = !this.paginationService.mobileMenuState.show;

  }

  ngOnInit() {

    this.steamService.getData();

  }

}
