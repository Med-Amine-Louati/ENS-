import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regimes-des-etues-et-examenset-des-stages',
  templateUrl: './regimes-des-etues-et-examenset-des-stages.component.html',
  styleUrls: ['./regimes-des-etues-et-examenset-des-stages.component.css']
})
export class RegimesDesEtuesEtExamensetDesStagesComponent implements OnInit {

  constructor() { }
  texts = [

    {
      title: 'Arrêté du 16/03/1961',
      description:'relatif au stage pédagogique, prévu pour les professeurs diplômes de l’école normale supérieure ou licencies et les professeurs adjoints',
    },
    {
      title: 'Arrêté du 08/11/1961',
      description:'relatif a l’équivalence des examens de l’école normale supérieure, des certificats de licences françaises et des certificats de licences tunisiennes.',
      date : '19 octobre 2009 '
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
