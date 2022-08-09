import React , { useState } from "react";
function useToggle(initialVal = false){
    const [val,setVal] = useState(initialVal)

    const toogle =()=>{
        setVal(!val)
    }
    return [val,toogle]
}

export default useToggle;