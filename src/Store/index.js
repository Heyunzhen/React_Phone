import {createStore} from "redux"


var defaultstate={
    name:[]
}

const store=createStore((state=defaultstate,action)=>{
    
    var {type,payload}=action


    switch (type) {
        case  'my':
            return {...state,name:payload}
        default:
            return state

    }

})

export default store