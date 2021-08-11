


function loadApi(){
    console.log('hello api');
    // fetch("https://fakestoreapi.com/products")
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    //     .catch(error => console.log(error))
    var xhr = new XMLHttpRequest();
           xhr.open("GET","https://fakestoreapi.com/products",true);
           xhr.onload = function(){
               if(this.status == 200){
                var result = JSON.parse(this.responseText);
                console.log(result);
                var output = '';

                result.map( i => {
                    console.log(i);
                    output += `
                    <div id="cart_item" key=${i.id} style="width:200px; margin:10px">
                        <img src=${i.image} alt="item4" style="width:200px;height:300px">
                        <p style="text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;"
                        >
                            ${i.title}
                        </p>
                        <p>${i.price}</p>
                        <p>⭐⭐⭐</p>
                    </div> 
                    `
                })
                
            document.getElementById('cart_items').innerHTML = output;
            }
           }
           xhr.send();
}