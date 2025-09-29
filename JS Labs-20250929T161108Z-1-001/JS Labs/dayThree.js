// // ---
// // BOM (Browser Object Model)

// // 1. Open a new window with a specific URL and size, then close it after 3 seconds using JavaScript.
var newWindow = window.open("html1.html", "width=500,height=400");

setTimeout(function() {
    newWindow.close();
}, 3000);

// 2. Display the browser's user agent string in an alert.
alert(navigator.userAgent);


// // 3. Use `navigator` to detect if the browser is online or offline and log the result.
navigator.onLine
console.log(navigator.onLine ? "Online" : "Offline");


// // 4. Write code to reload the current page after 5 seconds.
setTimeout(function() {
    location.reload();
}, 5000);

// // 5. Get the current page URL, protocol, and hostname using `location` and log them.
console.log(location.href);
console.log(location.protocol);
console.log(location.hostname);
// 6. Use `history` to go back one page, then forward one page (write the code, don't actually run it).
history.back();
history.forward();

// // 7. Show the screen width and height in a div -change the div content- on the page.


// // 8. Use `setTimeout` to change the content of a hyperlink -a- with a new content after 2 seconds, and provide a button to cancel it.
var link = document.getElementById("myLink");
var originalText = link.textContent;
var timeoutId = setTimeout(function() {
    link.textContent = "New";
}, 2000);

var cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", function() {
    clearTimeout(timeoutId);
    link.textContent = originalText;
});

// // 9. Use `setInterval` to update the time  on the page title every second, and a button to stop it.
var intervalId = setInterval(updateTime, 1000);

function updateTime() {
    var now = new Date();
    document.title = now.toLocaleTimeString();
}

function stopUpdatingTime() {
    clearInterval(intervalId);
}

// // 10. Show a confirm dialog asking "Do you want to continue?" and log the user's choice("user said yes", "user said no").
confirm("Do you want to continue?");
console.log(confirm("Do you want to continue?") ? "user said yes" : "user said no");


// // DOM Traversal (Nodes, Elements, Collections)

// // 11. Select the first `<ul>` in the document and log its `childNodes` and `children` properties. Explain the difference in a comment.
var ul = document.getElementsByTagName("ul")[0];
console.log(ul.childNodes);                       // logs all child nodes including text
console.log(ul.children);                        // logs only element children

// // 12. Write a function that logs the tag names of all direct child elements of `<body>`.
    function tagsName() {
        var body = document.body;
        for (var i = 0; i < body.children.length; i++) {
            console.log(body.children[i].tagName);
        }
    }


// // 13. Given a parent element, loop through its `childNodes` and log only the nodes that are elements (not text/comments).
function logElementChildren(parent) {
    for (var i = 0; i < parent.childNodes.length; i++) {
        var node = parent.childNodes[i];
        if (node.nodeType === Node.ELEMENT_NODE) {
            console.log(node.tagName);
        }
    }
}

// // 14. Use `firstChild` and `firstElementChild` on a container and explain the difference.
var container = document.getElementById("container");
console.log(container.firstChild);      // logs the first child node (could be text)
console.log(container.firstElementChild); // logs the first element child (ignores text)
  


// // 15. Write code to get all `<li>` elements inside a `<ul>` using `children` and explain the difference.
var ul = document.getElementsByTagName("ul")[0];
// var liElements = ul.children;
console.log(liElements);                              // logs only <li> elements



// // 17. Write a function that logs all sibling elements of a given element (excluding itself)
function logSiblingElements(element) {
    var siblings = element.parentNode.children;
    for (var i = 0; i < siblings.length; i++) {
        if (siblings[i] !== element) {
            console.log(siblings[i]);
        }
    }
}

// // 18. Use `nextSibling` and `nextElementSibling` to traverse from the first child to the last child of a `<ul>`, logging each node.
var ul = document.getElementById("myList");
var node = ul.firstChild;

while (node) {
  console.log("Node:", node);
  node = node.nextSibling;
}


    var ul = document.getElementById("myList");
var elem = ul.firstElementChild;

while (elem) {
  console.log("Element:", elem);
  elem = elem.nextElementSibling;
}


// // 19. Count how many element children a given node has (not using `children.length`).
function countElementChildren(node) {
    var count = 0;
    for (var i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType === Node.ELEMENT_NODE) {
            count++;
        }
    }
    return count;
}

// // 20. Write a function that takes the first form element and logs the names and values of all its input fields using the `elements` collection.
function logFormInputs(form) {
    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];
        if (element.tagName === "INPUT") {
            console.log("Name: " + element.name + ", Value: " + element.value);
        }
    }
}
    
// // 21. Access all forms in the document using `document.forms` and log their names.
var forms = document.forms;
for (var i = 0; i < forms.length; i++) {
    console.log(forms[i].name);
}

// // 22. Access all images in the document using `document.images` and log their `src` attributes.
var images = document.images;
for (var i = 0; i < images.length; i++) {
    console.log(images[i].src);
}

// // 23. Write a function that takes a form and disables all its input fields using the `elements` collection.
function disableFormInputs(form) {
    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];
        if (element.tagName === "INPUT") {
            element.disabled = true;
        }
    }
}

// // 24. Use `Array.from` to convert `document.images` to an array and filter images with width > 100px.
var largeImages = Array.from(document.images).filter(function(img) {
    return img.width > 100;
});
console.log(largeImages);