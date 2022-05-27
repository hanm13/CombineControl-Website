import { Component, OnInit } from '@angular/core';
import { SteamService } from '../shared/services/steam.service';

@Component({
  selector: 'app-account-home-section',
  templateUrl: './account-home-section.component.html',
  styleUrls: ['./account-home-section.component.css']
})
export class AccountHomeSectionComponent implements OnInit {
  steamUserService;

  constructor(private steamService: SteamService) {

    this.steamUserService = steamService;

  }

  ngOnInit() {
  }

}
