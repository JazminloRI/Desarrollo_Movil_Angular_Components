import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage implements OnInit {
  data: any[] = Array(20);
  @ViewChild(IonInfiniteScroll) inifiteScroll: IonInfiniteScroll;
  constructor() { }
  ngOnInit() {
  }
  loadData(event) {
    //console.log(event);
    setTimeout(() => {
      if (this.data.length > 50) {
        this.inifiteScroll.complete();
        this.inifiteScroll.disabled = true;
        return;
      }
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      //event.target.complete();
      this.inifiteScroll.complete();
    }, 1500);
  }

}

  
