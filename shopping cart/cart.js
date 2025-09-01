 const cartTableBody = document.querySelector("#cart-table tbody");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
      button.addEventListener("click", () => {
        const product = button.closest(".product");
        const name = product.querySelector(".product-name").textContent;
        const price = parseFloat(product.querySelector(".product-price").textContent);

        // Check if product already exists in cart
        let existingRow = Array.from(cartTableBody.rows).find(row => row.cells[0].textContent === name);

        if (existingRow) {
          let qtyCell = existingRow.cells[1];
          let qty = parseInt(qtyCell.textContent) + 1;
          qtyCell.textContent = qty;
          existingRow.cells[3].textContent = "$" + (qty * price).toFixed(2);
        } else {
          let row = cartTableBody.insertRow();
          row.innerHTML = `
            <td>${name}</td>
            <td>1</td>
            <td>$${price.toFixed(2)}</td>
            <td>$${price.toFixed(2)}</td>
            <td><button class = "remove-btn">Delete</button></td>
          `;
          // Add remove functionality
          row.querySelector(".remove-btn").addEventListener("click", () => row.remove());
        }
      });
    });