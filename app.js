let txt = document.getElementById("text");
let bgcolor = JSON.parse(localStorage.getItem("color")) || "red";
txt.addEventListener("keyup", (e)=>{
  if (e.key === "Enter") {
    let value = txt.value;
    value = value.toLowerCase();
    localStorage.setItem("color", JSON.stringify(value));
    document.querySelector("body").style.backgroundColor = value;
    
  }
});

document.querySelector("body").style.backgroundColor = bgcolor;

