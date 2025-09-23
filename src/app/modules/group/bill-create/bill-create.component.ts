import { Component } from "@angular/core";
import { FormField } from "../../core/base-form/base-form.component";
import { BillListService } from "../bill-list/bill-list.service";
import { DynamicDialogConfig } from "primeng/dynamicdialog";

@Component({
    selector: 'app-bill-create',
    templateUrl: 'bill-create.component.html',
})
export class BillCreateComponent {
    groupId: any;

    constructor(
        private service: BillListService,
        private config: DynamicDialogConfig
    ) {
        this.groupId = this.config.data?.group_id;
    }
    fields: FormField[] = [
        { name: 'name', label: 'Bill name', type: 'text', required: true},
        { name: 'description', label: 'Bill description', type: 'text', required: true},
        { name: 'due_at', label: 'Bill due', type: 'date', required: true},
        { name: 'amount', label: 'Bill amount', type: 'number', required: true},
        { name: 'category', label: 'Bill category', type: 'text', required: true},
        { name: 'status', label: 'Bill status', type: 'text', required: true},
        // { name: 'group_id', label: 'Bill group id', type: 'number', required: true},
    ]

    onSubmit(bill: any) {
        bill.group_id = parseInt(this.groupId);
        console.log("bill.group_id :", bill.group_id )
        console.log("bill to submit: ", bill);
        
        this.service.createBill$(bill).subscribe({
            next: response => {
                alert("Bill created successfully");
            },
            error: err => {
                console.error('Error creating bill:', err);
                alert('Failed to create bill: ' + (err.error?.message || err.message));
            }
        });
    }
}