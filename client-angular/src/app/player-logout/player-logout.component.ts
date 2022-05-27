import { Component, OnInit } from '@angular/core';
import { SteamService } from '../shared/services/steam.service';

@Component({
  selector: 'app-player-logout',
  templateUrl: './player-logout.component.html',
  styleUrls: ['./player-logout.component.css']
})
export class PlayerLogoutComponent implements OnInit {

  domain:string;
  authDomain:string;

  constructor(private steamService:SteamService) {

    this.domain = steamService.domain;
    this.authDomain = steamService.authDomain;

  }

  ngOnInit() {
  }

}
