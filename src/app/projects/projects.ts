import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink: string;
  githubLink: string[];
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
projects: Project[] = [
    {
      title: 'My Portfolio', 
      description: 'A personal portfolio built with Angular showcasing my skills, experience, and projects.',
      image: '../assets/portfolio.png',
      techStack: ['Angular 20', 'Typescript', 'Angular Material'],
      demoLink: 'https://gayatri-dutta-portfolio.vercel.app/',
      githubLink: ['https://github.com/GayatriDutta/portfolio']
    },
    {
      title: 'Expense Tracker',
      description: 'Track your expenses with real-time charts and insights built using React and Nest.js.',
      image: '../assets/expense_tracker.png ',
      techStack: ['React JS', 'Nest.js', 'PostgreSQL'],
      demoLink: 'https://expense-tracker-blush-nu-94.vercel.app/',
      githubLink: ['https://github.com/yourusername/expense-tracker', 'https://github.com/GayatriDutta/Expense-Tracker-Backend' ]
    },
    // {
    //   title: 'Food Order App',
    //   description: 'A responsive food ordering web app with real-time cart and checkout.',
    //   image: 'assets/images/food-app.png',
    //   techStack: ['React JS', 'Express', 'MongoDB'],
    //   demoLink: 'https://your-live-demo.com',
    //   githubLink: ['https://github.com/GayatriDutta/Expense-Tracker']
    // }
    
  ];
}
