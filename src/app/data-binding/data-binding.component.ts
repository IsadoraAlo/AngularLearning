import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  public url: string = 'uuuuuhuuuu.com';
  public urlDmC: string = 'https://staticdelivery.nexusmods.com/mods/2751/images/798/798-1600863312-1511229545.jpeg';
  public descriptionProperty: string = 'Passando as informações de um lugar para outro';
  public aprendeu: boolean = true;
  public valorInicial: number = 15;
  
  public get valor(): number{
    return 60 * 9;
  }

  public get aprendizado(): boolean{
    return true;
  }

  onValueChange(event: any){
    console.log(event.newValue);
  }

}
