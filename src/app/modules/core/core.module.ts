import { SharedModule } from "./shared.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BaseListComponent } from "./base-list/base-list.component";

@NgModule({
    declarations: [
        BaseListComponent
    ],
    imports: [
        SharedModule,
        CommonModule
    ],
    exports: [
        BaseListComponent
    ]
})
export class CoreModule {}