import React from 'react';
import  '../component/styles/nav.css'
import {BarChartOutlined,HeartOutlined,ShoppingOutlined,UserOutlined} from '@ant-design/icons';
// import { } from '@ant-design/colors';



import { Layout,Input } from 'antd';
const { Header, Footer, Content } = Layout;
const { Search } = Input;
const Nav = () => {
  const onSearch = (value) => console.log(value);

  return<>
    <Layout>
      <Header style={{ background: ' #fd7e14',display:"flex", justifyContent:"space-evenly",flexDirection:"row",width:"100%",height:'auto',border:"2px solid black" }}>

        <div><img src="https://reactstorefronts.com/static/img/logo_light.png"  alt="icon" /></div>
        <div style={{height:"3rem",width:'auto',border:'2px,solid,red',}}>
          <select class="select">
            <option>All</option>
            <option>Babies & Moms</option>
            <option>Books & Office</option>
            <option>Bag's</option>
            <option>Men's</option>
          </select>
       
        <Search style={{width:'100vw',margintop:'1rem'}}
          placeholder="I'm Shopping For"
             
          allowClear
          enterButton="Search"
          size="large"
        
          onSearch={onSearch}/>
          <BarChartOutlined style={{fontSize:'2rem'}} />
          <HeartOutlined  style={{fontSize:'2rem'}}/>
          <ShoppingOutlined  style={{fontSize:'2rem'}}/>
          <UserOutlined style={{fontSize:'2rem'}} />
            
            <h6>Login</h6>
            <h6>Register</h6>


        </div>


      </Header>
    
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
};
export default Nav;