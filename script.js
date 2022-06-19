const makeapi = "http://makeup-api.herokuapp.com/api/v1/products.json";


const make = async() => {

    try {
        let response = await fetch(makeapi);
        let data = await response.json();

        let header = document.createElement('div');
        let heading = document.createElement('h2');
        heading.setAttribute('class', "head");
        heading.innerText = "makeup kit";
        header.append(heading)

        document.body.append(header)


        let container = document.createElement('div')
        container.setAttribute('class', "first")

        let div = document.createElement('div');
        div.setAttribute('class', 'second');

        for (let i of data) {

            let div0 = document.createElement('div');
            div0.setAttribute('class', "common");

            let div1 = document.createElement('div');
            div1.setAttribute('class', 'image');

            let div2 = document.createElement('div');
            div2.setAttribute('class', "list");

            let a = document.createElement('a');
            a.setAttribute('class', "a1");
            a.setAttribute('href', i.product_link)

            let img = document.createElement('img');
            img.setAttribute('src', i.image_link);
            img.setAttribute('class', "img");
            img.setAttribute('alt', 'Error');

            let brand = document.createElement('h4');
            let product = document.createElement('h4');
            let product_type = document.createElement('h4');
            let product_link = document.createElement('a');
            let price = document.createElement('h4');
            let description = document.createElement('h5');

            product_link.setAttribute('href', i.product_link);
            product_link.setAttribute('class', "a2");

            a.append(img);

            brand.innerText = `Brand : ${i.brand}`;

            product.innerText = `Product : ${i.name}`

            product_type.innerText = `Product Type : ${i.product_type}`;

            price.innerText = `Price : ${ i.price + i.price_sign}`;

            description.innerText = ` Description : ${ i.description}`;

            product_link.innerText = i.name;



            div1.append(a, product_link);
            div2.append(brand, product, product_type, price, description);

            div0.append(div1, div2);

            div.append(div0);

            container.append(div);


        }

        document.body.append(container);
        window.addEventListener('scroll', () => {
            if (window.innerHeight + window.scrollY > document.body.offsetHeight - 500) {

            }
        })

    } catch (error) {
        console.log(`we got error + ${error}`)

    }



}

make()