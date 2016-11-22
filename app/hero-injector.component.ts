import {Component} from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'hero-injector',
    templateUrl: 'hero-injector.component.html',
})
export class HeroInjector {
    hero: {
        name: string
    };

    constructor() {
        this.hero = {
            name: ''
        };
    }

    addHero() {
        console.log(this.hero);
    }
}
