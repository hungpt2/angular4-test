import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService } from './dashboard.service';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {

  key = 'i6kM6hhWP3nRIiZ2k0ZaWqy5BD7d4jxvAYwmLj4f';
  public myInterval: number = 3000;
  public activeSlideIndex: number = 0;
  public noWrapSlides: boolean = false;
  isPlay = true;
  chooseDate: any;
  imgType = 'natural';
  isErr = false;

  public slides: Array<Object> = [
    // { "image": "https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg" },
    // { "image": "https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg" },
    // { "image": "https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg" },
  ];
  constructor(
    private service: DashboardService
  ) { }

  ngOninit() {
    this.getImg();
  }

  getImg() {
    this.isErr = false;
    console.log(this.chooseDate, this.imgType);
    if (!this.chooseDate) {
      this.isErr = true;
      alert('please choose date')
      return;
    }
    this.service.getListImg(this.chooseDate, this.imgType).subscribe((response) => {
      console.log(response);
      let tmp = this.chooseDate.split('-');
      for (let item of response) {
        this.slides.push({ "image": "https://api.nasa.gov/EPIC/archive/" + this.imgType + "/" + tmp[0] + "/" + tmp[1] + "/" + tmp[2] + "/png/" + item.image + ".png?api_key=" + this.key });
      }
    })
  }
}
