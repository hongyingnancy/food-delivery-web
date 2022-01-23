import classes from './Contact.module.css';
import 'antd/dist/antd.css';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined, CopyrightOutlined} from '@ant-design/icons';

const Contact = () => {
  return (
    <section className={classes.summary}>
      <h2>Contact me</h2>
      <p>
        You can find me by 
      </p>
      <GithubOutlined onClick={() =>  window.location.href='https://github.com/yizhengshi'} style={{ fontSize: '300%'}}/>&nbsp;&nbsp;&nbsp;&nbsp;
      <LinkedinOutlined onClick={() =>  window.location.href='https://www.linkedin.com/in/yizhengshi'} style={{ fontSize: '300%'}}/>&nbsp;&nbsp;&nbsp;
      <TwitterOutlined onClick={() =>  window.location.href='https://www.twitter.com/YS58888'} style={{ fontSize: '300%'}}/><br></br>
      <br></br>
      <br></br>
      <p>
        Copyright <CopyrightOutlined /> 2022 Yizheng Shi
      </p>
      <p>
        All rights reserved. 
      </p>
      {/* </p><CopyrightOutlined />
      <p>Yizheng Shi</p> */}

    </section>
  );
};

export default Contact;
