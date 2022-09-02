import React from "react";
import { useDispatch } from "react-redux";
import "./Header.scss";
import { allData, filter } from "../../features/dataSlice";
import axios from "axios";
function Header() {
  const dispatch = useDispatch()
  const filterData = async(e) => { 
    console.log(e.target.value)
    if(e.target.value === 'all') {
      let response = await axios.get('http://fetest.pangeatech.net/data')
      dispatch(allData(response.data))
    }else {
      // dispatch(filtredData(e.target.value))
        let response = await axios.get('http://fetest.pangeatech.net/data')
        let data = response.data.filter((item) => {
          return item.revenue_type === e.target.value
      })
      dispatch(filter(data))
    }
  }
  return (
    <header>
      <div className="dropDownContainer">
        <select name="" id="" onChange={(e) => filterData(e)} className="selectBox">
          <option value="all">All revenue type</option>
          <option value="Revenue Type -1">Revenue Type -1</option>
          <option value="Revenue Type -3">Revenue Type -3</option>
          <option value="Revenue Type -4">Revenue Type -4</option>
          <option value="Revenue Type -5">Revenue Type -5</option>
          <option value="Revenue Type -6">Revenue Type -6</option>
          <option value="Revenue Type -7">Revenue Type -7</option>
          <option value="Revenue Type -11">Revenue Type -11</option>
        </select>
      </div>
      <div className="avaterName">Hello shuhaib</div>
    </header>
  );
}

export default Header;
