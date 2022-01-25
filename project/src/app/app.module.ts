import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { SportContentComponent } from './components/sport-content/sport-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SoccerComponent } from './sports/soccer/soccer.component';
import { BoxingComponent } from './sports/boxing/boxing.component';
import { CounterComponent } from './sports/counter/counter.component';
import { LolComponent } from './sports/lol/lol.component';
import { DotaComponent } from './sports/dota/dota.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SidemenuComponent,
    SportContentComponent,
    SoccerComponent,
    BoxingComponent,
    CounterComponent,
    LolComponent,
    DotaComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
