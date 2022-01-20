import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import sushi from "../../assets/Sushi.jpeg";
import TaiNoodle from "../../assets/Unagi.jpeg"
import Wanton from "../../assets/Wanton.jpeg"
import Dandan from "../../assets/Dandan.jpeg"
import xiaolongbao from "../../assets/beef.jpeg"
import Sashimi from "../../assets/Sashimi.jpeg"
import Bibimbap from "../../assets/Bibimbap.jpeg"
import Okonomiyaki from "../../assets/Okonomiyaki.jpeg"
import tteokbokki from "../../assets/tteokbokki.jpeg"
import TomKhaGa from "../../assets/TomKhaGa.jpeg"
import Takoyaki from "../../assets/Takoyaki.jpeg"
import Tom from "../../assets/Tom.jpeg"
import Khao from "../../assets/Khao.jpeg"
import chickin from "../../assets/chickin.jpeg"




const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "A staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold.",
    price: 22.99,
    type: "Japanese",
    picture: sushi
  },
  {
    id: "m2",
    name: "Tom Kha Ga",
    description: "Tom kha gai is unique in that it typically comes with lots of creamy coconut milk creating a rich sweet soup. Like most Thai foods, vegetarian options are easily adaptable by substituting a few ingredients.",
    price: 16.5,
    type: "Tailand",
    picture: TomKhaGa
  },
  
  {
    id: "m3",
    name: "Wonton Soup ",
    description: "Wontons are a type of Chinese dumpling. They’re made with ground meat wrapped in a dumpling wrapper and steamed until cooked and tender.",
    price: 17.9,
    type: "Chinese",
    picture: Wanton
  },
  {
    id: "m4",
    name: "Sashimi",
    description: "Sashimi is raw fish or meat that has been expertly cut into thin slices and typically comes served with daikon radish, pickled ginger, wasabi and soy sauce.",
    price: 16.8,
    type: "Japanese",
    picture: Sashimi
  },
  {
    id: "m5",
    name: "Bibimbap",
    description: "Warm rice topped with mixed vegetables, beef or chicken, and raw egg, as well as soy sauce and a dollop of chilli pepper paste for seasoning. Ideal for seafood lovers",
    price: 17.5,
    type: "Korean",
    picture: Bibimbap
  },
  {
    id: "m6",
    name: "Okonomiyaki",
    description: "Okonomiyaki is made by mixing together batter, sliced cabbage, and other savoury ingredients; spooning the mixture onto a hot plate; and then pan-frying as you would a pancake.",
    price: 13.99,
    type: "Japanese",
    picture: Okonomiyaki
  },
  {
    id: "m7",
    name: "Dandan Noodle",
    description: "Dan dan noodles is popular in China becasue of the spicy sauce made from chili oil, scallions, and Sichuan pepper. There are four different elements to this dish – the meat, the pickled veggies, the sauce, and the chili oil ",
    price: 13.89,
    type: "Chinese",
    picture: Dandan
  },
  {
    id: "m8",
    name: "Tteokbokki",
    description: "Traditional Korean street food that’s made with thick slices of garaetteok (boiled rice cake), fish cake, onions, diced garlic, salt, sugar and assorted vegetables that are stir-fried in sweet red chili sauce.",
    price: 15.7,
    type: "Korean",
    picture: tteokbokki
  },
  {
    id: "m9",
    name: "Unagi no Kabayaki",
    description: "Unagi no kabayaki is made by brushing prepared eel fillets with a sweetened soy sauce-based kabayaki sauce and broiling them on a grill.",
    price: 12.99,
    type: "Japanese",
    picture: TaiNoodle
  },
  
  {
    id: "m10",
    name: "Shanghai Xiaolongbao",
    description: "Soup dumplings are traditionally made with a plain pork filling, while some versions contain a mixture of pork and crab",
    price: 12.3,
    type: "Chinese",
    picture: xiaolongbao
  },
  {
    id: "m11",
    name: "Takoyaki",
    description: "his delicacy is cooked using a special hot plate with rows of half-spherical moulds. Each of the moulds is filled with a savoury batter mixture before a bite-size piece of tako octopus meat is inserted into the middle.",
    price: 13.9,
    type: "Japanese",
    picture: Takoyaki
  },
  {
    id: "m12",
    name: "Tom Yum Goong",
    description: "Tom yum goong is created with quintessential Thai ingredients like lemongrass, chilli, galangal, kaffier lime leaves, shallots, fresh lime juice and plenty of fish sauce. Fresh prawns and mushrooms are added and coconut cream if you want the creamy version.",
    price: 15.2,
    type: "Tailand",
    picture: Tom
  },
  {
    id: "m13",
    name: "Samgyeopsal",
    description: "Korean dish that requires little culinary skills, where chunky slices of pork belly are cooked on a grill at the diners’ table. It's then wrapped in lettuce or sesame leaf with dipping sauces and accompaniments such as button mushrooms, green chili peppers, green onions, raw onions and garlic, as well as kimchi.",
    price: 14.3,
    type: "Korean",
    picture: chickin
  },
  {
    id: "m14",
    name: "Khao Pad",
    description: "Khao pad is maybe comparable to England’s love of sandwiches – consumed on mass khao pad is a Thai go-to. Khao pad simply translates to “fried rice” and is just that with some egg, onion and that’s about it.",
    price: 17.9,
    type: "Tailand",
    picture: Khao
  },
];



const AvailableMeals = () => {

  let mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      picture ={meal.picture}
    />
  ));
  const [changedMeal, setMeal] = useState(mealsList);
  const handleAll=()=>{
    setMeal(mealsList)
  }
  
  const handleChi=()=>{
    HandleSelection("Chinese")
  }
  
  const handleJap=()=>{
    HandleSelection("Japanese")
  }
  
  function handleTai() {
    HandleSelection("Tailand")
  }
  function handleKor(){
    HandleSelection("Korean")
  }
  
  useEffect(() => {
  }, [changedMeal]);

  function HandleSelection(country){
    let temp = DUMMY_MEALS.filter(meal => 
      meal.type === country 
   );
   temp = temp.map( meal =>
     <MealItem
       key={meal.id}
       id={meal.id}
       name={meal.name}
       description={meal.description}
       price={meal.price}
       picture ={meal.picture}
     />
   )
   setMeal(temp)
  }

  return (
    <section className={classes.meals}>
      <div className="site-button-ghost-wrapper">
        <Button type="ghost" danger ghost onClick={handleAll} >
          All(14)
        </Button>&nbsp;&nbsp;&nbsp;
        <Button type="primary" danger ghost onClick={handleJap}>
          Japanese(5)
        </Button>&nbsp;&nbsp;&nbsp;
        <Button type="primary" danger ghost onClick={handleChi}>
          Chinese(3)
        </Button>&nbsp;&nbsp;&nbsp;
        <Button type="primary" danger ghost onClick={handleTai}>
          Tailand(3)
        </Button>&nbsp;&nbsp;&nbsp;
        <Button type="primary" danger ghost onClick={handleKor}>
          Korean(3)
        </Button>&nbsp;&nbsp;&nbsp;
      </div>
      ,
      <Card>
        <ul>{changedMeal}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
