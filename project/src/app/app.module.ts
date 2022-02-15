import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { SportContentComponent } from './components/sport-content/sport-content.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import { SportComponentComponent } from './components/sport-component/sport-component.component';
import {OrderListModule} from 'primeng/orderlist';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {RippleModule} from 'primeng/ripple';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import {TableModule} from 'primeng/table';
import { LoginComponent } from './components/login/login.component';
import {CardModule} from 'primeng/card';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenuItem} from 'primeng/api';
import { SportService } from './services/sport.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthGuard } from './services/auth.guard';
import {ConfirmationService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SidemenuComponent,
    SportContentComponent,
    SportComponentComponent,
    LoadingSpinnerComponent,
    LoginComponent,
    EditCategoryComponent,

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    PanelModule,
    OrderListModule,
    InputTextModule,
    ToastModule,
    RippleModule,
    TableModule,
    CardModule,
    SlideMenuModule,
    DialogModule
    

   
  ],
  providers: [MessageService, 
    SportService,  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
