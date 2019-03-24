import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatternsRoutingModule } from './patterns-routing.module';
import { PatternsComponent } from './patterns.component';
import { IteratorComponent } from './iterator/iterator.component';
import { FactoryComponent } from './factory/factory.component';

@NgModule({
  declarations: [PatternsComponent, IteratorComponent, FactoryComponent],
  imports: [
    CommonModule,
    PatternsRoutingModule
  ]
})
export class PatternsModule { }
