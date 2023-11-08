import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isHamburgerActive: boolean = false;
  isMenuHidden: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const routeData = this.router.routerState.snapshot.root.firstChild?.data;
        this.isMenuHidden = routeData ? routeData['hideMenu'] === true : false;
      }
    });
  }

  toggleHamburger() {
    this.isHamburgerActive = !this.isHamburgerActive;
  }
}