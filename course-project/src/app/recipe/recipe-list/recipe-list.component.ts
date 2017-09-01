import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Just Flour', 'It\'s literally just flour.', 'http://www.gretchensbakery.com/wp-content/uploads/2012/03/flour-1024x681.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
