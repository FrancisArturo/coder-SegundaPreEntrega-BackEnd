

const formAdd = document.getElementById("formAdd");
const formEdit = document.getElementById("formEdit");
const formDelete = document.getElementById("formDelete");
const productContainer = document.getElementById("productContainer");

const addProductTitle = document.getElementById("productTitle");
const addProductPrice = document.getElementById("productPrice");
const addProductDescription = document.getElementById("productDesc");
const addProductStock = document.getElementById("productSt");
const addProductCategory = document.getElementById("productCategory");
const addProductStatus = document.getElementById("productStatus");
const addProductCode = document.getElementById("productCode");
const addBtn = document.getElementById("botonAdd");   
//const addCartBtn = document.getElementById("botonAgregarCarrito");
const addCartBtns = document.getElementsByClassName("botonAgregarCarrito");
const idProduct = document.getElementById("idProduct").innerText;



async function getProducts() {
    const res = await fetch("/api/v1/products");
    const data = await res.json();
    return data;
}

async function addProduct(product) {
    const res = await fetch("/api/v1/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return data;
}
async function addCartProduct(bid) {
    const res = await fetch(`/api/v1/products/64a44f138c5802640f24284/${{bid}}`, {
        method: "POST",
        body: JSON.stringify(),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return data;
}

addBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const product = {
        title: addProductTitle.value,
        price: addProductPrice.value,
        description: addProductDescription.value,
        stock: addProductStock.value,
        category: addProductCategory.value,
        
        status: addProductStatus.value,
        code: addProductCode.value,
    };
    await addProduct(product);
    addProductTitle.value = "";
    addProductPrice.value = "";
    addProductDescription.value = "";
    addProductStock.value = "";
    addProductCategory.value = "";
    addProductStatus.value = "";
    addProductCode.value = "";
});


addCartBtns.forEach(element => {
    element.addEventListener("click", async (e) => {
        e.preventDefault();
        console.log("hola");
    });
});





