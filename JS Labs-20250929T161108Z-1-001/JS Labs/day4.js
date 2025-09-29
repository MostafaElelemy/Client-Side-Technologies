// // 1. Select the first <div> on the page using getElementsByTagName and log its innerHTML.
console.log(document.getElementsByTagName("div")[0].innerHTML);


// // 2. Using getElementById change the text of #my-p to "Hello DOM".
document.getElementById("my-p").innerText="Hello DOM";

// // 3. Use querySelector to select the element with class "target-div" and log its nodeName.
console.log(document.querySelector(".target-div").nodeName);

// // 4. Use querySelectorAll to count how many <div> elements exist; log the count.
console.log(document.querySelectorAll("div").length);

// // 5. Use getElementsByName on the email input (name="user-email") and set its value to "user@test.com".
document.getElementsByName("user-email").value = "user@test.com";

// // 6. Check if the text input has a "name" attribute; if not add name="user-name" via setAttribute.
var input = document.querySelector('input[type="text"]');
if (!input.hasAttribute('name')) {
  input.setAttribute('name', 'user-name');
}




// // 7. Append the string " - UPDATED" to the existing innerText of #my-p (keep original text).
document.getElementById("my-p").innerText +="- UPDATED";



// 8. Create Images slider that work automatically and with next/prev/start/stop buttons.
var imageUrls = [
      "https://www.porschetysonscorner.com/blogs/3560/wp-content/uploads/2023/12/5-Reasons-Porsche-Cars-Are-World-Renowned.png",
      "https://imageio.forbes.com/specials-images/imageserve/5d3703e2f1176b00089761a6/2020-Chevrolet-Corvette-Stingray/0x0.jpg?crop=4560,2565,x836,y799,safe&height=399&width=711&fit=bounds",
      "https://article.images.consumerreports.org/image/upload/w_652,f_auto,q_auto,ar_16:9,c_lfill/v1731947043/prod/content/dam/CRO-Images-2024/Cars/CR-Cars-InlineHero-10-Most-Satisfying-Cars-and-SUVs-1124"
    ];

    
    var sliderContainer = document.createElement("div");
    var slidesWrapper = document.createElement("div");
    var controls = document.createElement("div");

    var prevBtn = document.createElement("button");
    var nextBtn = document.createElement("button");
    var startBtn = document.createElement("button");
    var stopBtn = document.createElement("button");

    prevBtn.textContent = "Previous";
    nextBtn.textContent = "Next";
    startBtn.textContent = "Start";
    stopBtn.textContent = "Stop";

    
    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);
    controls.appendChild(startBtn);
    controls.appendChild(stopBtn);

   
    imageUrls.forEach(url => {
      var img = document.createElement("img");
      img.src = url;
      img.style.width = "600px";
      img.style.height = "350px";
      img.style.objectFit = "cover";
      slidesWrapper.appendChild(img);
    });

    
    Object.assign(sliderContainer.style, {
      width: "600px",
      overflow: "hidden",
      margin: "20px auto",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    });

    Object.assign(slidesWrapper.style, {
      display: "flex",
      transition: "transform 0.5s ease-in-out"
    });

    Object.assign(controls.style, {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginTop: "10px"
    });

    [prevBtn, nextBtn, startBtn, stopBtn].forEach(btn => {
      Object.assign(btn.style, {
        padding: "10px 15px",
        fontSize: "14px",
        cursor: "pointer"
      });
    });

    
    sliderContainer.appendChild(slidesWrapper);
    document.body.appendChild(sliderContainer);
    document.body.appendChild(controls);

    
    var index = 0;
    var interval;

    function showSlide(i) {
      index = (i + imageUrls.length) % imageUrls.length;
      slidesWrapper.style.transform = `translateX(-${index * 600}px)`;
    }

    function nextSlide() {
      showSlide(index + 1);
    }

    function prevSlide() {
      showSlide(index - 1);
    }

    function startSlider() {
      stopSlider();
      interval = setInterval(nextSlide, 3000);
    }

    function stopSlider() {
      clearInterval(interval);
    }

  
    nextBtn.onclick = nextSlide;
    prevBtn.onclick = prevSlide;
    startBtn.onclick = startSlider;
    stopBtn.onclick = stopSlider;

    
    startSlider();


// // 9. Set the placeholder of the text input to "Type your full name" using setAttribute.
 document.querySelector('input[type="text"]').setAttribute('placeholder', 'Type your full name');

// 10. Log whether the email input has attribute "required"; if missing add it.
var emailInput = document.getElementById("my-email");
if (!emailInput.hasAttribute("required")) {
  emailInput.setAttribute("required", "");
}


// // 11. Write function getSelectedValue(selectId) returning the current selected option value.

function getSelectedValue(selectId) {
  var select = document.getElementById(selectId);
  return select

// // 12. Loop through all options of the select and log each option's text and value.
 var selectElement = document.getElementById("my-select");
 for (var i = 0; i < selectElement.options.length; i++) {
  console.log("Option text: " + selectElement.options[i].text);
   console.log("Option value: " + selectElement.options[i].value);
 }

// // 13. Programmatically select the option with value "EG".
 selectElement.value = "EG";

// 14. Create function selectByText(selectId, text) that selects the first option whose text matches exactly.
function selectByText(selectId, text) {
var select = document.getElementById(selectId);
 if (!select) return;

for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].text === text) {
       select.selectedIndex = i;
      return;
    }
 }
}

