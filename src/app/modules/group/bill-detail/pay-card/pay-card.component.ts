import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-pay-card',
    templateUrl: 'pay-card.component.html',
    styleUrl: 'pay-card.style.scss'
})
export class PayCardComponent {
    @Input() amount: number = 0;

    pay() {
        alert(`Paid ${this.amount}`);
    }
}