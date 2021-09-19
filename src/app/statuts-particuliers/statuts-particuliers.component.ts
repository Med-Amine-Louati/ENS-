import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statuts-particuliers',
  templateUrl: './statuts-particuliers.component.html',
  styleUrls: ['./statuts-particuliers.component.css']
})
export class StatutsParticuliersComponent implements OnInit {

  constructor() { }
  texts = [

    {
      title: 'Décret no 59-365 du 03/12/1959:',
      description:'fixant le statut du directeur de l’ecole normale superieure',
    },
    {
      title: 'Décret no 59-366 du 03/12/1959: ',
      description:'relatif au classement hierarchique de l’emploi de directeur de l’ecole normale superieure',
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
