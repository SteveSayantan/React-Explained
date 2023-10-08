import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
    const [shipping,setShipping]=useState(false)

    const [framework,setFramework]=useState('react') // We can choose any value from the list above as the default value 

    const handleShipping=(e)=>{
        // console.log(e.target.checked)
        setShipping(e.target.checked)
    }
    const handleFramework=(e)=>{
        // console.log(e.target.value)
        setFramework(e.target.value)
    }

  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input type="checkbox" id='shipping' onChange={handleShipping} checked={shipping}/>
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
            <select  id="framework" value={framework} onChange={handleFramework}>
                {frameworks.map((framework)=>{
                    return <option key={framework}>{framework}</option> /* Setting the name as key as it is an unique value */
                })}
            </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;