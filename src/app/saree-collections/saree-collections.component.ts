import { Component } from '@angular/core';

@Component({
  selector: 'saree-collections',
  templateUrl: './saree-collections.component.html',
  styleUrls: ['./saree-collections.component.css']
})
export class SareeCollectionsComponent {
  
  collections = [
    {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'dog'
    },
    {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'dog'
    },
    {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'dog'
    },
    {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'dog'
    },
    {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'dog'
    },
    {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'dog'
    }
  ]

  constructor() {}


}
