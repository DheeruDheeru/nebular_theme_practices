import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbListModule, NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbActionsModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LayoutPageComponent } from './component/layout-page/layout-page.component';
import { CardComponent } from './component/card/card.component';
import { CardListComponent } from './component/card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    // RouterModule.forRoot(routes, {useHash:true}),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbButtonModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbActionsModule,
    NbCardModule,
    NbListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
