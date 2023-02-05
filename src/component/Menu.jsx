import css from "../styles/Menu.module.css";

function Menu({ pizzas }) {
  console.log(pizzas);
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Make You Fall In Love</span>
      </div>
    </div>
  );
}

export default Menu;
