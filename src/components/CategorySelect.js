import React from 'react';
import { connect } from 'react-redux';

export const CategorySelect = (props) => (
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
        <option value='all'>
          All Categories
        </option>
      }
      <option value='general'>
        General
      </option>
      <option value='food'>
        Food
      </option>
      <option value='household'>
        Household
      </option>
      <option value='transportation'>
        Transportation
      </option>
      <option value='utilities'>
        Utilities
      </option>
      <option value='personal'>
        Personal
      </option>
      <option value='social'>
        Social
      </option>
    </select>
  </div>
);

export default connect()(CategorySelect);