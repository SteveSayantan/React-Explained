/* 
    If we split our code in small managable chunks:

     1. We can reduce the initial javascript payload that needs to be loaded

     2. This results in faster load time and better performance.

     3. Here, only the code required for initial render of our app is loaded. The rest is loaded depending upon the user's interaction with app

     4. To lazy load our app, we use Suspense API

*/

import { useState } from 'react';
import SlowComponent from './SlowComponent';

const LatestReact = () => {
    
    const [show,setShow]=useState(false)
/* 
    With this setup, even when the show is false, we fetch the slowComponent which is a bulky component to be rendered.

    There is no guarantee that user will toggle the state. Therefore, it is just increasing the size of the JS payload.

    We only want to load this when the user toggles the button instead of loading during the initial render.

*/

    return (
    <section>
      <h4>Items Below</h4>
      <button className="btn" onClick={()=>setShow(!show)}>Toggle</button>
       {show&&<SlowComponent/>}
    </section>
  );
};
export default LatestReact;