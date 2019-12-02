import React from 'react';
import Select from 'ps-react/Select';

const arrays = ["A", "B", "C", "D", "E", "F"];
/** Link Component */
export default function ExampleSelect() {
    return <Select   
    id="mySelection"
    name="cars"
    htmlFor="cars"
    options={arrays}
    className="form-control"></Select>
  }