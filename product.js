function addProduct(){
  product={
    id: proId.value,
    productName:proname.value,
    category:proCategory.value,
    desc:proDesc.value,
    rate:proRate.value,
    review:proReview.value
  }

  if(product.id==''||product.productName==''||product.category==''||product.desc==''||product.rate==''||product.review==''){
    alert("Please add full product details");
  }else{
    if(product.id in localStorage){
      alert("Product exist")
    }else{
      localStorage.setItem(product.id,JSON.stringify(product))
      alert("Product details added.")
    }
  }
}


function search(){
  let key= search1.value;
  let products=JSON.parse(localStorage.getItem(key))
  searchResult.innerHTML=`<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">FOUND product DETAILS</li>
    <li class="list-group-item"> ID: ${products.id}</li>
    <li class="list-group-item">Name: ${products.productName}</li>
    <li class="list-group-item">Category: ${products.category}</li>
    <li class="list-group-item">Description: ${products.desc}</li>
    <li class="list-group-item">Rate: ${products.rate} Years</li>
    <li class="list-group-item">Review: Rs.${products.review}</li>
  </ul>
</div>`
}

function clearData(){
  
}

function logout(){
  window.location-"./login.html";
}