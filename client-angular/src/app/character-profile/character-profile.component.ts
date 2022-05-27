import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SteamService } from '../shared/services/steam.service';

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.css']
})
export class CharacterProfileComponent implements OnInit {
  steamUserService;
  queryId;

  profileData: any = {};

  constructor(private steamService: SteamService, private route: ActivatedRoute) {

    this.steamUserService = steamService;

    this.steamUserService.charactersData.forEach(element => {

      if (element.id == route.snapshot.params.id) {

        this.profileData = element;


      }

    });

  }

  ngOnInit() {
  }

}
