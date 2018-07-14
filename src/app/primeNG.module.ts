import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressBarModule } from 'primeng/progressbar';

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
        CheckboxModule,
        ProgressBarModule
    ]
})
export class primeNgModule { }