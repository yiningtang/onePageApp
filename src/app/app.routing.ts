import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {JobsComponent} from './jobs/jobs.component';
import {MainComponent} from './main/main.component';
import {FooterComponent} from './footer/footer.component';

export const appRoutes :Routes =[
{path: '', redirectTo: 'home', pathMatch:'full'},
{path: 'home', component: MainComponent,
children: [
	{path: '', outlet:'menu', component: MenuComponent },
	{path: '', outlet: 'jobs', component: JobsComponent },
	{path: '', outlet: 'footer', component: FooterComponent}
]},
{path: '**', redirectTo: 'home', pathMatch:'full'}
];