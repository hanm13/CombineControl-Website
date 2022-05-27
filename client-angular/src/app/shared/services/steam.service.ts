import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SteamUser } from '../models/steamuser.model';
import { CCPlayer } from '../models/ccplayer.model';

@Injectable()
export class SteamService {
  userData: any = {};
  playerData: any = {};
  ccpData: any = {};
  donationData: any = {};
  charactersData: any = {};
  chatData: any = [];
  serversData: any = [];
  discordData: any = [];
  staffData: any = {"data":{LVL:0}};
  mode = "local";
  domain = (this.mode === "local" ? 'http://localhost' : 'dev1.combinecontrol.com');
  authDomain = (this.mode === "local" ? 'http://localhost:6001/authenticate':'http://dev1.combinecontrol.com:6001/authenticate');
  authSteamPlayerData: any = (this.mode === "local" ? 'http://localhost:6001/api/getplayerdata':'http://dev1.combinecontrol.com:6001/api/getplayerdata');
  authServerChatData: any =  (this.mode === "local" ? 'http://localhost:6001/api/chat':'http://dev1.combinecontrol.com:6001/api/chat');
  authstaffData: any =  (this.mode === "local" ? 'http://localhost:6001/api/getstaffdata':'http://dev1.combinecontrol.com:6001/api/getstaffdata');

  authServersData: any = `http://s1.combinecontrol.com/combinecontrol_servers/?json_data=1`; // should be permanant
  authDiscordData: any = `http://s1.combinecontrol.com/combinecontrol_servers/?json_data=1&discord=1`; // should be permanant

  constructor(private myHttp: HttpClient) {

    this.getData();
    this.initStaffCheck();
  }

  initStaffCheck(){

    // this.staffObj = this.getStaffData() || null;
    // this.staffData.data = this.staffObj.data;

    // setInterval(async () => {

    //   this.staffObj = await this.getStaffData();
    //   this.staffData.data = this.staffObj.data;

    // }, 5000); // todo: find a fix for this timer...

    console.log(this.staffData)

  }

  /**
   * Function to receive all Player data from CC Servers and Steam Data.
   */

  async getData() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      cookie: document.cookie
    });
    const options = { headers: headers };
    const enco: any = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    try {
      const resData: any = await this.myHttp
        .get(this.authSteamPlayerData, { withCredentials: true })
        .toPromise();

        this.userData = <SteamUser>resData.steamData;
        this.playerData = <CCPlayer>resData.playerData;
        this.ccpData = resData.ccpData;
        this.donationData = resData.donationData;
        this.charactersData = resData.charactersData;

     } catch (error) {
       console.log('getData ERROR: ', error);
     }

  }

  /**
   *
   *
   * @memberof SteamService
   */
  async getServersData() {
      this.serversData = await this.myHttp
        .get(this.authServersData, { withCredentials: false })
        .toPromise();
  }

    /**
   *
   *
   * @memberof SteamService
   */
  async getDiscordServerData() {
    this.discordData = await this.myHttp
      .get(this.authDiscordData, { withCredentials: false })
      .toPromise();
}


  /**
   *
   *
   * @returns
   * @memberof SteamService
   */
  async getChatData() {

    const resData: any = await this.myHttp
      .get(this.authServerChatData, { withCredentials: true })
      .toPromise();

    if (this.chatData[9] && resData[9].id === this.chatData[9].id) {
      return;
    } // no need to update if the content is the same

    this.chatData = resData;

    return new Promise(function(resolve) {
      resolve();
    });
  }

  /**
   *
   *
   * @returns
   * @memberof SteamService
   */
  async getStaffData() {

    const resData: any = await this.myHttp
      .get(this.authstaffData, { withCredentials: true })
      .toPromise();

   if(resData){
     return resData;
   }else{return {"LVL":0}}

    return new Promise(function(resolve) {
      resolve(resData);
    });
  }

  /**
   *
   *
   * @memberof SteamService
   */
  steamLogout() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      cookie: document.cookie
    });
    const options = { headers: headers };
    const enco: any = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    this.myHttp
      .get(this.domain + '/logout', { withCredentials: true })
      .toPromise();

    this.userData = {};
  }
  /**
   *
   *
   * @returns
   * @memberof SteamService
   */
  hasValidIdToken() {
    if (this.userData.steamid) {
      return true;
    }

    return false;
  }
}
