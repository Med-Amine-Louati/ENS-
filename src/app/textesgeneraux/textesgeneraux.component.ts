import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textesgeneraux',
  templateUrl: './textesgeneraux.component.html',
  styleUrls: ['./textesgeneraux.component.css'],
})
export class TextesgenerauxComponent implements OnInit {
  constructor() {}
  texts = [
    {
      title: 'Décret no 58-201 du 13/09/1958',
      description:
        'Portant création d’un établissement d’enseignement supérieur dénomme “école normale supérieure”.',
    },
    {
      title: 'Décret no 61-326 du 23/09/1961',
      description:
        'Tableau parcellaire du décret no 61-326 du 23 septembre 1961 portant expropriation pour cause d’utilité publique d’un immeuble sis a Zitoun Jerbi, destine a l’usage d’un atelier pour l’école normale d’enseignement moyen a Tunis.',
    },
    {
      title: 'Décret no 61-337 du 04/10/1961',
      description:
        'Portant expropriation, pour cause d’utilité publique, d’un immeuble destine a l’agrandissement de l’école normale de l’enseignement moyen de Montlhéry.',
    },
    {
      title: 'Décret no 62-152 du 03/05/1962  (28 doul kaada 1381)',
      description:'Relatif a la création de l’école normale de professeurs adjoints.',
    },
    {
      title: 'Arrêté du 26/05/1962 (22 doul hijja 1381) ',
      description: 'Portant organisation de l’école normale de professeurs adjoints.',
    },
    {
      title: 'Loi no 62-82 du 31/12/1962',
      description:'Portant loi de finances pour la gestion 1963: chapitre 3: dispositions spéciales: établissements publics: secrétariat d’Etat a l’éducation nationale: école normale de professeurs adjoints – Art. 15',
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

    {
      title: '',
      description:'',
    },
    {
      title: '',
      description:'',
    },
  ];
  ngOnInit(): void {}
}
