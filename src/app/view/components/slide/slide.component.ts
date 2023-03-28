import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  slideopt = [
    {
      img:'../../../../assets/banner/2.png'
    },
    {
      img:'../../../../assets/banner/3.png'
    },
    {
      img:'../../../../assets/banner/4.png',
    }
  ]

}
