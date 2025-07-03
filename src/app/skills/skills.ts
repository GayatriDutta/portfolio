import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, MatTabsModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
    frameworks = [
      'Angular', 
      'React',
      'Vue JS',      
      'Nest JS',
      'Express JS',
    ];
    programmingLanguge = [
      'Javascript',
      'Node JS', 
      'Typescript',
    ];
    database = [
      'MongoDB',
      'Postgresql', 
      'SQL',
    ];
    tools = [
      'Git',
      'AWS',
      'Jira',
    ];
  selectedIndex : number = 0;

  onTabClick(index: number) {
  this.selectedIndex = index;
}

}
