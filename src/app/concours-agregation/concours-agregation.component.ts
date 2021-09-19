import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concours-agregation',
  templateUrl: './concours-agregation.component.html',
  styleUrls: ['./concours-agregation.component.css']
})
export class ConcoursAgregationComponent implements OnInit {

  constructor() { }
  texts = [

    {
      title: 'Décret n° 98-1430 du 13 juillet 1998,',
      description:'portant institution et organisation du concours d’agrégation dans les disciplines littéraires, des sciences humaines et des sciences fondamentales.',
    },
    {
      title: 'Arrêté des ministres de l’éducation et l’enseignement supérieur du 31 mai 2001,',
      description:'portant modification de l’arrêté du 22 octobre 1999, fixant le programme, la nature, la durée et les coefficients des épreuves du concours d’agrégation d’histoire.',
    },
    {
      title: '',
      description:'',
    },

    {
      title: '',
      description:'',
    },
    {
      title: '',
      description:'',
    },
  ];
  ngOnInit(): void {
  }

}
