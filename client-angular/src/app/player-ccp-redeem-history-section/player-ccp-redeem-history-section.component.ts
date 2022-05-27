import { Component, OnInit } from '@angular/core';
import { SteamService } from '../shared/services/steam.service';

@Component({
  selector: 'app-player-ccp-redeem-history-section',
  templateUrl: './player-ccp-redeem-history-section.component.html',
  styleUrls: ['./player-ccp-redeem-history-section.component.css']
})
export class PlayerCcpRedeemHistorySectionComponent implements OnInit {

  steamUserService;

  constructor(private steamService:SteamService) {

    this.steamUserService = steamService;

   }

  ngOnInit() {
  }

}
