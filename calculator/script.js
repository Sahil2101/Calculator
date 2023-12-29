var result=document.getElementById("result");



function updateResult(value) {
    result.value += value;
  }

  function clearResult()
  {result.value="";}

  function deleteDigit(){
    result.value=result.value.slice(0,-1);
  }
  function calculateResult(){
    // var expression=result.value;
    let answer=eval(result.value);
    result.value=answer;
  }