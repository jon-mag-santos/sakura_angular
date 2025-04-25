import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component ({
    selector: 'app-landing-page',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
    <section>
        <app-navbar></app-navbar>
        <h1>SAKURA RAMEN</h1>
        <span>THE BEST RAMEN IN TOWN</span>
    </section>
    `,
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

}