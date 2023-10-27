import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isHamburgerActive: boolean = false;

  toggleHamburger() {
    this.isHamburgerActive = !this.isHamburgerActive;
  }
}