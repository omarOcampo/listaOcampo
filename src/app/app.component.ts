import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto04';
  
  inscriptos = true;
  
  alumnos: string[] = [
    'Juan',
    'Mabel',
    'Nicolas',
    'Elvira',
    'Bruno',
    'Paola',
  ]
}
