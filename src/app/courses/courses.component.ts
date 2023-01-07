import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Ceci est notre premier composant affichage grace à interpolation';
  ma_valeur = 'valeur initial';

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
