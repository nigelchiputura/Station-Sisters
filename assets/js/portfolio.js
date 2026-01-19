"use strict";

import { generateGalleryItemTemplate } from "./templateGenerator.js";

fetch("portfolio.json")
  .then((response) => response.json())
  .then((data) => {
    const inventory = data;
    for (let i = 0; i < inventory.length; i++) {
      const inventoryDetails = inventory[i];
      // console.log(inventoryDetails.demo);

      generateGalleryItemTemplate(
        inventoryDetails.imagePath,
        inventoryDetails.name,
        inventoryDetails.description,
        inventoryDetails.features,
        inventoryDetails.gallery,
        inventoryDetails.demo
      );
    }
  });
