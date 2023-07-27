"use strict";
// S => State
// T => Type
// K => Key
// V => Value
// E => Element
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = useState();
newState.setState("foo");
console.log(newState.getState());
// newState.setState(123);
// console.log(newState.getState());
newState.setState("bla");
console.log(newState.getState());
