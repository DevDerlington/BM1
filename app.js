let btn = document.getElementById("btn");


btn.addEventListener("click", () => {
  const height=  parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("Weight").value);
  const result = document.getElementById("result");
  let height_status=false, weight_status=false;

  if(height === "" || isNaN(height) || (height <= 0)){
    document.getElementById("height-error").innerHTML= "Please enter a valid height";

  }else{
    document.getElementById("height-error").innerHTML = "";
    height_status=true;
  }
  
  if(weight === " " || isNaN(weight) || (weight <=0)){
    document.getElementById("Weight-error").innerHTML = "Please enter a valid weight";
    
  }else{
    document.getElementById("Weight-error").innerHTML = "";
    weight_status=true;
  }



  if(height_status  && weight_status){
    const bmi = (weight/((height*height)/10000)).toFixed(2);

    if(bmi < 18.6){
      result.innerHTML= " undersize : " + bmi;
    }else if(bmi >= 18.6 && bmi <= 24.9){
        result.innerHTML= " normal : " + bmi;
    }else{
        result.innerHTML= " oversize : " + bmi;
    } 
  }else{
      alert("The form has errors");
      result.innerHTML="";
  }
});


//REPLICAAAAAAAAAAAAAAAAAAAAAAA!!!!!!!!!!!!!!!!!!!!!1
// let button = document.getElementById('btn');

// button.addEventListener('click', () => {
//     const height = parseInt(document.getElementById('height').value);
//     const weight = parseInt(document.getElementById('Weight').value);
//     const result = document.getElementById('result');
//     let height_status=false, weight_status=false;

//     if(height === '' || isNaN(height) || (height <= 0)){
//         document.getElementById('height-error').innerHTML = 'Please provide a valid height';
//     }else{
//         document.getElementById('height-error').innerHTML = '';
//         height_status=true;
//     }

//     if(weight === '' || isNaN(weight) || (weight <= 0)){
//         document.getElementById('Weight_error').innerHTML = 'Please provide a valid weight';
//     }else{
//         document.getElementById('Weight-error').innerHTML = '';
//         weight_status=true;
//     }


// if(height_status  && weight_status){
//   const bmi = (weight/((height*height)/10000)).toFixed(2);

//   if(bmi < 18.6){
//     result.innerHTML= " undersize : " + bmi;
//   }else if(bmi >= 18.6 && bmi <= 24.9){
//       result.innerHTML= " normal : " + bmi;
//   }else{
//       result.innerHTML= " oversize : " + bmi;
//   } 
// }else{
//     alert("The form has errors");
//     result.innerHTML="";
// }

    // if(height_status && weight_status){
    //     const bmi = (weight / ((height*height)/10000)).toFixed(2);

    //     if(bmi < 18.6){
    //         result.innerHTML = 'Under weight : ' + bmi;
    //     }else if(bmi >= 18.6 && bmi < 24.9){
    //         result.innerHTML = 'Normal : ' + bmi;
    //     }else{
    //         result.innerHTML = 'Over weight : ' + bmi;
    //     }
    // }else{
    //     alert('The form has errors');
    //     result.innerHTML = '';
    // }
// });