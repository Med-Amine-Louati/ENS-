import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concours-admission-ens',
  templateUrl: './concours-admission-ens.component.html',
  styleUrls: ['./concours-admission-ens.component.css']
})
export class ConcoursAdmissionEnsComponent implements OnInit {

  constructor() { }
  texts = [

    {
      title: 'Décret no 59-118 du 21/04/1959:',
      description:'relatif au règlement, au concours d’entrée et au diplôme de l’école normale supérieure.',
      date : '19 octobre 2009 '
    },
    {
      title: 'Décret no 59-118 du 24/04/1959:',
      description:'relatif au reglement au concours d’entree et au diplome de l’ecole normale superieure (rectificatif).',
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
