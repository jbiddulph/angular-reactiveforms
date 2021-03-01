import { Component } from '@angular/core';
export type EditorType = 'basic' | 'nested' | 'array' | 'valid';

@Component({
  selector: 'app-tabbednav',
  templateUrl: './tabbednav.component.html',
  styleUrls: ['./tabbednav.component.scss']
})
export class TabbednavComponent {
  editor: EditorType = 'basic';
  
  get showBasicForm() {
    return this.editor === 'basic';
  }

  get showNestedForm() {
    return this.editor === 'nested';
  }

  get showArrayForm() {
    return this.editor === 'array';
  }

  get showValidForm() {
    return this.editor === 'valid';
  }

  toggleEditor(type: EditorType) {
    console.log("TYPE: ", type);
    this.editor = type;
  }
}
