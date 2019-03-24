import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IteratorComponent } from './iterator/iterator.component';
import { PatternsComponent } from './patterns.component';

const routes: Routes = [
  { path: 'patterns/iterator', component: IteratorComponent },
  { path: 'patterns', component: PatternsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatternsRoutingModule {}
