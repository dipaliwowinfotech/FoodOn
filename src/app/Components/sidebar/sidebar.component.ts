import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  
constructor(private api:ApiService){}
  public get showSideBar(): boolean {
    return this.api.showSidebar;
  }
  public get showooterBar(): boolean {
    return this.api.showBaronFooter;
  }
}
