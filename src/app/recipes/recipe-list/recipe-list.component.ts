import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a simply a test',
      'https://dummyimage.com/600x400/efefef/000'
    ),
    new Recipe(
      'A test recipe',
      'This is a simply a test',
      'https://dummyimage.com/600x400/efefef/000'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
