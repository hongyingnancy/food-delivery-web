import { Fragment, useEffect, useState} from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/panda.jpeg";
import classes from "./Header.module.css";
import 'antd/dist/antd.css';
import { MenuOutlined, AimOutlined, PhoneFilled} from '@ant-design/icons';


const Header = (props) => {
  const [style1, setStyle1] = useState(classes.buttonClicked)//about
  const [style2, setStyle2] = useState(classes.button)//menu
  const [style3, setStyle3] = useState(classes.button)//contact

  useEffect(() => {
    // console.log("effect")
  }, [style1, style2, style3]);
  
function handleAbout(){
  props.onshowAbout()
  setStyle1(classes.buttonClicked)
  setStyle2(classes.button)
  setStyle3(classes.button)
}

function handleMenu(){
  props.onshowMenu()
  setStyle1(classes.button)
  setStyle2(classes.buttonClicked)
  setStyle3(classes.button)
}

function HandleContact(){
  props.onshowContact()
  setStyle1(classes.button)
  setStyle2(classes.button)
  setStyle3(classes.buttonClicked)
}


  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.h1}>Pandas Kitchen</h1>
        
        <button className={style1} onClick={handleAbout}>
        <AimOutlined />&nbsp;&nbsp;&nbsp;
          <span>Our Mission</span>
        </button>

        <button className={style2} onClick={handleMenu}>
        <MenuOutlined />&nbsp;&nbsp;&nbsp;
          <span>Menu</span>
        </button>

        <button className={style3} onClick={HandleContact}>
        <PhoneFilled /> &nbsp;&nbsp;&nbsp;
          <span>Contact</span>
        </button>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="kongfu-pandas" />
      </div>
    </Fragment>
  );
};

export default Header;
