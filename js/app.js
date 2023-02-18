document.getElementById("blog").addEventListener("click",function(){
     window.location.href = 'blog.html';
});
// blog end 
          let count = 0;
 
// Triangle
document.getElementById("first-btn").addEventListener("click",function(){
     count ++;
   const numb1 =  numberInput('num1');
   const numb2 =  numberInput('num10');

     if(isNaN(numb1) || isNaN(numb2)){
          return alert("please input a number")
     }
     else if(numb1 === '' ||numb1 <0 || numb2 === '' || numb2 <0){
          return alert("please input positive number");
     }
   const title1 = title("title1");
   const ruselt = 0.5 *(numb1 * numb2);
   const ruselts = (ruselt).toFixed(2);
   
   setTr(count,title1,ruselts);

});

// Rectangle
document.getElementById('second-btn').addEventListener('click',function(){
     count++;
     const numb2 =  numberInput('num2');
     const numb20 =  numberInput('num20');

     if(isNaN(numb2) || isNaN(numb20)){
          return alert("please input a number")
       }
       else if(numb2 === '' ||numb2 <0 || numb20 === '' || numb20 <0){
          return alert("please input positive number");
       }
     const title2 = title("title2");
     const ruselt = numb2* numb20;
     const ruselts = (ruselt).toFixed(2);

     setTr(count,title2,ruselts);

});
// Parallelogram
document.getElementById('thired-card').addEventListener("click",function(){ 
     count++;
     const n3 = getinnText('num3');
     const n30 = getinnText('num30');
     const title3 = title("title3");
     const ruselt = n3 * n30 ;
     const ruselts = (ruselt).toFixed(2);
      
     setTr(count,title3,ruselts);
});

// Rhombus
document.getElementById("fourth-card").addEventListener("click",function(){
     count++;
     const num4 = getinnText('num4');
     const num40 = getinnText('num40');
     const title4 = title("title4");
     const ruselt = 0.5 * num4 * num40;
     const ruselts = (ruselt).toFixed(2);

     setTr(count,title4,ruselts);
});
// Pentagon
document.getElementById("five-card").addEventListener("click",function(){
     count++;
     const num5 = getinnText('num5');
     const num50 = getinnText('num50');
     const title5 = title("title5");
     const ruselt = 0.5 * num5 * num50;
     const ruselts = (ruselt).toFixed(2);
      
     setTr(count,title5,ruselts);
});
// Ellipse
document.getElementById("six-card").addEventListener("click",function(){
     count++;
     const num6 = getinnText('num6');
     const num60 = getinnText('num60');
     const title6 = title("title6");
     const ruselt = Math.PI * (num6 * num60);
     const ruselts = (ruselt).toFixed(2);
     
     setTr(count,title6,ruselts);

});
     // define the title card
     function title(id){
          const title = document.getElementById(id);
          return title.innerText;
     };

     // define the cards innerText
     function getinnText(id){
          const element = document.getElementById(id);
          const elementString = element.innerText;
          const elementNumber = parseInt(elementString);
             return elementNumber;
     };
     
     // define the input velue 
      function numberInput(id){
          const number = document.getElementById(id);
          const numberString = number.value;
          const numbers = parseFloat(numberString);
               return numbers;
      };

     //  create table tr element 

      function setTr(count,title,ruselts){
          const tr = document.createElement("tr")
          tr.innerHTML = `
          <td>${count}</td>
          <td>${title}</td>
          <td>${ruselts} cm<sup>2</sup></td>
          <td>Con to m <sup>2</sup></td>
               `;
          document.getElementById("tbody-r").appendChild(tr);
      };