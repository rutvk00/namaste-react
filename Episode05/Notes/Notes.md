Two Types of Export/Import :
    - Default Export/Import :
        - export default variable_name;
        - import variable_name from 'Path of variable_name from where is exported';

    - Named Export/Default :
        - export const variable_name;
        - import {variable_name} from 'Path of variable_name from where is exported';

State Variable : Super powerful variable

React Hooks : It is normal Javascript functions written by Facebook Developers (Utility function of react)
- useState() : Super powerful variable in React
    - Whenever state variable changes react re-render the components


Re-consiliation Algorithm (React Fiber) : 
    - Vitual DOM : It is Representaion of actual DOM. (Javasctipt of Object(Nested Object like React Element))
    - ![Vitual DOM - Nested Object of React Elements](<Virtual DOM.png>) 

    - Diffing Algo : It calculate difference between updated Vitual DOM and previous Virtual DOM. According to difference it update(Re-render) Actual DOM.

    - ![Diffing_Algo](<Diffing_Algo.png>)
    - ![Diffing_Algo-2](<Diffing_Algo-2.png>)

