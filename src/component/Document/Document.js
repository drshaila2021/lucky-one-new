import React from 'react';
import './Document.css'
const Document = () => {
    return (
        <div className="document">
           <div>
           <h5>How useState works</h5>
           <p>useState() in react is a Hook(special fuction) used in fuction components to add state. This takes initial state value as argument and return current value at first place and value updating function at second place when written an array destructured formet. The expression for useState() can be written as const[value,setValue]=useState(initial value) where at beginning value =initial value and the initial value can be a number, array, string, boolean or object and setValue is the function that is used to captute state change and updated result is give to value. </p>
           </div>
           <div>
           <h5>Props vs State</h5>
           <p>Props:</p>
           <p>Props the short of properties, are arguments that are  passed to the react Components via HTML like attribute as JSX syntax. This is received at react component as 'props' object. Props is ready only (immutable) and can't be modified at child component. Props can be passed between components (usually from parent to child). </p>
           <p>State:</p>
           <p>State in react is a built in object that hold information or property value about react components. The state is not read only, this can be changed (mutable) over time. State can't be passed from one componet to another. </p>
           </div>

        </div>
    );
}; 
 
export default Document;