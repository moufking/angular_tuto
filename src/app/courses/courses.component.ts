import { Component, Input, OnInit } from '@angular/core'; 
import { Course } from './course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Ceci est notre premier composant affichage grace à interpolation';
  ma_valeur = 'valeur initial';
  
  @Input() contenue!: Course //Ici , il est important de spécifier le type de contenu .
  //Note le ! qui permet, en mode strict, que le contenu ne soit pas  initialisé lors de sa création

  //Avec des @Input, on indique que, dans le HTML du parent,
  //on va binder la propriété "contenu" de <appcourse>. Cela 
  //permettra à la classe CourseComponent de recevoir les informations dont 
  //elle a besoin pour s'afficher correctement

  constructor() { }

  getTitle() {
    return this.title;
  }
  modifTitle() {
    this.title = "nouveau titre";
  }

  updateNb() {
    console.log('Voir les information')

  }
  ngOnInit(): void {
  }

}
