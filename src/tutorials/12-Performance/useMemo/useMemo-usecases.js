/* 
    Good Examples:
    ------------
    1. 
        const value = useMemo(()=>numbers.reduce((a,v)=>a+v,0),[numbers])

        In this case, though we are returning a primitive value (i.e. the sum), the reduce function runs on each render, if not kept inside useMemo().
         This will affect the performance if the size of "numbers" array is big.
        
         Here, only if the numbers array change, the reduce function will execute. Therefore it is a good usecase of useMemo.

    2. 
        const value = useMemo(()=>numbers.map((v)=>v*100),[numbers])

        Here, we are returning an array. If the array is not memoized, the component that takes this array as its prop, will re-render (due to referential disintegrity).
         Only when the "numbers" array change, the map function will execute.

         Therefore it is a good usecase of useMemo.

    3. 
        const value = useMemo(()=>({first,last,full:`${first} ${last}`}),[first,last])

        Here, we are returning an object. If the object is not memoized, the component that takes this object as its prop, will re-render (due to referential disintegrity).
        
         Therefore it is a good usecase of useMemo.

    Bad Examples:
    ------------
    1. 
        const value = useMemo(()=>num1+num2,[num1,num2])

        Since we are returning a primitive value (i.e. the sum) we do not need to store it. Because primitives are compared by their value.

         We can just do, const value= num1+num2;

    2. 
        const value = useMemo(()=>`${first} ${last}`,[first,last])

        Since we are returning a primitive value (i.e. the string) we do not need to store it. Because
         primitives are compared by their value. 

         We can just do, const value= `${first} ${last}`;


    We can say, useMemo() memoizes the returned value of the function, prevents it from being executed on each render thereby increasing the efficiency (if the function is heavy) and/or maintaining referential integrity (if the returned value is of reference type)
*/