import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DummyMeals=[
    {
        id: "m1",
        name: "Sushi",
        description: "Finest Fish and Vegies",
        price: 22.99
    },
    {
        id: "m2",
        name: "kaju karri",
        description: "veg tadka",
        price: 16.5
    },
    {
        id: "m3",
        name: "Burger",
        description: "American raw meaty",
        price: 12.99
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy and green",
        price: 18.99
    } 
];
const AvailableMeals=()=>{
   const mealList=DummyMeals.map((meals)=><MealItem key={meals.id} id={meals.id} name={meals.name} description={meals.description} price={meals.price} />);
return(
    <section  class=" p-4">
        <Card>
     <ul>
        {mealList }
    </ul>
    </Card>
</section>
);
};
export default AvailableMeals;