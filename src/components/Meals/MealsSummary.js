import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>We provide the best Asian food for you!</h2>
      <p>
        We provide Asian foods including Chinese, Japanese, Korean, and Tailand.
      </p>
      <p>
        Our mission is to provide the best Asian food in Wisconsin, Madison within 30 mins. 
      </p>
      <h2> View more on menu page</h2>
    </section>
  );
};

export default MealsSummary;
