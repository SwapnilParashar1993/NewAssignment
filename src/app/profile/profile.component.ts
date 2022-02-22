import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ViewComponent } from './view/view.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private resolver: ComponentFactoryResolver) {}


  ngOnInit(): void {
    const componentFactory = this.resolver.resolveComponentFactory(
      ViewComponent);
  // const dynamicallyCreatedComponent = componentFactory.create();
  }

}
