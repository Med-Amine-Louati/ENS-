import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bourse-et-vie-universitaire',
  templateUrl: './bourse-et-vie-universitaire.component.html',
  styleUrls: ['./bourse-et-vie-universitaire.component.css']
})
export class BourseEtVieUniversitaireComponent implements OnInit {

  constructor() { }
  texts = [

    {
      title: 'Décret n° 2009-3040 ',
      description:'relatif aux bourses nationales et aux prêts universitaires au profit des étudiants et élèves de l’enseignement supérieur.',
      date : '19 octobre 2009 '
    },
    {
      title: 'Arrêté du ministre de l’enseignement supérieur et de la recherche scientifique et de la Technologie du 26 Octobre 2009',
      description:'fixant les conditions et les modalités d’attribution et de renouvellement des bourses nationales et des prêts universitaires au profit des étudiants et des élèves de l’enseignement supérieur',
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
