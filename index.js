// SDOM Developed by Lucky Ardhika and comunity // 2022
// Please dont edit this credit section
// You can contrib for Cost Less Software

get = (ind) => {
  if (ind.slice(0, 1) === "."){ // class
    const elemn = document.querySelector(ind);
    return elemn;
  } else if (ind.slice(0, 1) === "#"){ // id
    const elemn = document.getElementById(ind.substring(0));
    return elemn;
  } else if (ind.slice(0, 1) === "_"){ // name
    const elemn = documnet.getElementById(ind);
    return elemn;
  } else { // any?
    const elemn = document.querySelector(ind);
    return elemn;
};
 
// unfinished
