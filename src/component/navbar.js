import React from 'react';
import  '../component/styles/nav.css'
import {AlignRightOutlined, BarChartOutlined,HeartOutlined,ShoppingOutlined,UserOutlined,MenuOutlined} from '@ant-design/icons';
// import { } from '@ant-design/colors';

import { Input } from 'antd';
const Navbar = () => {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    return<>
      <div>
        <img src="	https://reactstorefronts.com/static/img/logo_light.png" alt="icon"/>
        <div style={{height:"3rem",width:'auto',border:'2px,solid,red',}}>
          <select class="select">
            <option>All</option>
            <option>Babies & Moms</option>
            <option>Books & Office</option>
            <option>Bag's</option>
            <option>Men's</option>
          </select>
       
        <Search style={{width:'90rem',margintop:'1rem'}}
          placeholder="I'm Shopping For"
             
          allowClear
          enterButton="Search"
          size="large"
        
          onSearch={onSearch}/>
          <BarChartOutlined style={{fontSize:'4rem'}} />
          <HeartOutlined  style={{fontSize:'4rem'}}/>
          <ShoppingOutlined  style={{fontSize:'4rem'}}/>
          {/* <div style={{display:'flex'}} > */}
          <UserOutlined style={{fontSize:'4rem'}} />
            <div class=" flex">
            <h6>Login</h6>
            <h6>Register</h6>
            </div>

            </div>
        {/* </div> */}
     
      

      </div>
     {/* <hr/>
      <section>
           <div>
            <MenuOutlined />
            <h3>Shop By Department</h3>
            </div>
                 <select>
                    <option>Home</option>
                    <option>Home Autoparts</option>
                    <option>Home Technology</option>
                    <option>Home Orgenic</option>
                 </select>
            <div>



            </div>

     </section>      
  */}
      


    </>
};


export default Navbar;