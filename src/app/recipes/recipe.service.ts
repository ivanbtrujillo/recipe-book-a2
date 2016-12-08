import { Recipe } from './recipe';
import { Ingredient } from '../../shared/ingredient';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Ensalada', 'Con tomate y cebolla', 'http://brownbagonline.com/wp-content/uploads/2013/07/MissMaeSalad.png',
      [ new Ingredient('lechuga',2),
        new Ingredient('tomate',3),
        new Ingredient('cebolla',1)
      ]),
    new Recipe('Tortilla', 'Con chorizo', 'http://www.seriouseats.com/images/20120617-broccoli-tortilla-2.jpg',
      [ new Ingredient('papas',5),
        new Ingredient('huevos',5),
        new Ingredient('chorizo',1)
      ])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
