import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrl: './loader.css'
})
export class Loader {
  loading = true;
  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 100);
  }
}
