import { Component, Input } from "@angular/core";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { PayFormComponent } from "../pay-form/pay-form.component";

@Component({
    selector: 'app-pay-card',
    templateUrl: 'pay-card.component.html',
    styleUrl: 'pay-card.style.scss'
})
export class PayCardComponent {
    @Input() amount: number = 0;

    constructor(
        private dialogService: DialogService
    ) {}

    onNew() {
        this.dialogService.open(PayFormComponent, {
            header: 'Pay form',
            width: '30vw',
            height: '30vw',
        })
    }
    
    pay() {
        alert(`Paid ${this.amount}`);
    }
}