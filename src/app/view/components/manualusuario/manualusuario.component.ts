import { Component } from '@angular/core';
import { appbody } from '../../../model/sources/appbody';

@Component({
  selector: 'app-manualusuario',
  templateUrl: './manualusuario.component.html',
  styleUrls: ['./manualusuario.component.scss']
})
export class ManualusuarioComponent {
  appbody = appbody;
}
