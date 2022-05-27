import { Component, OnInit } from '@angular/core';
import { SteamService } from '../shared/services/steam.service';

@Component({
  selector: 'app-player-donation-history-section',
  templateUrl: './player-donation-history-section.component.html',
  styleUrls: ['./player-donation-history-section.component.css']
})
export class PlayerDonationHistorySectionComponent implements OnInit {

  steamUserService;

  constructor(private steamService:SteamService) {

    this.steamUserService = steamService;

  }

  ngOnInit() {
  }

}
