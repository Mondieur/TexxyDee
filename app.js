import { TEXT_HTML, HOLDER } from "./shared/Static.js";
import { done, miss } from "./global/Kit.js";

// TODO: build the default element
let div = document.createElement('div');
let br = document.createElement('br');
div.append(br);
TEXT_HTML.append(div);

console.log(TEXT_HTML.outerHTML.toString());

let elHasHolder = '<div id="app" class="textarea" contenteditable="true" data-placeholder="Enter your text here..."><div><br></div></div>';
let elNotHolder = '<div id="app" class="textarea" contenteditable="true" data-placeholder=""><br></div>';
let reset_placeholder = 'Enter your text here...';

// TODO: load and append the "placeholder"
window.addEventListener('DOMContentLoaded', function() {
  TEXT_HTML.dataset.placeholder = HOLDER;
});

TEXT_HTML.addEventListener('focus', function() {
  console.log(TEXT_HTML.outerHTML);
});

TEXT_HTML.addEventListener('blur', function() {

  {
    // TODO: for now, leave this code as a debugger
    done("blur detected!");
    console.log('' + TEXT_HTML.outerHTML.toString());
    console.log('' + elHasHolder);
    console.log((TEXT_HTML.outerHTML.toString() === elHasHolder));
  }

  if ((TEXT_HTML.outerHTML.toString() === elHasHolder)) {
    done("(if) holder reset");
    TEXT_HTML.dataset.placeholder = HOLDER;
  }
  else if ((TEXT_HTML.outerHTML.toString() === elNotHolder)) {
    miss("(else if) holder removed and re-added");
    // TEXT_HTML.outerHTML = elHasHolder; // ! WRONG ! but almost
    TEXT_HTML.dataset.placeholder = reset_placeholder;
  }
  else {
    done("(else) holder is hidden")
    TEXT_HTML.dataset.placeholder = '';
    console.log(TEXT_HTML.innerHTML);
    TEXT_HTML.innerHTML.replace('<div><br></div>', '<br>');
  }
});

// TODO: on insert, delete and blur, there is a BIG BUG BOUNTY