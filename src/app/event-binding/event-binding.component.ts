import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {

  public actualValue: string = '';
  public savedValue: string = '';
  public mouseOver: boolean = false;

  public onEvent(): void {
    alert('O evento foi acionado!');
  }

  public onKeyUp(event: KeyboardEvent): string {
    console.log(`Você digitou ${event.key}`);
    return this.actualValue = (<HTMLInputElement>event.target).value;
  }

  public onSave(textOnInput: string): string{
    return this.savedValue = textOnInput; 
  }

  public mouseOverOut(): boolean {
    return this.mouseOver = !this.mouseOver;
  }

}
