import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { CoreForm1 } from '../models/form1';
import { CoreForm2 } from '../models/form2';
import { TestformsService } from '../services/testforms.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  form1Structure: CoreForm1[];
  form2Structure: CoreForm2[];
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];
  constructor( private testFormsService: TestformsService) {}
  ngOnInit() {
    this.form1Structure = this.testFormsService.getForm1JSON();
    this.form2Structure = this.testFormsService.getForm2JSON();
    console.log('Form 1: ',this.form1Structure);
    console.log('Form 2: ',this.form2Structure);
  }
  loadForm1() {
    this.form = new FormGroup({});
    this.model = {};
    this.options = {};
    this.fields = this.testFormsService.getForm1JSON();
  }

  loadForm2() {
    this.form = new FormGroup({});
    this.model = {};
    this.options = {};
    this.fields = this.testFormsService.getForm2JSON();
  }
  onSubmit(e) {
    console.log(this.model);
  }
}
