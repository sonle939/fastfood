const rating1 = require("../assets/rating1.png");
const rating2 = require("../assets/02.png");
const rating3 = require("../assets/rating3.png");
const rating4 = require("../assets/rating4.png");
const rating5 = require("../assets/rating5.png");

//chair
 const chair1 = require("../assets/funiture/chair/chair.png");
 const chair2 = require("../assets/funiture/chair/chair1.png");
 const chair3 = require("../assets/funiture/chair/chair2.png");
 const chair4 = require("../assets/funiture/chair/chair3.png");
 const chair5 = require("../assets/funiture/chair/chair4.png");
 const chair6 = require("../assets/funiture/chair/chair5.png");
 const chair7 = require("../assets/funiture/chair/chair6.png");

//mirorr

const mirorr = require("../assets/funiture/miror/miror.png");
const mirorr1 = require("../assets/funiture/miror/miror1.png");
const mirorr2 = require("../assets/funiture/miror/miror2.png");
const mirorr3 = require("../assets/funiture/miror/miror3.png");
const mirorr4 = require("../assets/funiture/miror/miror4.png");
const mirorr5 = require("../assets/funiture/miror/miror5.png");
const mirorr6 = require("../assets/funiture/miror/miror6.png");

//table

const table = require("../assets/funiture/table/table.png");
const table1 = require("../assets/funiture/table/table1.png");
const table2 = require("../assets/funiture/table/table2.png");
const table3 = require("../assets/funiture/table/table3.png");
const table4 = require("../assets/funiture/table/table4.png");
const table5 = require("../assets/funiture/table/table5.png");
const table6 = require("../assets/funiture/table/table6.png");

//clock

const clock = require("../assets/funiture/clock/clock.png");
const clock1 = require("../assets/funiture/clock/clock1.png");
const clock2 = require("../assets/funiture/clock/clock2.png");
const clock3 = require("../assets/funiture/clock/clock3.png");
const clock4 = require("../assets/funiture/clock/clock4.png");
const clock5 = require("../assets/funiture/clock/clock5.png");
const clock6 = require("../assets/funiture/clock/clock6.png");

//light

const light = require("../assets/funiture/light/light.png");
const light1 = require("../assets/funiture/light/light1.png");
const light2 = require("../assets/funiture/light/light2.png");
const light3 = require("../assets/funiture/light/light3.png");
const light4 = require("../assets/funiture/light/light4.png");
const light5 = require("../assets/funiture/light/light5.png");
const light6 = require("../assets/funiture/light/light6.png");

//customer

const son = require("../assets/funiture/customer/son.jpg");
const son1 = require("../assets/funiture/customer/son1.jpg");
const son2 = require("../assets/funiture/customer/son2.jpg");

