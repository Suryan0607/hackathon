const makeapi = "https://makeup-api.herokuapp.com/api/v1/products.json";



 const header = document.createElement("div");
 header.setAttribute("class", "header");
 const heading = document.createElement("h2");

 heading.setAttribute("class", "heading");
 heading.innerText = "makeup kit";
 header.append(heading);

 document.body.append(header);

 const container = document.createElement("div");
 container.setAttribute("class", "first");

 const div = document.createElement("div");
 div.setAttribute("class", "second");

  var i = 0;

  var num = 10;

const make = async() => {

    try {
        let response = await fetch(makeapi);
        let data = await response.json();
 console.log(num, i);
        while( i < num ) {

            const div0 = document.createElement("div");
            div0.setAttribute("class", "common");

            const div1 = document.createElement("div");
            div1.setAttribute("class", "image");

            const div2 = document.createElement("div");
            div2.setAttribute("class", "list");
            

            let a = document.createElement('a');
            a.setAttribute('class', "a1");

            let img = document.createElement('img');
            img.setAttribute("class", "img");
            img.setAttribute("alt", "Error");

            let brand = document.createElement("h4");

            let product = document.createElement("h4");

            let product_type = document.createElement("h4");

            let product_link = document.createElement("a");
            product_link.setAttribute("class", "a2");

            let price = document.createElement("h4");

            let description = document.createElement("h5");


            a.setAttribute("href",data[i].product_link);

            img.setAttribute("src", data[i].api_featured_image);

            product_link.setAttribute("href", data[i].product_link);
           

            a.append(img);

            brand.innerText = `Brand : ${data[i].brand}`;

            product.innerText = `Product : ${data[i].name}`;

            product_type.innerText = `Product Type : ${data[i].product_type}`;

            price.innerText = `Price : ${data[i].price + data[i].price_sign}`;

            description.innerText = ` Description : ${data[i].description}`;

            product_link.innerText = data[i].name;



            div1.append(a, product_link);

            div2.append(brand, product, product_type, price, description);

            div0.append(div1, div2);

            div.append(div0);

            container.append(div);

           
        i++
       
        }

       document.body.append(container);

    
    } catch (error) {
        console.log(`we got error + ${error}`)

    }



}
 make();


window.addEventListener("scroll", () => {
     
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 700) {
     if (i === num) {
       i = num;
       num = num + 10;
        make();
     }
  }
});