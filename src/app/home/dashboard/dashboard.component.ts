import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/interfaces/car/car.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lastCars: ICar[];

  constructor() { }

  ngOnInit(): void {
    this.lastCars = [
      {
        title: 'Carro azul 2020 (back)',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et delectus? Quos rem minus, numquam architecto esse, quia, impedit velit facilis eaque voluptatibus nobis nostrum asperiores! Quisquam laborum dolorem a!',
        image: '../../../assets/images/cars/blue-car-back.png'
      },
      {
        title: 'Carro azul 2019 (front) ',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, tempora. Repellendus deserunt adipisci ea suscipit iure temporibus distinctio perspiciatis harum possimus saepe. Harum est sapiente ratione quis impedit, cum delectus?',
        image: '../../../assets/images/cars/blue-car-front.png'
      },
      {
        title: 'Carro azul 2017 (left)',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, voluptatum repellat vitae iusto laudantium magni? Qui dignissimos totam, praesentium consequatur repellat adipisci aspernatur veritatis, animi fugiat, amet alias neque aperiam.',
        image: '../../../assets/images/cars/blue-car-left.png'
      },
      {
        title: 'Carro gris 2020 (back)',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit vitae doloribus! Dolore expedita ipsam error vel consequatur commodi debitis, id ullam exercitationem aperiam maiores sapiente suscipit asperiores distinctio vitae.',
        image: '../../../assets/images/cars/gray-car-back.png'
      },
      {
        title: 'Carro gris 2019 (front)',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque commodi, beatae, quaerat laborum quia ab similique officia voluptate explicabo excepturi natus! Recusandae sequi eos sit aut asperiores tempore accusamus sapiente.',
        image: '../../../assets/images/cars/gray-car-front.png'
      },
      {
        title: 'Carro gris 2017 (left)',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit vitae doloribus! Dolore expedita ipsam error vel consequatur commodi debitis, id ullam exercitationem aperiam maiores sapiente suscipit asperiores distinctio vitae.',
        image: '../../../assets/images/cars/gray-car-left.png'
      },
      {
        title: 'Carro verde 2020 (back)',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur cum, nulla inventore tempora ipsam ducimus! Porro facere a accusamus sit, ducimus, nam doloribus quis mollitia ipsam fugit fugiat, necessitatibus dolor.',
        image: '../../../assets/images/cars/green-car-back.png'
      },
      {
        title: 'Carro verde 2019 (front)',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque commodi, beatae, quaerat laborum quia ab similique officia voluptate explicabo excepturi natus! Recusandae sequi eos sit aut asperiores tempore accusamus sapiente.',
        image: '../../../assets/images/cars/green-car-front.png'
      },
      {
        title: 'Carro verde 2017 (left)',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis odit voluptatibus totam, facere sequi numquam alias vitae hic eveniet quaerat unde, sed asperiores fugit maiores a assumenda dicta repellat temporibus?',
        image: '../../../assets/images/cars/green-car-left.png'
      },
      {
        title: 'Carro naranja 2020 (back)',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos aliquid, modi id ullam magnam repellendus porro officiis perferendis magni asperiores aspernatur vitae culpa, maiores, pariatur odit assumenda! Est, temporibus accusamus!',
        image: '../../../assets/images/cars/orange-car-back.png'
      },
      {
        title: 'Carro naranja 2019 (front)',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis odit voluptatibus totam, facere sequi numquam alias vitae hic eveniet quaerat unde, sed asperiores fugit maiores a assumenda dicta repellat temporibus?',
        image: '../../../assets/images/cars/orange-car-front.png'
      },
      {
        title: 'Carro naranja 2017 (left)',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla nam provident tenetur. Debitis laboriosam saepe animi veritatis, sit corrupti aspernatur ducimus ullam quae repellendus voluptatibus minus facere omnis et.',
        image: '../../../assets/images/cars/orange-car-left.png'
      },
    ];

  }

}
