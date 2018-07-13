import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    exports: [
        CdkTableModule,
        CdkTreeModule,
        AccordionModule,
        PanelModule,
        ButtonModule,
        RadioButtonModule,
        SidebarModule,
        TooltipModule,
        CheckboxModule
    ]
})
export class primeNgModule { }