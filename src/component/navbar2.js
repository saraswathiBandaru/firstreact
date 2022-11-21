import React from 'react';
import  '../component/styles/navbar.css';
import {MenuOutlined} from '@ant-design/icons';

const Navbar2=()=>{
    return<>
     <hr/>
     <div class="flexone">
    <div>
       
    <MenuOutlined/>
    <h2>Shop By Department</h2>
    </div>
    <div>
     <select>
        <option>
            Home
        </option>
        <option>Home Technology</option>
        <option>Home Orgenic</option>
     </select>

     <select>
        <option>shop</option>
     </select>
     <select>
        <option>Pages</option>
     </select>
     <select>
        <option>Blogs</option>
     </select>
    </div>

    <div class="font">
        <p>Sell on Martfury |</p>
        <p>Tract Your Order |</p>
        <p>USD |</p>
        <p>English |</p>
    </div>
    </div>

    </>
}
export default Navbar2;