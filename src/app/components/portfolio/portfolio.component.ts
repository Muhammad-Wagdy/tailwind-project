import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  images = [
    'assets/house.png',
    'assets/cake.png',
    'assets/circus.png',
    'assets/house.png',
    'assets/cake.png',
    'assets/circus.png',
  ];
  selectedImg: string = '';
  showImg(img: string) {
    this.selectedImg = img;
  }
  hideImg(){
    this.selectedImg = ''
  }
}
