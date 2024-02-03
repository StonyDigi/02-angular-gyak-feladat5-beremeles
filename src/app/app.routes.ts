import { Routes } from '@angular/router';
import { BeremelesComponent } from './beremeles/beremeles.component';

export const routes: Routes = [
    {path: 'beremeles', component: BeremelesComponent},
    {path: '', redirectTo: '/beremeles', pathMatch: 'full'},
    {path: '**', redirectTo: '/beremeles', pathMatch: 'full'}
];
