import { Component, OnInit } from '@angular/core';
import { SteamService } from '../shared/services/steam.service';
import { PaginationService } from '../shared/services/pagination.service';

@Component({
  selector: 'app-widget-home-servers',
  templateUrl: './widget-home-servers.component.html',
  styleUrls: ['./widget-home-servers.component.css'],

})
export class WidgetHomeServersComponent implements OnInit {

  pagesService: any;
  steamUserService;
  showLoggedInMembers: Boolean = false;
  playersOnline = 0;
  showServersPage: {show: boolean} = {'show': false};

  constructor(private steamService: SteamService, private paginationService: PaginationService) {

    this.steamUserService = steamService;
    this.pagesService = paginationService;

    this.showServersPage = this.pagesService.showServersPage;


  }

  async ngOnInit() {

    // this.componentGetServersData();
    // this.componentGetDiscordData();


    //DISABLED FOR DEBUG
    //this.scheduleServersDataInterval();
    // this.scheduleDiscordDataInterval();



  }

  scheduleServersDataInterval(){

    // Interval for server list refresh every 5 seconds.
    setInterval(() => {

      if(this.showServersPage.show){this.componentGetServersData()}


    }, 5000); // todo: find a fix for this timer...

  }

  scheduleDiscordDataInterval(){

    // Interval for server list refresh every 5 seconds.
    setInterval(() => {

    if(this.showServersPage.show){this.componentGetDiscordData()}

  }, 5000); // todo: find a fix for this timer...

  }

  getGameServerIpAddress(port) {

    return `steam://connect/s1.combinecontrol.com:${port}`;

  }

  onShowMembersClick(){

    this.showLoggedInMembers = !this.showLoggedInMembers;

  }

  componentGetServersData() {
    this.steamUserService.getServersData().then(() => {

      return this.steamUserService.serversData;

    }).then((data) => {

      this.playersOnline = 0;


      data.forEach(server => {

        this.playersOnline += server.Players;



      });

    });
  }

  async componentGetDiscordData() {
    await this.steamUserService.getDiscordServerData();
  }

}
