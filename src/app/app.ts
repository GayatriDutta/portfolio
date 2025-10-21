import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { Header } from "./header/header";
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Contacts } from './contacts/contacts';
import * as AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Footer } from './footer/footer';
import { Experience } from "./experience/experience";
import { Loader } from "./loader/loader";

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, Home, About, Projects, Skills, Contacts, Footer, Experience, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private cdr: ChangeDetectorRef) {}

  protected title = 'portfolio';
  platformId = inject(PLATFORM_ID);
  loading= true;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1300,
      });
    }
    const timer = setTimeout(() => {
      this.loading= false;
      this.cdr.detectChanges();
    }, 2000);

    return () => clearTimeout(timer);
  }
}
