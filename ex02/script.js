const title = document.getElementById("title");
const description = document.querySelector(".description");
const box = document.getElementById("box");

title.textContent = "Title changed by JavaScript";
description.textContent = "This paragraph was updated dynamically.";

title.style.color = "darkblue";
title.style.textAlign = "center";

box.classList.add("active");