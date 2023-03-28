import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  slideopt = [
    {
      img:'https://i.pinimg.com/564x/dd/43/28/dd4328dbd75d1d46c75b0168093da77c.jpg'
    },
    {
      img:'https://i.pinimg.com/564x/db/fe/4f/dbfe4f3d67d8530c47fc943eebac36a4.jpg'
    },
    {
      img:'https://i.pinimg.com/564x/76/85/03/76850392f4015e496561925cc86246bd.jpg',
    }
  ]

}
