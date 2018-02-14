export class Ingredient {
    /*
        Writing the constructor parameters with scope type in the declaration
        transforms the constructor parameter in an attribute of the class and
        fills it with the paramater's value,
        In this case: name and amount are parameter in the constructor AND
        attributes of the class Ingredient
    */
    constructor( public name: string, public amount: number ){}
}