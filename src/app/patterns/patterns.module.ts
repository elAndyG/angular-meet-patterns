import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatternsRoutingModule } from './patterns-routing.module';
import { PatternsComponent } from './patterns.component';
import { IteratorComponent } from './iterator/iterator.component';

@NgModule({
  declarations: [PatternsComponent, IteratorComponent],
  imports: [
    CommonModule,
    PatternsRoutingModule
  ]
})
export class PatternsModule { }
