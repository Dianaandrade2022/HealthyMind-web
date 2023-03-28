import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output()icon = '../assets/logo/logoblanco.png';
  title = 'HealthyMind-web';
}
