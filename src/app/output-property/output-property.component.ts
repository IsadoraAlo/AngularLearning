import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent {
  @Input() public numberMath: number = 0;
  @Output() valueChange = new EventEmitter;
  
  addNumber(){
    this.numberMath++;
    this.valueChange.emit({newValue: this.numberMath});
  }

  removeNumber(){
    this.numberMath--;
    this.valueChange.emit({newValue: this.numberMath});
  }

}
