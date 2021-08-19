/**
 *   Execution Contexts
 */


//  Multiple execution contexts
{
    // var apple = 10;

    // function totoal () {
    //     var price = 2;
    //     return apple * price;
    // }

    // var appleTotal = totoal();

    // console.log(appleTotal) // 20
}

//Global scope
{
    // var apple = 'apple';

    // if (true) {
    //     var apple = 'banana'; // Ghi đè lại biến apple ở global
    //     console.log('if apple: ', apple) //if apple: banana
    // }

    // console.log('Global apple: ', apple) // Global apple: banana
}

//Block scope
{
    // var apple = 'apple';

    // if (true) {
    //     let apple = 'banana'; //Biến có let có block scope nên ko ghi đè biến apple ở global
    //     console.log('if apple: ', apple) //if apple: banana
    // }

    // console.log('Global apple: ', apple) // Global apple: apple
}

// Chú ý
{
    //if (true) {
    //Trong này ko phải là new scope nhé!
    //Với biến let thì tồn tại trong này như là một block scope
    //Với biến var thì nó sẽ đưa là đầu scope là global scope
    //Đừng nhầm với Function Scope
    //Một function là một scope riêng
    //}
}

//Scope stack in the lexical environsment
{
    // var apple = 'global apple';
    // let banana = 'global banana';

    // {
    //     let banana = 'block banana';
    //     var grape = 'global grape';
    //     let orange = 'block orange';
    //     console.log(apple); //global apple
    //     console.log(banana); //block banana
    // }

    // console.log(banana); //global banana
    // console.log(grape); //undefinded
    // console.log(orange); //not defined
}

//Lexical scope as static scope
{
    // var apple = 'apple'
    // function isApple () {
    //     console.log(apple);
    // }

    // function isBanana () {
    //     var apple = 'bananna';
    //     isApple(); //resule: apple,
    //     //func isAplle được định nghĩa ở global scope
    //     //nên lexical scope của func isApple global scope
    //     // => outer của isApple execution context là global execution context
    // }

    // isBanana();
}

//Dynamic scope

{

    // {
    //     function isApple () {
    //         console.log(this.apple)
    //     }
    // }

    // {

    //     function isBanana () {
    //         let apple = 'banana'
    //         isApple.call(isBanana)
    //     }
    //     isBanana()

    // }

}

// var obj = {
//     firstName: 'Tu',
//     getName: function () { console.log(firstName) }
// }
// this.firstName = 'Son'
// obj.getName.call(this)


//Closure
{
    // function applePrice () {
    //     var fruit = 'apple';
    //     let price = 10;
    //     let discount = 0.05;

    //     var util = {

    //         getPrice: function () {
    //             console.log(discount)
    //             return price;
    //         },

    //         setPrice: function (newPrice) {
    //             console.log(fruit)
    //             price = newPrice;
    //         }
    //     };

    //     return util;
    // }

    // var price = applePrice();

    // console.log('%cBefore 👇🏼 ', 'color:red')
    // console.dir(price)
    // console.log(price)

    // price.setPrice(20); console.log('✅ Set price ✅')

    // console.log('%cAfter 👇🏼', 'color:green')
    // console.dir(price)
    // console.log(price.getPrice())
}



//This
// let chanh = {
//     type: 'cam',
//     price: 10,
//     // getPrice: function () {
//     //     let price = 20
//     //     function discount () { console.log(this.price) }
//     //     discount()
//     // },
//     getPrice: {
//         price: 20,
//         discount: {
//             getDiscount: function () {
//                 console.log(this.price)
//             }
//         }
//     },
//     getType: function () {
//         console.log(this.price)
//     }

// }

// chanh.getPrice.discount.getDiscount()

// {
//     const dauPhong = {
//         type: 'dau'
//         // getType: function () {
//         //     console.log(this.type)
//         // }
//     }

//     // chanh.getType.call(dauPhong)
// }
// const obj = {}
// obj.hihi
// console.log('--------------------')
// console.log(obj.concatdasdasd)

// function isApple () {
//     this.apple = 'apple'
//     // console.log(this)
//     let getFullName = {
//         fullName: function () {
//             console.log(this.apple)
//         }
//     }
//     // getFullName.fullName()
//     return getFullName
// }
// const appleFunc = isApple()
// const banana = {
//     apple: 'banana',
//     isBanana: appleFunc
// }
// appleFunc.fullName()
// banana.isBanana.fullName()

// Function declaration.
function showFavoriteIceCream () {
    const favIceCream = 'chocolate';
    console.log(`My favorite ice cream is ${favIceCream}`);
}

// Let's assign a property.
showFavoriteIceCream.flavours = ['chocolate', 'vanilla', 'strawberry'];

// Let's assign a function.
showFavoriteIceCream.showFlavours = function () {
    return this.flavours;
};

// Let's log the showFavoriteIceCream function.
console.log(showFavoriteIceCream.favIceCream);


///  KIEM TRA LAI VI DU NAY
{
    // const apple = {
    //     price: 10,
    //     getPrice: function () { console.log(this.price) },
    //     getThis: function () { console.log(this) }
    // }
    // console.dir(apple.getPrice) // [[Scope]]: Script ?
    // // apple.getPrice()
    // // apple.getThis()

}
