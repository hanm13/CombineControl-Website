import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SteamService } from './shared/services/steam.service';

import { AuthGuard } from './shared/guards/index';
import { PaginationService } from './shared/services/pagination.service'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ForumThreadsComponent } from './forum-threads/forum-threads.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeWidgetsComponent } from './home-widgets/home-widgets.component';
import { RouterModule, Routes } from '@angular/router';
import { WidgetHomeServersComponent } from './widget-home-servers/widget-home-servers.component';
import { ScrollbarModule } from 'ngx-scrollbar';
import { AccountSectionComponent } from './account-section/account-section.component';
import { PlayerCharactersSectionComponent } from './player-characters-section/player-characters-section.component';
import { PlayerCombineSectionComponent } from './player-combine-section/player-combine-section.component';
import { PlayerDonationHistorySectionComponent } from './player-donation-history-section/player-donation-history-section.component';
import { PlayerCcpRedeemHistorySectionComponent } from './player-ccp-redeem-history-section/player-ccp-redeem-history-section.component';
import { PlayerPunishmentHistorySectionComponent } from './player-punishment-history-section/player-punishment-history-section.component';
import { PlayerLogoutComponent } from './player-logout/player-logout.component';
import { AccountHomeSectionComponent } from './account-home-section/account-home-section.component';
import { AccountNavbarComponent } from './account-navbar/account-navbar.component';
import { AccountHeaderComponent } from './account-header/account-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicScriptLoaderService } from './shared/services/dynamic-script-loader.service';
import { CharacterProfileComponent } from './character-profile/character-profile.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { ServerChatComponent } from './server-chat/server-chat.component';
import { HeaderNavMobileComponent } from './header-nav-mobile/header-nav-mobile.component';
import { HeaderNavDesktopComponent } from './header-nav-desktop/header-nav-desktop.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'account', component: AccountSectionComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: AccountHomeSectionComponent, canActivate: [AuthGuard]},
      { path: 'characters', component: PlayerCharactersSectionComponent, canActivate: [AuthGuard], children: [
        { path: '', component: CharactersListComponent, canActivate: [AuthGuard]},
        { path: 'profile/:id', component: CharacterProfileComponent, canActivate: [AuthGuard]},
      ] },
      { path: 'combine', component: PlayerCombineSectionComponent, canActivate: [AuthGuard] },
      { path: 'donations', component: PlayerDonationHistorySectionComponent, canActivate: [AuthGuard] },
      { path: 'ccpredeems', component: PlayerCcpRedeemHistorySectionComponent, canActivate: [AuthGuard] },
      { path: 'punishments', component: PlayerPunishmentHistorySectionComponent, canActivate: [AuthGuard] },
      { path: 'logout', component: PlayerLogoutComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: '', component: HomeComponent},
  { path: 'serverchat', component: ServerChatComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    ForumThreadsComponent,
    HomeWidgetsComponent,
    WidgetHomeServersComponent,
    AccountSectionComponent,
    PlayerCharactersSectionComponent,
    PlayerCombineSectionComponent,
    PlayerDonationHistorySectionComponent,
    PlayerCcpRedeemHistorySectionComponent,
    PlayerPunishmentHistorySectionComponent,
    PlayerLogoutComponent,
    AccountHomeSectionComponent,
    AccountNavbarComponent,
    AccountHeaderComponent,
    CharacterProfileComponent,
    CharactersListComponent,
    ServerChatComponent,
    HeaderNavMobileComponent,
    HeaderNavDesktopComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ScrollbarModule,
    BrowserAnimationsModule
  ],
  providers: [
          AuthGuard,
          SteamService,
          PaginationService,
          DynamicScriptLoaderService
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
