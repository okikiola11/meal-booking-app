const orderData = [
  {
    id: 1,
    menuType: "Special",
    meal: "Rice with beef",
    size: "medium",
    order: 10,
    price: 1500,
    customerEmail: "shade@gmail.com",
    imageUrl: "meal1.jpg",
    createdOn: new Date().toLocaleString()
  },
  {
    id: 2,
    menuType: "Extra",
    meal: "Fried Rice with chicken",
    size: "large",
    order: 20,
    price: 2500,
    customerEmail: "mary@gmail.com",
    imageUrl: "rice-with-beef.jpg",
    createdOn: new Date().toLocaleString()
  },
  {
    id: 3,
    menuType: "Delicay",
    meal: "Jollof rice",
    size: "small",
    order: 10,
    price: 1000,
    customerEmail: "ayo@yahoo.com",
    imageUrl: "rice-chicken.jpg",
    createdOn: new Date().toLocaleString()
  },
  {
    id: 4,
    menuType: "Foreign",
    meal: "Pottage",
    size: "medium",
    order: 5,
    price: 2500,
    customerEmail: "kiki@hotmail.com",
    imageUrl: "meal2.jpg",
    createdOn: new Date().toLocaleString()
  }
];

export default orderData;
