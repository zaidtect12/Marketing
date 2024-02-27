// function addTocart(){
//     var cart =document.getElementById("plus")
//     var pr=(cart.value)
//   var tot=(cart*100)
//   document.write ( '<table border=none> <tr> <th>'+cart.value+'</th> </tr> </table>')
// }


// function showdata ()  {
    
 
//      var mat= document.getElementById("Math");

//   var total = parseInt (mat.value) ;
//    var per = (total*300);
  
//    document.write('<table> <tr>  <th>Quantity</th>  </tr><tr><td>' +mat.value+'</td>  </tr> </table>');
//       document.write("<h3>total price  : <i><u>$"+ parseInt(per)+" </u></i></h3>")
  


//   }
  





    function increaseQuantity() {
        var i = document.getElementById("quantity");
        if (parseInt(i.textContent) < 25) {
            i.textContent = parseInt(i.textContent) + 1;
            prices();
        }
    }

    function decreaseQuantity() {
        var i = document.getElementById("quantity");
        if (parseInt(i.textContent) > 0) {
            i.textContent = parseInt(i.textContent) - 1;
            prices();
        }
    }

    function prices() {
        var quantity = parseInt(document.getElementById("quantity").textContent);
        var price = parseFloat(document.getElementById("price").getAttribute("data-price"));
        var res = quantity * price;
        document.getElementById("price2").innerHTML = "Total Amount: " + res.toFixed() + " Rs";
    }
