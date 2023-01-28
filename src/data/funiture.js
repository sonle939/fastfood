const rating1_image = require("../assets/rating1.png");
const rating2_image = require("../assets/02.png");
const rating3_image = require("../assets/rating3.png");
const rating4_image = require("../assets/rating4.png");
const rating5_image = require("../assets/rating5.png");

//chair
 const chair1_image = require("../assets/funiture/chair/chair.jpg");
 const chair2_image = require("../assets/funiture/chair/chair1.jpg");
 const chair3_image = require("../assets/funiture/chair/chair2.jpg");
 const chair4_image = require("../assets/funiture/chair/chair3.jpg");
 const chair5_image = require("../assets/funiture/chair/chair4.jpg");
 const chair6_image = require("../assets/funiture/chair/chair5.jpg");
 const chair7_image = require("../assets/funiture/chair/chair6.jpg");

//mirorr

const mirorr_image = require("../assets/funiture/miror/miror.jpg");
const mirorr1_image = require("../assets/funiture/miror/miror1.jpg");
const mirorr2_image = require("../assets/funiture/miror/miror2.jpg");
const mirorr3_image = require("../assets/funiture/miror/miror3.jpg");
const mirorr4_image = require("../assets/funiture/miror/miror4.jpg");
const mirorr5_image = require("../assets/funiture/miror/miror5.jpg");
const mirorr6_image = require("../assets/funiture/miror/miror6.jpg");

//table

const table_image = require("../assets/funiture/table/table.jpg");
const table1_image = require("../assets/funiture/table/table1.jpg");
const table2_image = require("../assets/funiture/table/table2.jpg");
const table3_image = require("../assets/funiture/table/table3.jpg");
const table4_image = require("../assets/funiture/table/table4.jpg");
const table5_image = require("../assets/funiture/table/table5.jpg");
const table6_image = require("../assets/funiture/table/table6.jpg");

//clock

const clock_image = require("../assets/funiture/clock/clock.jpg");
const clock1_image = require("../assets/funiture/clock/clock1.jpg");
const clock2_image = require("../assets/funiture/clock/clock2.jpg");
const clock3_image = require("../assets/funiture/clock/clock3.jpg");
const clock4_image = require("../assets/funiture/clock/clock4.jpg");
const clock5_image = require("../assets/funiture/clock/clock5.jpg");
const clock6_image = require("../assets/funiture/clock/clock6.jpg");

//light

const light_image = require("../assets/funiture/light/lamp.jpg");
const light1_image = require("../assets/funiture/light/lamp1.jpg");
const light2_image = require("../assets/funiture/light/lamp2.jpg");
const light3_image = require("../assets/funiture/light/lamp3.jpg");
const light4_image = require("../assets/funiture/light/lamp4.jpg");
const light5_image = require("../assets/funiture/light/lamp5.jpg");
const light6_image = require("../assets/funiture/light/lamp6.jpg");

//customer

const son_image = require("../assets/funiture/customer/son.jpg");
const son1_image = require("../assets/funiture/customer/son1.jpg");
const son2_image = require("../assets/funiture/customer/son2.jpg");
 
