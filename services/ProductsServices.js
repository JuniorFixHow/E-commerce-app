const PRODUCTS = [
    {
        id:1,
        image: {uri:"https://jaykecomputers.com/wp-content/uploads/2020/11/5f32d9ac-dc49-4aaa-8969-4136a64d4304.d9696e7c6e17940e437496ac3f87c276.jpeg"},
        name:"HP i7",
        price: 3000.00,
        color:"Colour: silver",
        Review:"Review: Good for gaming",
        Details:"Details: 2TB HDD, 4GB GPU, Fingerprint sensor, 2.1ghz clockspeed turboboost",
        Shops:"Available at: Melcom GH",
        Customers:"Usual Buyers: Students",
        Promo :"Promo: GHS 2999.00 @ December",
        Size:"Size: 15 inches wide"
    },
    {
        id:2,
        image: {uri:"https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8NjM0MzJ8aW1hZ2UvcG5nfGhiZS9oMmQvMTEzNDY1MzkyMTY5MjYucG5nfDhjZmU1MWEwOWQyYzdmODJhMWNiNDc5NWQ0ZjlmM2Y5MDdkY2U0MDg2ODdkYzVmMzdjMDgwYmY3M2U3M2U2Zjc/lenovo-laptop-ideapad-3i-17in-hero.png"},
        name:"Levovo i5",
        price: 2500.00,
        color:"Colour: black",
        Review:"Review: Optimized for graphic works",
        Details:"Details: 1TB HDD, 2GB GPU, Fingerprint sensor, Webcam, 3.2ghz clockspeed",
        Shops:"Available at: Freddies Corner, Melcom GH",
        Customers:"Usual Buyers: Developers",
        Promo :"Promo: GHS 2000.00 @ 7th December",
        Size:"Size: 14 inches portrait"
    },
    {
        id:3,
        image: {uri:"https://kojahub.com/wp-content/uploads/2020/01/3481-2-500x500.jpg"},
        name:"Dell i3",
        price: 2000.00,
        color:"Colour: black",
        Review:"Review: Good for office work",
        Details:"Details: 500GB HDD, 1 GPU, Fingerprint sensor, 2.23ghz clockspeed",
        Shops:"Available at: Melcom GH",
        Customers:"Usual Buyers: Students, Lecturers",
        Promo :"Promo: GHS 1899.00 6th March",
        Size:"Size: 18 inches wide"
    },
    {
        id:4,
        image: {uri:"https://static.quickmobileshop.com/cs-photos/products/original/surface-pro-7-silver-i5-128gb-8gb-ram-platinum_10038397_4_1583500759.jpg"},
        name:"Ms Surface Pro 7",
        price: 8000.00,
        color:"Colour: silver",
        Review:"Review: Optimized for gaming and developer projects",
        Details:"Details: 250 SSD, 4GB GPU, Fingerprint sensor, 4.2ghz clockspeed",
        Shops:"Available at: Freddies Corner",
        Customers:"Usual Buyers: Developers",
        Promo :"Promo: N/A",
        Size:"Size: 13 inches portrait"
    },
    {
        id:5,
        image: {uri:"https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2020/12/22/source-img/20201222115916_5fe16f14c7a0e.jpg"},
        name:"MacBook Pro",
        price: 4500.00,
        color:"Colour: silver",
        Review:"Review: Good for programming",
        Details:"Details: 512GB SSD, 4GB GPU, Fingerprint sensor, 3.2ghz clockspeed",
        Shops:"Available at: Melcom GH",
        Customers:"Usual Buyers: Students, Devlopers",
        Promo :"Promo: N/A",
        Size:"Size: 14 inches wide"
    },
];

export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}