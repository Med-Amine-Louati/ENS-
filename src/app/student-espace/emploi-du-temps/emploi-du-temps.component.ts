import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emploi-du-temps',
  templateUrl: './emploi-du-temps.component.html',
  styleUrls: ['./emploi-du-temps.component.css']
})
export class EmploiDuTempsComponent implements OnInit {

  doc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
