 function addTask() {
     const input = document.getElementById("taskInput");
     const taskText = input.value.trim();

     if (taskText === "") {
         alert("Please enter a task.");
         return;
     }

     const li = document.createElement("li");
     li.innerHTML = `
        ${taskText}
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      `;

     document.getElementById("taskList").appendChild(li);
     input.value = ""; // Clear input field
 }

 function deleteTask(button) {
     const li = button.parentElement;
     li.remove();
 }
 const products = [{
     name: "Headphones",
     category: "tech",
     price: 99,
     rating: 4.5
 }, {
     name: "T-Shirt",
     category: "apparel",
     price: 25,
     rating: 4.8
 }, {
     name: "Smartwatch",
     category: "tech",
     price: 199,
     rating: 4.2
 }];

 function filterProducts() {
     const cat = document.getElementById("categoryFilter").value;
     const sort = document.getElementById("sortFilter").value;

     let filtered = products.filter(p => cat === "all" || p.category === cat);
     filtered.sort((a, b) => sort === "price" ? a.price - b.price : b.rating - a.rating);

     document.getElementById("products").innerHTML = filtered.map(p => `
        <div class="product-card">
          <h3>${p.name}</h3>
          <p>Price: $${p.price}</p>
          <p>Rating: ${p.rating}</p>
        </div>
      `).join("");
 }

 window.onload = filterProducts;