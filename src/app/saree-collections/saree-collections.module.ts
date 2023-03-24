import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SareeCollectionsComponent } from './saree-collections.component';

import { MatCardModule } from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    SareeCollectionsComponent
  ],
  imports: [
    CommonModule,

    // Angular Material Design
    MatCardModule,
    MatRippleModule
  ],
  exports: [
    SareeCollectionsComponent
  ]
})
export class SareeCollectionsModule { }
