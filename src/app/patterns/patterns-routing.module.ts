import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IteratorComponent } from './iterator/iterator.component';
import { PatternsComponent } from './patterns.component';
import { FactoryComponent } from './factory/factory.component';

const routes: Routes = [
  { path: 'patterns', component: PatternsComponent },
  { path: 'patterns/iterator', component: IteratorComponent },
  { path: 'patterns/factory', component: FactoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatternsRoutingModule {}
