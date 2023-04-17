// TODO: Collect (add) divs to array

import { TEXT_HTML } from "../shared/Static.js";

TEXT_HTML.addEventListener('focus', function() {

  let children = TEXT_HTML.children; 
  let length = TEXT_HTML.children.length; 
  let divs = [];

  for (let i = 0; i < length; ++i) {
    console.warn("BEGIN push to array");
    
    divs.push(children[i]);
    divs.forEach(element => {
      console.log(element);
    });
  }
});