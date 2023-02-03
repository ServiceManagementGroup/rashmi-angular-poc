import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  items: MenuItem[] = [];

  scrollableItems: MenuItem[]= [];

  activeItem!: MenuItem;

  activeItem2!: MenuItem;
  displayBasic!: boolean;
  displayExport!: boolean;
  selectedValues: string[] = ['val1','val2'];

  ngOnInit() {
      this.items = [
          {label: 'Home', icon: 'pi pi-fw pi-home'},
          {label: 'Team', icon: 'pi pi-fw pi-users'},
          {label: 'Messages', icon: 'pi pi-fw pi-bell'},
          {label: 'Hierarchy', icon: 'pi pi-fw pi-user'},
          {label: 'Calendar', icon: 'pi pi-fw pi-calendar'}
      ];

      this.activeItem = this.items[0];
  }

  showBasicDialog() {
    this.displayBasic = true;
}

showExportDialog() {
  this.displayExport = true;
}

}
