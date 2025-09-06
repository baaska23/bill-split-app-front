import { SharedModule } from "./shared.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { BaseListComponent } from "./base-list/base-list.component";
import { BaseFormComponent } from "./base-form/base-form.component";
import { BaseCardComponent } from "./base-card/base-card.component";

@NgModule({
    declarations: [
        BaseListComponent,
        BaseFormComponent,
        BaseCardComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        BaseListComponent,
        BaseFormComponent,
        BaseCardComponent
    ]
})
export class CoreModule {}