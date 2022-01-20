import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>We delivery the best food for you!</h2>
      <p>
        We provide Asian foods including Chinese, Japanese, Korean, and Tailand. You can view them on
        menu. 
      </p>
      <p>
        Our mission is to provide the best Asian food in Wisconsin, Madison within 30 mins. 
      </p>
    </section>
  );
};

export default MealsSummary;
