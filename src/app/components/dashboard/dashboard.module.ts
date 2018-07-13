import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
    declarations: [],
    imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpModule,
        
    ],
    exports: [
        ReactiveFormsModule,
        HttpModule,
    ],
    entryComponents: [],

    providers: []
})
export class dashboardModule { }
