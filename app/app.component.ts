import { Component }          from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <hero-injector></hero-injector>
  `,
})
export class AppComponent {
  public title = 'Angular 2 Basic AoT setup';
}


