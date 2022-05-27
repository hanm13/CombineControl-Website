import { Component, OnInit } from '@angular/core';
import { SteamService } from '../shared/services/steam.service';

@Component({
  selector: 'app-player-punishment-history-section',
  templateUrl: './player-punishment-history-section.component.html',
  styleUrls: ['./player-punishment-history-section.component.css']
})
export class PlayerPunishmentHistorySectionComponent implements OnInit {
  steamUserService;

  constructor(private steamService: SteamService) {

    this.steamUserService = steamService;



   }

  ngOnInit() {
  }

}
