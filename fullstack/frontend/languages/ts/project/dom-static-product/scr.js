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
     {name:'item',image:'./9.webp'},
    {name:'item',vedio:'./1.mp4'},
    {name:'item',vedio:'./2.mp4'}
   

]

function displayProducts(){ 

        myproducts.map((item)=>{
            let image=document.createElement('img')
            image.src=item.image
            image.style.width="200px"
            image.style.height="200px"
           div.appendChild(image)
       
        })
          myproducts.map((item)=>{
           let vedio1=document.createElement('video')
           vedio1.type = "video/mp4";
           vedio1.src=item.vedio
           vedio1.style.width="200px"
           vedio1.style.height="200px"
           vedio1.controls
           div.appendChild(vedio1)
   
   
           
       })


    }
    console.log(apiData)

    

