import { Injectable } from '@angular/core';
import form1 from './form1.json';
import form2 from './form2.json';
@Injectable({
  providedIn: 'root'
})
export class TestformsService {
  sections: [];
  description: string;
  valuesetData: any;

  getForm1JSON() {
    return form1;
  }
  getForm2JSON() {
    return form2;
  }
}
