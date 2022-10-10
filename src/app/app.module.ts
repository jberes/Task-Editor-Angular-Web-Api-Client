import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridCrudComponent } from './grid-crud/grid-crud.component';
import { IgxGridModule, IgxActionStripModule, IgxNavbarModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GridCrudComponent,
    View2Component,
    View3Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxActionStripModule,
    FormsModule,
    IgxNavbarModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
