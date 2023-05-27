import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unimarket';

  handleDocumentClick(event: MouseEvent) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i] as HTMLElement;
      if (openDropdown.style.display === "block" && !openDropdown.parentNode?.contains(event.target as Node)) {
        openDropdown.style.display = "none";
      }
    }
  }
}
