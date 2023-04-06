// ===================Menggunakan getElementById()=========================
      var judul = document.getElementById("judul");
      judul.innerHTML = "Judul Dokumen Diubah";
      
      // Menggunakan getElementsByTagName()
      var paragraf = document.getElementsByTagName("p");
      for (var i = 0; i < paragraf.length; i++) {
        paragraf[i].innerHTML = "Ini adalah paragraf yang diubah.";
      }
      
      // Menggunakan querySelector()
      var item = document.querySelector("ul li:nth-child(2)");
      item.innerHTML = "Item 2 Diubah";


// ===================Section 3. Traversing elements======================
    // 1. Traversing elements menggunakan children
      var list = document.getElementsByTagName("ul")[0];
      var item = list.children[1];
      item.innerHTML = "Item 2 Diubah dengan children";
      
    // 2. Traversing elements menggunakan parentElement
      var paragraf = document.getElementsByClassName("paragraf")[0];
      var div = paragraf.parentElement;
      div.style.backgroundColor = "lightblue";
      
    // 3. Traversing elements menggunakan nextSibling
      var li1 = document.getElementsByTagName("li")[0];
      var li3 = li1.nextSibling.nextSibling;
      li3.innerHTML = "Item 3 Diubah dengan nextSibling";

      
// ===================Section 4. Manipulating elements===================
      // Manipulating elements menggunakan appendChild
      var itemBaru = document.createElement("li");
      var teksItemBaru = document.createTextNode("Item 4");
      itemBaru.appendChild(teksItemBaru);
      var list = document.getElementsByTagName("ul")[0];
      list.appendChild(itemBaru);
      
      // Manipulating elements menggunakan textContent
      var paragraf = document.getElementsByClassName("paragraf")[1];
      paragraf.textContent = "Paragraf 2 Diubah dengan textContent";
      

// ====================Section 5. Working with Attributes======================
// Working with elements menggunakan setAttribute
      var h1 = document.getElementById("judul");
      h1.setAttribute("style", "color: blue;");
      
      // Working with elements menggunakan getAttribute
      var paragraf = document.getElementsByClassName("paragraf")[0];
      var classParagraf = paragraf.getAttribute("class");
      console.log("Class dari elemen p pertama: " + classParagraf);
      
      // Working with elements menggunakan removeAttribute
      var listKetiga = document.getElementsByTagName("li")[2];
      listKetiga.removeAttribute("class");
      

// ===================Section 6. Manipulating Element’s Styles=====================
      var judul = document.getElementById("judul");
      judul.style.color = "red";
      judul.style.fontSize = "24px";

      var paragraf = document.getElementsByClassName("paragraf");
      for (var i = 0; i < paragraf.length; i++) {
      paragraf[i].style.width = "200px";
      paragraf[i].style.height = "100px";
      }

      var judul = document.getElementById("judul");
      judul.classList.add("judul-baru");

// ===================Section 7. Working with Events==========================
    //scroll event
      window.addEventListener("scroll", function() {
      console.log("Anda telah melakukan scroll.");
      });
    //handling event
      var judul = document.getElementById("judul");

      function handleClick() {
      console.log("Anda telah mengklik judul.");
      }
      judul.addEventListener("click", handleClick);
    //mouse event
      var judul = document.getElementById("judul");

      function handleMouseOver() {
      console.log("Anda telah mengarahkan kursor ke judul.");
      }

      judul.addEventListener("mouseover", handleMouseOver);

// ====================Section 8. Scripting Web Forms==========================

// Radio Button
      var red = document.getElementById("red");
      var green = document.getElementById("green");

      red.checked = true;

      green.addEventListener("change", function() {
        console.log("Anda memilih " + green.value);
      });

      // Checkbox
      var checkbox = document.getElementById("checkbox");

      checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
          console.log("Checkbox telah dicentang.");
        } else {
          console.log("Checkbox telah dicabut.");
        }
      });

      // Select Box
      var select = document.getElementById("select");

      select.value = "option2";

      select.addEventListener("change", function() {
        console.log("Anda memilih " + select.value);
      });