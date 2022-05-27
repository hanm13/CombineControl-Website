import { Component } from '@angular/core';
import { SteamService } from '../shared/services/steam.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent {
  steamUserService;

  constructor(private steamService: SteamService) {

    this.steamUserService = steamService;

    if(!this.steamUserService.charactersData){ return };

    console.log('this.steamUserService.charactersData', this.steamUserService.charactersData);

    this.steamUserService.charactersData.forEach(element => {

      element.webModel = '';
      element.webModel = element.Model;
      element.webModel1 = element.webModel.split('/');
      element.webGroup = element.webModel1[2];
      element.webModel = element.webModel1[element.webModel1.length - 1];
      element.webModel1 = null;
      element.webModel1 = element.webModel.split('.');
      element.webModel = element.webModel1[0];
      element.webModel = 'citizens_' + element.webModel + '.png';


        if (element['CombineFlag'] !== '' && element['CharFlags'] === '') {
          element.webModel = 'Combine.png';
        // tslint:disable-next-line:max-line-length
        } else if ( element['CharFlags'] === 'O' || element['CharFlags'] === 'OA' || element['CharFlags'] === 'Q'  || element['CharFlags'] === 'OS' ) {
          element.webModel = 'OW.png';
        } else if ( element['CharFlags'] === 'P' ) {
          element.webModel = 'OWE.png';
        } else if ( element['CharFlags'] === 'SC' ) {
          element.webModel = 'PG.png';
        } else if ( element['CharFlags'] === 'AR' ) {
          element.webModel = 'PGS.png';
        } else if ( element['CharFlags'] === 'A' || element['CharFlags'] === 'FA' ) {
          element.webModel = 'WallaceBreen.png';
        } else if ( element['CharFlags'] === 'W' || element['CharFlags'] === 'V' ) {
          element.webModel = 'vortigaunt.png';
        } else if ( element['CharFlags'] === 'K' ) {
          element.webModel = '_gman_high.png';
        } else if ( element['CharFlags'] === 'Z' ) {
          element.webModel = 'zombie.png';
        } else if ( element['CharFlags'] === 'L' ) {
          element.webModel = 'cityscanner.png';
        } else if ( element['CharFlags'] === 'G' ) {
          element.webModel = 'fastzombie.png';
        } else if ( element['CharFlags'] === 'J' ) {
          element.webModel = 'headcrab.png';
        } else if ( element['CharFlags'] === 'AN' ) {
          element.webModel = 'antlion.png';
        } else if ( element['CharFlags'] === 'AW' ) {
          element.webModel = 'antlionworker.png';
        } else if ( element['CharFlags'] === 'S' ) {
          element.webModel = 'stalker.png';
        } else if ( element['CharFlags'] === 'CR' ) {
          element.webModel = 'crow.png';
        } else if ( element['CharFlags'] === 'HECUR' || element['CharFlags'] === 'HECUG' || element['CharFlags'] === 'HECUC' ) {
          element.webModel = 'bms_hecu.png';
        } else if ( element['CharFlags'] === 'SFR' || element['CharFlags'] === 'SFG' || element['CharFlags'] === 'SFM' ) {
          element.webModel = 'bms_guard.png';
        // tslint:disable-next-line:max-line-length
        } else if ( element['CharFlags'] === 'RDJ' || element['CharFlags'] === 'RD' || element['CharFlags'] === 'RDH' || element['CharFlags'] === 'ST' || element['CharFlags'] === 'STH' ) {
          element.webModel = 'bms_sci.png';
        } else if ( element['CharFlags'] === 'CHU' ) {
          element.webModel = 'chumtoad.png';
        } else if ( element['CharFlags'] === 'HOU' ) {
          element.webModel = 'houndeye.png';
        } else if ( element['CharFlags'] === 'B' ) {
          element.webModel = 'shieldscanner.png';
        } else if ( element['CharFlags'] === 'ZN' ) {
          element.webModel = 'zombine.png';
        } else if ( element['CharFlags'] === 'H' ) {
          element.webModel = 'hunter.png';
        } else if ( element['CharFlags'] === 'F' ) {
          element.webModel = 'councilmale.jpg';
        } else if ( element['PlayerFlags'] === 'AL' ) {
          element.webModel = 'Alyx.png';
        } else if ( element['PlayerFlags'] === 'BA' ) {
          element.webModel = 'Barney.png';
        }

    });

  }

  ngOnInit() {
  }

}
