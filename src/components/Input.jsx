import react from "react";

function Input(props){
   return(
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">{props.label}</label>
                <input   type={props.type} name={props.name}  aria-describedby="emailHelp"  placeholder={props.placeholder} style={{width: "100%"}} onChange={props.onChangeHandler}></input>
{/*                 <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
 */}            </div>
   )
}

export default Input;