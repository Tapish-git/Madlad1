import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placard',
  templateUrl: './placard.component.html',
  styleUrls: ['./placard.component.css']
})

export class PlacardComponent {
  @Input() name!:string;
  @Input() description!:string;
  @Input() colorZoya!:string;   
}
