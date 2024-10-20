
const wrapper  = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price:45,
        colors: [
            {
                code: "white",
                img: "./img/Nike2.png",
            },
           
            {
                code: "black",
                img: "./img/NAir.png",
            },
           
           
        ],
    },

    {
        id: 2,
        title: "J4",
        price:75,
        colors: [
            {
                code: "aqua",
                img: "./img/j4 blue.png",
            },
            {
                code: "white",
                img: "./img/j4.png",
            },
            
        ],
    },


    {
        id: 3,
        title: "J1",
        price:50,
        colors: [
            {
                code: "lightblue",
                img: "./img/J1BLUE.png",
            },
            {
                code: "red",
                img: "./img/j1redn.png",
            },
        ],
    },

{
        id: 4,
        title: "Naked Wolfe",
        price:100,
        colors: [
            {
                code: "black",
                img: "./img/NWblack.png",
            },
            {
                code: "white",
                img: "./img/NW-white.png",
            },
        ],
    },

    {
        id: 5,
        title: "Balenciaga",
        price:60,
        colors: [
            {
                code: "black",
                img: "./img/balenciaga-black.png",
            },
            {
                code: "white",
                img: "./img/balewhite.png",
            },
        ],
    },


    {
        id: 6,
        title: "Sb Dunk",
        price:55,
        colors: [
            {
                code: "black",
                img: "./img/sbdunk.png",
            },
            {
                code: "orange",
                img: "./img/sbOr.png",
            },
        ],
    },
];

let choosenProduct = products[0]
const currentProductImg =document.querySelector(".productImg");
const currentProductTitle =document.querySelector(".productTitle");
const currentProductPrice =document.querySelector(".productPrice");
const currentProductColors =document.querySelectorAll(".color");
const currentProductSizes =document.querySelectorAll(".size");

menuItems.forEach((item,index)=> {
   item.addEventListener("click" , ()=> {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // change the choosen product
    choosenProduct= products[index]

    //change texts of currentProducts
    currentProductTitle.textContent= choosenProduct.title;
    currentProductPrice.textContent= "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0] .img
    
    //assign new colors
    currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor = choosenProduct.colors[index].code;

    });
});
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img

    });

});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor="white"
            size.style.color="black"   
        });
     size.style.backgroundColor="black"
     size.style.color="white"
    });
});

const productButton =document.querySelector(".productButton");
const payment= document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
payment.style.display="flex"
});

close.addEventListener("click", ()=>{
    payment.style.display="none"
    });