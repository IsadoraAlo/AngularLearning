import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent {
  public name: string = 'Isa';

  public person: any = {
    name: 'Isadora Alves',
    cpf: '400.289.224-20'
  }
}
