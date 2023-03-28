import { Component, Input, OnInit} from '@angular/core';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(){

  }
 @Input()
 descarga = '#descarga';
}
