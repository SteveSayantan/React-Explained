import { useState } from 'react';
import { Suspense,lazy } from 'react';

const SlowComponent= lazy(()=>import('./SlowComponent'))        // Now, we are importing this conditionally

const LatestReact = () => {
    
    const [show,setShow]=useState(false)

    // Now, SlowComponent is only fetched when the button is clicked i.e. show is true. Unlike the previous setup, where it was being fetched without any requirement just to increase the loadtime of the app.
    return (
    <section>
      <h4>Items Below</h4>
      <button className="btn" onClick={()=>setShow(!show)}>Toggle</button>

       {show&&                                // We need to wrap that particular bulky component like this. While that component loads, items in fallback will be shown. 

       <Suspense fallback={<h4>Loading...</h4>}>
           <SlowComponent/>
       </Suspense>
       
       }
    </section>
  );
};
export default LatestReact;