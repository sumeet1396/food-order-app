import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './Meals.module.scss';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Biryani',
    description: 'mixed rice dish made with Indian spices, rice, and meat',
    price: 450,
  },
  {
    id: 'm2',
    name: 'Pav Bhaji',
    description: 'fast food dish consisting of a thick vegetable curry served with a soft bread roll',
    price: 150,
  },
  {
    id: 'm3',
    name: 'kebab',
    description: 'grilled (or broiled) meat, with different kinds of spices',
    price: 250,
  },
  {
    id: 'm4',
    name: 'Gulab Jamun',
    description: 'milk-solid-based sweet',
    price: 100,
  },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />
    ));

    return (
    <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>
    );
};

export default AvailableMeals;