// 15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p> (ensure bold renders, not printed literally).
 document.getElementById("div-2").innerHTML = "<p><b>Bold Text</b></p>";

// // 16. Add classes class-a and class-b to #div-2 then remove class-b (using classList).
 var div2 = document.getElementById("div-2");
div2.classList.add("class-a", "class-b");
 div2.classList.remove("class-b");

// // 17. Toggle class "hidden" on #div-2 twice; comment final visibility.
div2.classList.toggle("hidden");
div2.classList.toggle("hidden");

// // 18. Create function insertAfter(refNode, newNode) that inserts newNode immediately after refNode.

 function insertAfter(refNode, newNode) {
  refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
 }

// // 19. Create a new <div> saying "Dynamic Box" with yellow background and append inside #div-2.
var newDiv = document.createElement("div");
newDiv.innerText = "Dynamic Box";
newDiv.style.backgroundColor = "yellow";
div2.appendChild(newDiv);

// // 20. Insert a new <p> BEFORE the first child of #div-2 (insertBefore).
var newP = document.createElement("p");
newP.innerText = "Inserted Paragraph";
div2.insertBefore(newP, div2.firstChild);

// // 21. Insert a <span> with text "AFTER END" right after #div-2 using insertAdjacentHTML.
 div2.insertAdjacentHTML("afterend", "<span>AFTER END</span>");

// // 22. Form onsubmit: prevent default and log values of text, email, and select inputs.
document.forms[0].onsubmit = function(event) {
 event.preventDefault();
 console.log("Text Input:", document.getElementById("my-input").value);
console.log("Email Input:", document.getElementById("my-email").value);
 console.log("Select Input:", getSelectedValue("my-select"));
};

// // 23. Add input event on the text input that logs its length whenever it changes.
document.getElementById("my-input").addEventListener("input", function() {
  console.log("Text Input Length:", this.value.length);
});

// // 24. Write validateEmailSimple(value) returning true if value contains both '@' and '.'; add 2 passing / 2 failing examples (comments).
 function validateEmailSimple(value) {
 return value.includes("@") && value.includes(".");
 }


console.log(validateEmailSimple("test@example.com")); // true
console.log(validateEmailSimple("user.name@domain.co")); // true


console.log(validateEmailSimple("invalid-email")); // false
console.log(validateEmailSimple("missing@domain")); // false

// // 25. Create an element, append it to #div-2, then remove it using parent.removeChild(child).

var tempDiv = document.createElement("div");
tempDiv.innerText = "Temporary Div";
document.getElementById("div-2").appendChild(tempDiv);
document.getElementById("div-2").removeChild(tempDiv);

// // 25. Create an element, append it to <div id="wrapper">
// //   <p id="first">First</p>
// //   <p id="second">Second</p>
// // </div>

// // 26. Clone #div-2 , set clone id="div-2-clone", and insert it after original using insertAfter.
var clone = document.getElementById("div-2").cloneNode(true);
clone.id = "div-2-clone";
 insertAfter(document.getElementById("div-2"), clone);

// // 27. Highlight all text & email inputs (green border) in a function highlightInputs(form) and call it on DOMContentLoaded.

 function highlightInputs(form) {
  var textInput = form.querySelector('input[type="text"]');
   var emailInput = form.querySelector('input[type="email"]');
textInput.style.border = "2px solid green";
  emailInput.style.border = "2px solid green";
 }

 document.addEventListener("DOMContentLoaded", function() {
 highlightInputs(document.forms[0]);
});

// // 28. Build function buildCard(title, content) returning <div class="card"> with an <h3> and <p>; append two cards to body.

 function buildCard(title, content) {
 var card = document.createElement("div");
   card.className = "card";
var cardTitle = document.createElement("h3");
cardTitle.innerText = title;
  var cardContent = document.createElement("p");
  cardContent.innerText = content;
  card.appendChild(cardTitle);
 card.appendChild(cardContent);
 document.body.appendChild(card);
  return card;
 }

// // 29. Add delegated click listener on body logging when a .card is clicked.
 document.body.addEventListener("click", function(event) {
 if (event.target.closest(".card")) {
  console.log("Card clicked:", event.target.closest(".card").innerText);
  }
});

// // 30. Reflection (comment): Which two tasks were most challenging and why?
 // - Task 8(img slider): It was very long and knowing too much to build it on just js
 // - Task 28 (Building Cards): Creating a function that builds and appends card elements required careful manipulation of the DOM and understanding of element creation.


// // 31. create and unordered list dynamically with at 10 items, the odd list items should have class "odd" and even items "even", -create the two classes in your CSS file-

 var ul = document.createElement("ul");
  for (var i = 1; i <= 10; i++) {
   var li = document.createElement("li");
  li.innerText = "Item " + i;
   li.className = (i % 2 === 0) ? "even" : "odd";
 ul.appendChild(li);
 }
 document.body.appendChild(ul);