const funituredata = [
    {
        id: 1,
        title: "Chair name1",
        description: "Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        type: "selling",
        image: chair1_image,
        price: 2500,
        amount: 30,
        manufacturer: "Calvin Klein",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: chair2_image,
        price: 1850,
        amount: 80,
        manufacturer: "Diesel",
        rating: rating3_image,
        ratingtext: "3",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: chair3_image,
        price: 1500,
        amount: 50,
        type: "selling",
        manufacturer: "Calvin Klein",
        rating: rating5_image,
        ratingtext: "5",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: chair4_image,
        type: "selling",
        price: 4000,
        amount: 40,
        manufacturer: "Diesel",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: chair5_image,
        price: 5200,
        amount: 12,
        type: "selling",
        rating: rating5_image,
        ratingtext: "5",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: chair6_image,
        price: 2800,
        amount: 35,
        type: "selling",
        manufacturer: "Calvin Klein",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: chair7_image,
        price: 3000,
        type: "selling",
        amount: 15,
        manufacturer: "Diesel",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: clock_image,
        price: 2300,
        amount: 55,
        manufacturer: "Calvin Klein",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: clock1_image,
        price: 1500,
        type: "selling",
        amount: 16,
        manufacturer: "Diesel",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: clock2_image,
        price: 2900,
        amount: 50,
        manufacturer: "Diesel",
        rating: rating3_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: clock3_image,
        price: 3500,
        amount: 39,
        type: "selling",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: clock4_image,
        price: 3460,
        amount: 46,
        manufacturer: "Diesel",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: clock5_image,
        price: 5678,
        pricesale: 5000,
        amount: 78,
        type: "discount",
        manufacturer: "Diesel",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: clock6_image,
        price: 6500,
        amount: 55,
        manufacturer: "Tommy Hifiger",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: mirorr_image,
        price: 5000,
        type: "newmod",
        amount: 24,
        manufacturer: "Tommy Hifiger",
        rating: rating2_image,
        ratingtext: "2",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: mirorr1_image,
        price: 4200,
        amount: 42,
        manufacturer: "Tommy Hifiger",
        type: "selling",
        rating: rating3_image,
        ratingtext: "3",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: mirorr2_image,
        price: 5100,
        amount: 15,
        manufacturer: "Calvin Klein",
        rating: rating5_image,
        ratingtext: "5",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: mirorr3_image,
        price: 4561,
        amount: 19,
        type: "selling",
        manufacturer: "Tommy Hifiger",
        rating: rating1_image,
        ratingtext: "1",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: mirorr4_image,
        price: 6500,
        amount: 56,
        manufacturer: "Tommy Hifiger",
        rating: rating2_image,
        ratingtext: "2",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: mirorr5_image,
        price: 7500,
        amount: 70,
        manufacturer: "Tommy Hifiger",
        rating: rating3_image,
        ratingtext: "3",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: mirorr6_image,
        price: 5600,
        amount: 23,
        manufacturer: "Calvin Klein",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: table_image,
        price: 2300,
        amount: 25,
        manufacturer: "Polo",
        rating: rating5_image,
        ratingtext: "5",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: table1_image,
        price: 3200,
        amount: 29,
        rating: rating2_image,
        ratingtext: "2",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: table2_image,
        price: 7990,
        amount: 36,
        type: "newmod",
        rating: rating3_image,
        ratingtext: "3",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: table3_image,
        price: 3456,
        amount: 65,
        manufacturer: "Polo",
        rating: rating1_image,
        ratingtext: "1",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: table4_image,
        price: 4210,
        amount: 16,
        type: "newmod",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: table5_image,
        price: 5321,
        amount: 52,
        manufacturer: "Polo",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: table6_image,
        price: 6210,
        amount: 62,
        rating: rating3_image,
        ratingtext: "3",
        category: "table"
    },
    {
        id: 29,
        title: "Lamp name1",
        description: "Feel the warm embrace of the Charlotte armchair. Charlotte’s comfort, durability and beautiful design allow it to easily finds its place in any room. With an eye to natural forms, clean lines and comfort, designer Henrik Pedersen has created a small armchair with a big personality",
        customerreview: [
            {
             id: 1,
             fullname: "Le Xuan Son",
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: light_image,
        price: 2550,
        amount: 50,
        type: "newmod",
        rating: rating3_image,
        ratingtext: "3",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: light1_image,
        price: 3434,
        pricesale: 3000,
        amount: 43,
        type: "discount",
        manufacturer: "Polo",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: light2_image,
        price: 8200,
        pricesale:8000,
        amount: 100,
        type: "discount",
        rating: rating5_image,
        ratingtext: "5",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: light3_image,
        price: 5400,
        amount: 34,
        manufacturer: "Polo",
        type: "newmod",
        rating: rating4_image,
        ratingtext: "4",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: light4_image,
        price: 2654,
        amount: 19,
        type: "newmod",
        rating: rating2_image,
        ratingtext: "2",
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
             imagecus: son_image,
             text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
             review: rating5_image
            },
            {
             id: 2,
             fullname: "Le Xuan Son1",
             imagecus: son1_image,
             text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
             review: rating4_image
            },
            {
             id: 3,
             fullname: "Le Xuan Son2",
             imagecus: son2_image,
             text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
             review: rating3_image
            },
         ],
        image: light5_image,
        price: 7800,
        manufacturer: "Polo",
        pricesale: 7000,
        amount: 56,
        type: "discount",
        rating: rating3_image,
        ratingtext: "3",
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
            imagecus: son_image,
            text: "I'm a pretty picky person when it comes to shopping, but this shop makes me happy when I buy, it's a great success of this shop.",
            review: rating5_image
           },
           {
            id: 2,
            fullname: "Le Xuan Son1",
            imagecus: son1_image,
            text: "The product above all is great, I have bought 10 products from this shop so far for my relatives to use and it is extremely durable.",
            review: rating4_image
           },
           {
            id: 3,
            fullname: "Le Xuan Son2",
            imagecus: son2_image,
            text: "Good product, stable voltage in such a price range, I have bought it in many places, but nowhere makes me as satisfied as this place.",
            review: rating3_image
           },
        ],
        image: light6_image,
        price: 1500,
        pricesale: 1000,
        amount: 50,
        type: "discount",
        rating: rating4_image,
        ratingtext: "4",
        manufacturer: "Polo",
        category: "lamp"
    }
]

// const getAllFuniture = () => funituredata;
// const getFunitures = (count) => {
//     const max = funituredata.length - count
//     const min = 0
//     const start = Math.floor(Math.random() * (max - min) + min)
//     return funituredata.slice(start, start + count)
// }
// const funitureDatalist = {
//    getAllFuniture,
//    getFunitures
// }

export default funituredata

