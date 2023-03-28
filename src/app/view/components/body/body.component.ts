import { Component,Output } from '@angular/core';
import { cardbody } from '../../../model/sources/data.body';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  cardbody = cardbody;
  @Output()
  descarga = 'descarga';
}
