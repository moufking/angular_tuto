import { Component } from '@angular/core';
import { Course } from './courses/course';

  /*décorateur qui indique à Angular que la classe Tyscript 
  en dessous est le code d'un composant
  */
@Component({
  //  indique la balise HTLML pour insérer le composant dans l'application
  selector: 'app-root',

  // indique où se  trouve le code HTML du composant (celui à insérer dans l'appli quand on insère le composant)
  templateUrl: './app.component.html',

  //les styles propres au composant
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  // un composant contient une class TypeScript qui sert à contenir ses données et sa logique 
  title = 'Ceci est notre premier composant';

  UE: Course[] = [
    { titre:'C1', nb_eud: 2},
    { titre:'C2', nb_eud: 5},
  ]
  
}
