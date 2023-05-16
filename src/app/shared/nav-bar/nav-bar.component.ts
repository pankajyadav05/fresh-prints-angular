import { Component, OnInit } from '@angular/core';
import { NAV_ELEMENTS } from './nav-bar.data';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  navbarElements = NAV_ELEMENTS;

  constructor() {}

  ngOnInit(): void {}
}
