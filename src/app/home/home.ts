import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
texts: string[] = [
    'Full Stack Developer',
    'Front-end Developer',
    'Back-end Developer ',
    'Angular Developer'
  ];
  currentText: string = this.texts[0];
  index: number = 0;
  fade: boolean = false;
  count: number = 0;

   constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.currentText = this.texts[this.index];

    setInterval(() => {
      this.fade = true;
      this.cd.detectChanges(); // force Angular to detect changes

      setTimeout(() => {
        this.currentText = '';
        this.cd.detectChanges(); // force clear render
      }, 200);

      setTimeout(() => {
        this.index = (this.index + 1) % this.texts.length;
        this.currentText = this.texts[this.index];
        this.fade = false;
        this.cd.detectChanges(); // force update text
      }, 200);
    }, 2000);
  }
}
