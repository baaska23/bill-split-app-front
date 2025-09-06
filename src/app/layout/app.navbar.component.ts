import { Component, OnInit } from "@angular/core";
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-navbar',
    templateUrl: 'app.navbar.component.html',
    styleUrls: ['app.navbar.style.scss']
})
export class AppNavbarComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit(): void {
        this.model = [
            {
                items: [
                    { label: 'Group', icon: 'pi pi-users', routerLink: ['/group'] },
                    { label: 'Transfer', icon: 'pi pi-send', routerLink: ['/transfer'] },
                    { label: 'MyAccount', icon: 'pi pi-github', routerLink: ['/account'] }
                ]
            }
        ]
    }
}