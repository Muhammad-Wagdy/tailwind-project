import { Component} from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isDarkMode = false;
  ngOnInit(): void {
    const savedMode = localStorage.getItem('Mode');
    this.isDarkMode = savedMode === 'true';
    this.applyTheme();
  }
  toggleMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('Mode', String(this.isDarkMode));
    this.applyTheme();
  }
  applyTheme(): void {
    const html = document.documentElement;
    if (this.isDarkMode) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  }
}

