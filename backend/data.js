import bcrypt from 'bcryptjs';


const data = {
    users: [
        {
            name: "Emmanuel",
            email: "admin@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: "Horpsy",
            email: "user@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            _id: 1,
            name: "Nike Slim Clothe",
            category: "Clothes",
            image: "./img/p1.jpg",
            price: 90, 
            countInStock: 20,
            brand: "Nike",
            rating: 4.5,
            numReviews: 10,
            description: "High quality product"
        },
        {
            _id: 2,
            name: "Addidas Slim Clothe",
            category: "Clothes",
            image: "./img/p2.jpg",
            price: 185, 
            countInStock: 10,
            brand: "Addidas",
            rating: 4.8,
            numReviews: 17,
            description: "High quality product"
        },
        {
            _id: 3,
            name: "Lacoste Free Clothe",
            category: "Clothes",
            image: "./img/p3.jpg",
            price: 200, 
            countInStock: 0,
            brand: "Lacoste",
            rating: 4.3,
            numReviews: 17,
            description: "High quality product"
        },
        {
            _id: 4,
            name: "Ashluxe Sporty Wear",
            category: "Clothes",
            image: "./img/p4.jpg",
            price: 350, 
            countInStock: 39,
            brand: "Ashluxe",
            rating: 4.9,
            numReviews: 20,
            description: "High quality product"
        },
        {
            _id: 5,
            name: "Gucci Limited Edition",
            category: "Pants",
            image: "./img/p5.jpg",
            price: 570, 
            countInStock: 22,
            brand: "Gucci",
            rating: 5.0,
            numReviews: 152,
            description: "High quality product"
        },
        {
            _id: 6,
            name: "Lekuxxy Fitted Pants",
            category: "Pants",
            image: "./img/p6.jpg",
            price: 110, 
            countInStock: 180,
            brand: "Lekuxxy",
            rating: 3.4,
            numReviews: 5,
            description: "High quality product"
        },
    ]
}



export default data;