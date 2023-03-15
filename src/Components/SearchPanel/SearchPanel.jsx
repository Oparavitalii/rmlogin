import React  from "react";
import { useDispatch } from "react-redux";
import {FaSearch} from 'react-icons/fa';
import { setQuery } from "../../store/createSlice";
import "./index.scss";


export default function SearchPannel() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  }
  
  return (
    <section className="search">
      <div className="container">
        <form className="search__form">
          <div className="search__item">
            <label htmlFor="search__input">
              <FaSearch />
            </label>
            <input onChange={handleChange} id="search__input" type="text" placeholder="Filter by name..." />
          </div>
        </form>
      </div>
    </section>
  );
}
