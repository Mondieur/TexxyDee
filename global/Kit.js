
export function log(s) { 
  console.log(s); 
}

export function done(s) {
  console.log(
    "%cDONE!" + "%c " + s, 
    "background-color:green;"+
    "color: white", 
    "background-color:white;"+
    "color: blue"
  );
}

export function miss(s) {
  console.log(
    "%cMISS!" + "%c " + s, 
    "background-color:red;"+
    "color: white", 
    "background-color:white;"+
    "color: black"
  );
}

// ! WARN: 'el' stands for an HTML element
// ? TEST: not tested, for future updates

export function nullOrUndef(...arg) {
  
  switch(arg) {
    case arg: (null || undefined);
      if (arg === null)
        throw new Error("Invalid argument(s): args cannot be null");
      else
        throw new Error("Invalid argument(s): args cannot be undefined.");
      
    case arg: !(null || undefined);
      return true;

    default: 
      break;
  }
}

export function compound(inner, outer) {
  // TODO: return a B 'el' appended to an A 'el'. And finally appends it to HTML body
  if (nullOrUndef(inner, outer) === true) {
    let A = document.createElement(outer), B = document.createElement(inner);
    A.append(B);
    TEXT_HTML.append(A);
  }
  else throw new Error("Invalid argument(s): arguments cannot be null or undefined.");;
  
}

/**
 * 
 * 1. creates an element
 * 2. insert innerHTML
 * 3. adds class to it
 * 4. adds behavior to it
 * 
 */