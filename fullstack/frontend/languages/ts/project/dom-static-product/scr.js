let div=document.getElementById('root')


let myproducts=[
    {name:'t-shirt',image:'./1.jpeg'},
    {name:'shirt',image:'./2.jpeg'},
    {name:'pants',image:'./3.png'},
    {name:'shoes',image:'./4.jpg'},
    {name:'bangles',image:'./5.jpg'},
    {name:'phone',image:'./6.jpeg'},
    {name:'bag',image:'./6.jpg'},
    {name:'saari',image:'./7.jpeg'},
    {name:'laptop',image:'./7.jpg'},
    {name:'tops',image:'./8.webp'},
    {name:'jeans',image:'./9.jpg'},
    {name:'item',image:'./9.webp'}

]

function displayProducts(){ 
   



    myproducts.map((item)=>{
        let image=document.createElement('img')
        image.src=item.image
        image.style.width="200px"
        image.style.height="200px"
        div.appendChild(image)
    })
}
