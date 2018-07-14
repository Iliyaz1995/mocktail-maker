import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { dashboardModule } from './components/dashboard/dashboard.module';
import { FormsModule } from '@angular/forms';
import { primeNgModule } from './primeNG.module';
import { RecipeItemsComponent } from './components/dashboard/recipe-items/recipe-items.component';
import { GlassComponent } from './components/dashboard/glass/glass.component';
import { RecommendedItemsComponent } from './components/dashboard/recommended-items/recommended-items.component';
import { RecommendedItemsSlideComponent } from './components/dashboard/recommended-items-slide/recommended-items-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RecipeItemsComponent,
    GlassComponent,
    RecommendedItemsComponent,
    RecommendedItemsSlideComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    dashboardModule,
    BrowserAnimationsModule,
    primeNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
