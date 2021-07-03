import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TempFormComponent } from './temp-form/temp-form.component';
import { FormsModule }  from '@angular/forms';
// import { ResponseService } from './response.service';

@NgModule({
  declarations: [
    AppComponent,
    TempFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
