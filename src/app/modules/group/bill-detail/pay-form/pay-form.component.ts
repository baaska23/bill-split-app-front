import { Component, Input } from "@angular/core";
import { FormField } from "src/app/modules/core/base-form/base-form.component";
import { CoreModule } from "src/app/modules/core/core.module";

@Component({
    selector: 'app-pay-form',
    templateUrl: 'pay-form.component.html',
})
export class PayFormComponent {
    fields: FormField[] = [
        { name: 'description', label: 'Description', type: 'text', required: true},
        { name: 'amount', label: 'Amount', type: 'number', required: true}
    ]

    model = {
        description: 'Kai birthday party',
        amount: 20
    }

    onSubmit(item: any) {
        alert('Paid successfully');
    }
}