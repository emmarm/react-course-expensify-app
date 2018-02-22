import React from 'react';
import { connect } from 'react-redux';

const CategorySelect = (props) => (
  <div>
    <select
      className="select"
      value={props.value}
      onChange={(e) => {
        const category = e.target.value;
        props.onCategoryChange(category);
      }}
    >
      {props.filter &&
        <option value='All'>
          All Categories
        </option>
      }
      <option value='General'>
        General
      </option>
      <option value='Food'>
        Food
      </option>
      <option value='Household'>
        Household
      </option>
      <option value='Transportation'>
        Transportation
      </option>
      <option value='Utilities'>
        Utilities
      </option>
      <option value='Personal'>
        Personal
      </option>
      <option value='Social'>
        Social
      </option>
    </select>
  </div>
);

export default connect()(CategorySelect);