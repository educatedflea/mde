import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';

// import { MdePopoverModule } from '../../../../dist/mde';
// import { MdePopoverModule } from '../../../../dist';
import { MdePopoverModule } from '@material-extended/mde';

import { AppRoutingModule } from './app-routing.module';

import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { ThemePickerComponent } from './shared/components/theme-picker/theme-picker.component';
import { NotificationsComponent } from './shared/components/notifications/notifications.component';
import { GithubComponent } from './shared/components/github/github.component';
import { SupportComponent } from './shared/components/support/support.component';
import { ErrorModule } from './pages/error/error.module';



@NgModule({
  declarations: [
    AppComponent,
    ThemePickerComponent,
    NotificationsComponent,
    GithubComponent,
    SupportComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'mde-app'}),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MdePopoverModule,
    AppRoutingModule,
    PagesModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
