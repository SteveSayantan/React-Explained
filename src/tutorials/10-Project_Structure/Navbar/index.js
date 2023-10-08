 /* 
    Now we shall use this index file just to export the navbar component.
 
    With this approach, the component resides in a separate file and the index file is used to just export it. 
    Therefore, we won't get confused by bunch of index tabs from different components, because for any modification we shall access the corresponding original file instead of the index one.

 */ 

    export {default} from './navbar'