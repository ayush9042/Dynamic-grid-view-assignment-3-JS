

// ---------------- Create Card Element Function -------

// Selection of the elements
var clothingCards = document.getElementById("clothingCards");
var accessoriesCards = document.getElementById("accessoriesCards");

// Create Card Function That Create Card Dynamically
function createItemCard(id, preview, name, brand, price) {
  //Create a DIV element with class CARD
  var cardElement = document.createElement("div");
  cardElement.setAttribute("class", "card");
  cardElement.setAttribute("id", id);

  //Create a ANCHOR element with HREF
  var cardLink = document.createElement("a");
  cardLink.href = "product.html?product_id=" + id;

  //Create a IMG-CONTAINER element with class IMG
  var imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "img");

  //Create a IMG element with SRC
  var newImgElement = document.createElement("img");
  newImgElement.src = preview;

  // Append IMG into IMG-CONTAINER
  imgContainer.appendChild(newImgElement);

  //Create a DIV element with class DETAILS
  var deatils = document.createElement("div");
  deatils.setAttribute("class", "details");

  //Create a H3 element with TEXT-NODE NAME
  var newTitleElement = document.createElement("h3");
  var newName = document.createTextNode(name);

  // Append NAME into H3
  newTitleElement.appendChild(newName);
  deatils.appendChild(newTitleElement);

  //Create a H4 element with TEXT-NODE BRAND
  var newBrandElement = document.createElement("h4");
  var newBrand = document.createTextNode(brand);

  // Append BRAND into H4
  newBrandElement.appendChild(newBrand);
  deatils.appendChild(newBrandElement);

  //Create a H5 element with TEXT-NODE PRICE
  var newPriceElement = document.createElement("h5");
  var newPriceText = document.createTextNode("Rs ");
  var newPrice = document.createTextNode(price);
  newPriceElement.appendChild(newPriceText);

  // Append PRICE into H5
  newPriceElement.appendChild(newPrice);
  deatils.appendChild(newPriceElement);

  // Append IMG-CONATINER into CARD-LINK
  cardLink.appendChild(imgContainer);
  cardLink.appendChild(deatils);

  // Append CARD-LINK into CARD-ELEMENT
  cardElement.appendChild(cardLink);

  // Returning CARD-ELEMENT
  return cardElement;
}
