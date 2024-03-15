let scriptSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js";
let elementId = "";
let fileName = "";
let css = `.doruk-btn-6785 {
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  position:absolute;
  top:200px;
  right: 300px;
}

.doruk-btn-6785:active,
.button-64:hover {
  outline: 0;
}

.doruk-btn-6785 span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  font-weight:bold;
  font-style: italic;
  transition: 300ms;
}

.doruk-btn-6785:hover span {
  background: none;
  font-weight:900;
}`;

let script = document.createElement("script");
script.type = "text/javascript";
script.src = scriptSrc;
document.head.appendChild(script);

let ele = document.createElement("style");
ele.style = "text/css";
ele.innerText = css;
document.head.appendChild(ele);

let injectCallback = () => {
  let code = `let btn = document.getElementById(
    "doruk-download-image-btn-doruk-98238424758"
  );
  btn.addEventListener("click", () => {
    let element = document.getElementById("${elementId}");
    html2canvas(element, {
      scale: 2,
      dpi:144,
      onrendered: function (canvas) {
        var imgageData = canvas.toDataURL("image/webp", 1.0);
        var a = document.createElement("a");
        a.href = imgageData; //Image Base64 Goes here
        a.download = "${fileName}"; //File name Here
        a.click(); //Downloaded file
      },
    });
  });`;

  let callbackScript = document.createElement("script");
  callbackScript.type = "text/javascript";
  callbackScript.innerHTML = code;
  document.body.appendChild(callbackScript);
};

function setHtml2ImageParameters(element, filename) {
  elementId = element;
  fileName = filename;

  let btn = document.createElement("button");
  btn.id = "doruk-download-image-btn-doruk-98238424758";
  btn.innerHTML = "<span class='doruk-btn-span'>Download: Html As Image</span>";
  btn.className = "doruk-btn-6785";
  document.body.appendChild(btn);

  setTimeout(injectCallback, 600);
}
