import {Component, Input} from '@angular/core';
import {EMPTY, Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  messageCount: number | undefined | null = undefined;

}