const funiture = [
    {
        id: 1,
        title: "Chair name1",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: chair1,
        price: 2500,
        amount: 30,
        rating: rating4,
        category: "chair"
    },
    {
        id: 2,
        title: "Chair name2",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: chair2,
        price: 1850,
        amount: 80,
        rating: rating3,
        category: "chair"
    },
    {
        id: 3,
        title: "Chair name3",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: chair3,
        price: 1500,
        amount: 50,
        rating: rating5,
        category: "chair"
    },
    {
        id: 4,
        title: "Chair name4",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: chair4,
        price: 4000,
        amount: 40,
        rating: rating4,
        category: "chair"
    },
    {
        id: 5,
        title: "Chair name5",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: chair5,
        price: 5200,
        amount: 12,
        rating: rating5,
        category: "chair"
    },
    {
        id: 6,
        title: "Chair name6",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: chair6,
        price: 2800,
        amount: 35,
        rating: rating4,
        category: "chair"
    },
    {
        id: 7,
        title: "Chair name7",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: chair7,
        price: 3000,
        amount: 15,
        rating: rating4,
        category: "chair"
    },
    {
        id: 8,
        title: "Clock name",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: clock,
        price: 2300,
        amount: 55,
        rating: rating4,
        category: "clock"
    },
    {
        id: 9,
        title: "Clock name1",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: clock1,
        price: 1500,
        amount: 16,
        rating: rating4,
        category: "clock"
    },
    {
        id: 10,
        title: "Clock name2",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: clock2,
        price: 2900,
        amount: 50,
        rating: rating3,
        category: "clock"
    },
    {
        id: 11,
        title: "Clock name3",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: clock3,
        price: 3500,
        amount: 39,
        rating: rating4,
        category: "clock"
    },
    {
        id: 12,
        title: "Clock name4",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: clock4,
        price: 3460,
        amount: 46,
        rating: rating4,
        category: "clock"
    },
    {
        id: 13,
        title: "Clock name5",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: clock5,
        price: 5678,
        amount: 78,
        rating: rating4,
        category: "clock"
    },
    {
        id: 14,
        title: "Clock name6",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: clock5,
        price: 6500,
        amount: 55,
        rating: rating4,
        category: "clock"
    },
    {
        id: 15,
        title: "Mirror name",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: mirorr,
        price: 5000,
        amount: 24,
        rating: rating4,
        category: "mirror"
    },
    {
        id: 16,
        title: "Mirror name1",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: mirorr1,
        price: 4200,
        amount: 42,
        rating: rating3,
        category: "mirror"
    },
    {
        id: 17,
        title: "Mirror name2",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: mirorr2,
        price: 5100,
        amount: 15,
        rating: rating5,
        category: "mirror"
    },
    {
        id: 18,
        title: "Mirror name3",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: mirorr3,
        price: 4561,
        amount: 19,
        rating: rating4,
        category: "mirror"
    },
    {
        id: 19,
        title: "Mirror name4",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: mirorr4,
        price: 6500,
        amount: 56,
        rating: rating4,
        category: "mirror"
    },
    {
        id: 20,
        title: "Mirror name5",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: mirorr5,
        price: 7500,
        amount: 70,
        rating: rating4,
        category: "mirror"
    },
    {
        id: 21,
        title: "Mirror name6",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: mirorr6,
        price: 5600,
        amount: 23,
        rating: rating4,
        category: "mirror"
    },
    {
        id: 22,
        title: "Table name",
        description: "Lounge like you’re at a trendy club in the stylish Veneto armchair. Looking low and lovely this club-inspired armchair is just the thing for entertaining friends. The organic, unbroken lines of the design provide a casual cool look while bringing a dynamic atmosphere to you home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: table,
        price: 2300,
        amount: 25,
        rating: rating4,
        category: "table"
    },
    {
        id: 23,
        title: "Table name1",
        description: "Lounge like you’re at a trendy club in the stylish Veneto armchair. Looking low and lovely this club-inspired armchair is just the thing for entertaining friends. The organic, unbroken lines of the design provide a casual cool look while bringing a dynamic atmosphere to you home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: table1,
        price: 3200,
        amount: 29,
        rating: rating4,
        category: "table"
    },
    {
        id: 24,
        title: "Table name2",
        description: "Lounge like you’re at a trendy club in the stylish Veneto armchair. Looking low and lovely this club-inspired armchair is just the thing for entertaining friends. The organic, unbroken lines of the design provide a casual cool look while bringing a dynamic atmosphere to you home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: table2,
        price: 7990,
        amount: 36,
        rating: rating4,
        category: "table"
    },
    {
        id: 25,
        title: "Table name3",
        description: "Lounge like you’re at a trendy club in the stylish Veneto armchair. Looking low and lovely this club-inspired armchair is just the thing for entertaining friends. The organic, unbroken lines of the design provide a casual cool look while bringing a dynamic atmosphere to you home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: table3,
        price: 3456,
        amount: 65,
        rating: rating4,
        category: "table"
    },
    {
        id: 26,
        title: "Table name4",
        description: "Lounge like you’re at a trendy club in the stylish Veneto armchair. Looking low and lovely this club-inspired armchair is just the thing for entertaining friends. The organic, unbroken lines of the design provide a casual cool look while bringing a dynamic atmosphere to you home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: table4,
        price: 4210,
        amount: 16,
        rating: rating4,
        category: "table"
    },
    {
        id: 27,
        title: "Table name5",
        description: "Lounge like you’re at a trendy club in the stylish Veneto armchair. Looking low and lovely this club-inspired armchair is just the thing for entertaining friends. The organic, unbroken lines of the design provide a casual cool look while bringing a dynamic atmosphere to you home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: table5,
        price: 5321,
        amount: 52,
        rating: rating4,
        category: "table"
    },
    {
        id: 28,
        title: "Table name6",
        description: "Feel the warm embrace of the Charlotte armchair. Charlotte’s comfort, durability and beautiful design allow it to easily finds its place in any room. With an eye to natural forms, clean lines and comfort, designer Henrik Pedersen has created a small armchair with a big personality",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: table6,
        price: 6210,
        amount: 62,
        rating: rating4,
        category: ""
    },
    {
        id: 29,
        title: "Lamp name1",
        description: "Feel the warm embrace of the Charlotte armchair. Charlotte’s comfort, durability and beautiful design allow it to easily finds its place in any room. With an eye to natural forms, clean lines and comfort, designer Henrik Pedersen has created a small armchair with a big personality",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: light,
        price: 2550,
        amount: 50,
        rating: rating3,
        category: "lamp"
    },
    {
        id: 30,
        title: "Lamp name2",
        description: "Feel the warm embrace of the Charlotte armchair. Charlotte’s comfort, durability and beautiful design allow it to easily finds its place in any room. With an eye to natural forms, clean lines and comfort, designer Henrik Pedersen has created a small armchair with a big personality",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: light1,
        price: 3434,
        amount: 43,
        rating: rating4,
        category: "lamp"
    },
    {
        id: 31,
        title: "Lamp name3",
        description: "Feel the warm embrace of the Charlotte armchair. Charlotte’s comfort, durability and beautiful design allow it to easily finds its place in any room. With an eye to natural forms, clean lines and comfort, designer Henrik Pedersen has created a small armchair with a big personality",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: light2,
        price: 8200,
        amount: 100,
        rating: rating4,
        category: "lamp"
    },
    {
        id: 32,
        title: "Lamp name4",
        description: "Feel the warm embrace of the Charlotte armchair. Charlotte’s comfort, durability and beautiful design allow it to easily finds its place in any room. With an eye to natural forms, clean lines and comfort, designer Henrik Pedersen has created a small armchair with a big personality",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: light3,
        price: 5400,
        amount: 34,
        rating: rating4,
        category: "lamp"
    },
    {
        id: 33,
        title: "Lamp name5",
        description: "Feel the warm embrace of the Charlotte armchair. Charlotte’s comfort, durability and beautiful design allow it to easily finds its place in any room. With an eye to natural forms, clean lines and comfort, designer Henrik Pedersen has created a small armchair with a big personality",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: light4,
        price: 2654,
        amount: 19,
        rating: rating5,
        category: "lamp"
    },
    {
        id: 34,
        title: "Lamp name6",
        description: "Feel the warm embrace of the Charlotte armchair. Charlotte’s comfort, durability and beautiful design allow it to easily finds its place in any room. With an eye to natural forms, clean lines and comfort, designer Henrik Pedersen has created a small armchair with a big personality",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3
            },
         ],
        image: light5,
        price: 7800,
        amount: 56,
        rating: rating3,
        category: "lamp"
    },
    {
        id: 35,
        title: "Lamp name7",
        description: "Feel the warm embrace of the Charlotte armchair. Charlotte’s comfort, durability and beautiful design allow it to easily finds its place in any room. With an eye to natural forms, clean lines and comfort, designer Henrik Pedersen has created a small armchair with a big personality",
        customerreview: [
           {
            id: 1,
            fullname: "Le Xuan Son",
            imagecus: son,
            text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
            review: rating5
           },
           {
            id: 2,
            fullname: "Le Xuan Son1",
            imagecus: son1,
            text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
            review: rating4
           },
           {
            id: 3,
            fullname: "Le Xuan Son2",
            imagecus: son2,
            text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
            review: rating3
           },
        ],
        image: light6,
        price: 1500,
        amount: 50,
        rating: rating4,
        category: "lamp"
    }
]

const getAllFuniture = () => funiture;

const funitureData = {
   getAllFuniture
}

export default funitureData

