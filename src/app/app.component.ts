import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  @ViewChild('main')
  main: ElementRef<HTMLDivElement>;

  @ViewChild('boxes')
  boxes: ElementRef<HTMLDivElement>;

  ngAfterViewChecked() {
    const boxesHeight = this.boxes.nativeElement.offsetHeight;
    this.main.nativeElement.style.height = boxesHeight + 'px';
  }
}
