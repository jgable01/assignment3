'use strict'

/*
  Tools and Automation
  Josh Gable

  Assignment 3
*/

const url = document.querySelector('.url');

const assignBtn = document.querySelector('.assign');
const replaceBtn = document.querySelector('.replace');

assignBtn.addEventListener('click', () => {
  let val = url.value.trim();
  if(val.length > 15) {
    window.location.assign(val);
  }
});

replaceBtn.addEventListener('click', () => {
  let val = url.value.trim();
  if(val.length > 15) {
    window.location.replace(val);
  }
});