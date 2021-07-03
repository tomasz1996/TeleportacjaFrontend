import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent {
  
  url = "http://localhost:8080/api/temp/calculate";

  constructor(private http: HttpClient) {
  }

  responseObject = {
    temperature:0,
  }
  result:Number = 0;
  firstCity:String = "";
  secondCity:String = "";
  dob:Date | null = new Date;
  postData:Object = {}
 
  submitForm() {

    this.firstCity = (<HTMLInputElement>document.getElementById("firstCity")).value;
    this.secondCity = (<HTMLInputElement>document.getElementById("secondCity")).value;

    // change date format
    const dateSendingToServer = new DatePipe('en-US').transform(this.dob, 'yyyy-MM-dd')

    this.postData = {
      city1: this.firstCity,
      city2: this.secondCity,
      date: dateSendingToServer
    }

    this.http.post(this.url, this.postData).subscribe({
      next: data => {
        let resSTR = JSON.stringify(data);
        let resJSON = JSON.parse(resSTR);
        this.result = resJSON.temperature;
      },
      error: error => {
        this.result = -999;
        console.log(error)
      }
    })
  }
}
