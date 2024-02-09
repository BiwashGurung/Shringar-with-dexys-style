
// Sample products for demonstration
const products = [
    "Shirt",
    "Pants",
    "Dress",
    "Shoes",
    "Hat"
];

// JavaScript to toggle the visibility of the search bar when the search icon is clicked
document.getElementById('searchIcon').addEventListener('click', function () {
    var searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('hidden');
    if (!searchBar.classList.contains('hidden')) {
        document.getElementById('searchInput').focus();
    }
});

// Function to close the search bar
function toggleSearchBar() {
    var searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('hidden');
}

// Function to handle search when clicking the search icon
function searchProducts() {
    var searchTerm = document.getElementById('searchInput').value.trim();
    var searchResultContainer = document.getElementById('searchResult');
    var matchingProducts = products.filter(function (product) {
        return product.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (matchingProducts.length > 0) {
        searchResultContainer.innerHTML = ""; // Clear previous results
        matchingProducts.forEach(function (product) {
            var productElement = document.createElement('p');
            productElement.textContent = product;
            searchResultContainer.appendChild(productElement);
        });
    } else {
        searchResultContainer.innerHTML = `<i class="fas fa-info-circle text-2xl mb-2"></i><p>No products were found matching your selection for "${searchTerm}"</p>`;
    }
    searchResultContainer.classList.remove('hidden');
}



// Code for FooterYear
document.querySelector("footer .footer-year").textContent =
	new Date().getFullYear();



// Code For GoToUp Button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function () {
    var button = document.getElementById('goToTopButton');
    if (window.scrollY > 200) {
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
});  


function sendMessage() {
    alert("Your message has been sent!");
}
