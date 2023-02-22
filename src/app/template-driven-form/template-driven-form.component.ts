import { Component, OnInit } from '@angular/core';
import { DCarte } from 'src/app/core/model/DrivenCarte';
import { DUser } from 'src/app/core/model/DrivenUser';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  user !: DUser;
  carte !: DCarte;

  constructor() { }

  ngOnInit(): void {
    this.user = new DUser;
    this.carte = new DCarte;
  }

}
