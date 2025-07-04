import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
   isScrolled: boolean = false;
   showMenudropdown: boolean = false ;
   screenSize : boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
    if(this.screenSize ){
      this.showMenudropdown = false;
    }    
  }

  @HostListener('window:resize', [])
  onResize() {
    this.screenSize = window.innerWidth <633;
  }

  ngOnInit(){
    this.screenSize = window.innerWidth <633;
  }

  showMenu(){
    if(this.screenSize && !this.showMenudropdown){
      return false;
    }
    return true;
  }
}
