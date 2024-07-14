import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { AlumniComponent } from './alumni/alumni.component';
import { Alumni1Component } from './alumni1/alumni1.component';
import { Alumni2Component } from './alumni2/alumni2.component';
import { CareerComponent } from './career/career.component';
import { Career2Component } from './career2/career2.component';
import { EventsComponent } from './events/events.component';
import { StoriesComponent } from './stories/stories.component';
import { Stories2Component } from './stories2/stories2.component';
import { Stories1Component } from './stories1/stories1.component';

const routes: Routes = [
  {
    path: 'home1',
    component: Home1Component,
    pathMatch: 'full',
  },
  {
    path: 'alumni',
    component: AlumniComponent,
  },
  {
    path: 'alumni1',
    component: Alumni1Component,
  },
  {
    path: 'alumni2',
    component: Alumni2Component,
  },
  {
    path: 'stories',
    component: StoriesComponent,
  },
  { path: 'interview/:id2', component: Stories2Component},
  { path: 'stories/:id', component: Stories1Component},
  { path: 'career', component: CareerComponent },
  { path: 'career2', component: Career2Component },
  { path: 'events', component: EventsComponent },
  { path: '**', redirectTo: 'home1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
