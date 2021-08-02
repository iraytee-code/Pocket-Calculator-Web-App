
  const keys = document.querySelector(".calculator_keys");

  keys.addEventListener("click", (event) =>{
      const {target} = event;
  
      if(target.matches("button") && target.classList.contains("num-pad") || target.classList.contains("operator") || target.classList.contains("decimal")){
          //   select the element with class of screen and create a constant of display
        const display = document.querySelector(".screen");
          // update the display value into the calculator object displayValue
          if(display.value === "0"){
              display.value = event.target.value;
              return;
          }
          display.value += event.target.value;
      } 
  
      else if (target.matches("button") && target.classList.contains("delete")){
  
          const display = document.querySelector(".screen");
          if(display.value.length > 1){
              display.value = display.value.substring(0, display.value.length - 1 );
          } else {
              display.value = "0";
          }
      } 
  
      else if (target.matches("button") && target.classList.contains("reset")){
  
          const display = document.querySelector(".screen");
  
          display.value = "0";
  
      }
  
      else if (target.matches("button") && target.classList.contains("result")){
          const display = document.querySelector(".screen");
  
          display.value = eval(document.querySelector(".screen").value);
          
      }
  })
  
  
  
  