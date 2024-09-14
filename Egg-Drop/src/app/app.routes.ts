import { Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'example', component: ExampleComponent },
    { path: 'challenge', component: ChallengeComponent }
];
