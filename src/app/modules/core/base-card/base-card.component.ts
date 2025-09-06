import { Component, Input } from "@angular/core";

export interface Card {
    name: string;
    category: string;
    icon: string;
}

@Component({
    selector: 'app-base-card',
    templateUrl: 'base-card.component.html',
    styleUrls: ['base-card.style.scss']
})
export class BaseCardComponent {
    @Input() name: string;
    @Input() category: string;
    @Input() iconUrl?: string;
}