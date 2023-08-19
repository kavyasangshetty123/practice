interface Icloths{
    name:string,
    color:string,
    prize:number,
    size?:string
}

let cloths:Icloths={name:'t-shirt',color:'green',prize:200}
console.log(cloths)
console.log(cloths.prize)
cloths.size="s"