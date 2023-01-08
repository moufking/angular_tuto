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
  @Input() contenue! : Course
  //Avec 

  UE: Course[] = [
    { titre:'C1', nb_eud: 2},
    { titre:'C2', nb_eud: 5},
  ]

  constructor() { }

  getTitle() {
    return this.title;
  }
  modifTitle() {
    this.title = "nouveau titre";
  }
  ngOnInit(): void {
  }

}
