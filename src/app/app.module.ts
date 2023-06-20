import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificateComponent } from './certificate/certificate.component';
import { DetailsComponent } from './details/details.component';
import { WorksComponent } from './works/works.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    CertificateComponent,
    DetailsComponent,
    WorksComponent,
    FaqComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
