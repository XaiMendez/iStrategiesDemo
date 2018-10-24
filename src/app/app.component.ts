import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppIStrategies';
  name: String;

  person: { id: number, name: string }[] = [
    { "id": 0, "name": "Xavier Méndez" },
    { "id": 1, "name": "Pamela Nicole" }
];



  cDate: Date;
}
