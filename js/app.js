document.getElementById("blog").addEventListener("click",function(){
     window.location.href = 'blog.html';
})
// blog end 
// first card
document.getElementById("first-btn").addEventListener("click",function(){
   const numb1 =  numberInput('num1');
   const numb2 =  numberInput('num10');
   const ruselt = 0.5 *(numb1 * numb2);
   
  const tr = document.createElement("tr")
   tr.innerHTML = `
          <td>${1}</td>
          <td>Triangle</td>
          <td>${ruselt} cm<sup>2</sup></td>
          <td>btn</td>
   `;
   document.getElementById("tbody-r").appendChild(tr)

});

// secound card
document.getElementById('second-btn').addEventListener('click',function(){
     const numb2 =  numberInput('num2');
     const numb20 =  numberInput('num20');
     const ruselt = numb2* numb20;
     const tr = document.createElement("tr")
   tr.innerHTML = `
          <td>${2}</td>
          <td>Rectangle</td>
          <td>${ruselt} cm<sup>2</sup></td>
          <td>btn</td>
   `;
   document.getElementById("tbody-r").appendChild(tr)

});


 
function numberInput(id){
    const number = document.getElementById(id);
   const numberString = number.value;
   const numbers = parseFloat(numberString);
   return numbers;
}