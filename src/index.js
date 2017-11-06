
import _ from "lodash";
import printMe from "./print.js";
import { cube } from "./math.js";

import "./style.css";
import Icon from "./icon.png";
import Data from "./data.xml";

function component() {
    var element = document.createElement("div");
    var btn = document.createElement("button");
    var pre = document.createElement("pre");

    element.innerHTML = _.join(["Hello", "webpack", "Abcdefg"], " ");
    element.classList.add("hello");

    btn.innerHTML = "Click me and check the console!";
    btn.onclick = printMe;

    pre.innerHTML = [
        "Hello webpack",
        "5 cubed is equal to " + cube(5)
    ].join("\n\n");

    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(btn);
    element.appendChild(myIcon);
    element.appendChild(pre);

    console.log(Data);

    return element;
}





// 存储变量，用于模块热替换
let element = component();
document.body.appendChild(component());

if (module.hot) {
    module.hot.accept("./print.js", function () {
        console.log("Accepting the updated printMe module");
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}
