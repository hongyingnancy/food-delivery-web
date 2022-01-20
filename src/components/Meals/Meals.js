import { Fragment} from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import Contact from './Contact';

const Meals = (props) => {
  const aboutIsShow = props.showAbout
  const menuIsShow = props.showMenu
  const contactIsShow = props.showContact

  console.log(aboutIsShow,menuIsShow,contactIsShow)

  // useEffect(() => {
  //   console.log("effect")
  // }, [aboutIsShow, menuIsShow, contactIsShow]);

  return (
    <Fragment>
      {aboutIsShow && <MealsSummary />}
      {menuIsShow && <AvailableMeals />}
      {contactIsShow && <Contact/>}
    </Fragment>
  );
};

export default Meals;
