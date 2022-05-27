import { Component, OnInit } from '@angular/core';
import { SteamService } from '../shared/services/steam.service';

@Component({
  selector: 'app-server-chat',
  templateUrl: './server-chat.component.html',
  styleUrls: ['./server-chat.component.css']
})
export class ServerChatComponent implements OnInit {

  steamUserService;

  constructor(private steamService: SteamService) {

    this.steamUserService = steamService;

   }

  ngOnInit() {

    const thisComponenet = this;

    this.steamUserService.getChatData();

    setInterval(function() {

      thisComponenet.steamUserService.getChatData();

    }, 5000);

  }

}
