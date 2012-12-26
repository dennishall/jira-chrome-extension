/**
 * Copyright (c) 2011 Dennis Hall <https://github.com/dennishall>.
 * All rights reserved.  Use of this source code is governed by the MIT license.
**/


function $(s){
  return document.querySelectorAll(s);
}

var tt = document.createElement('div');
tt.className = "graph-tooltip";
document.body.appendChild(tt);

function over(){
  var td = this;
  var img = td.getElementsByTagName('img')[0];
  var rect = td.getBoundingClientRect();
  tt.innerText = img.alt;
  tt.style.display = "block";
  tt.style.top = window.scrollY + rect.top - rect.height - 28 + 'px';  // 30 is the height of the tooltip
  tt.style.left = window.scrollX + rect.left + (rect.width/2) - 100 + 'px'; // 100 is half of the width of the tooltip
}

function out(){
  tt.style.display = "none";
}

[].forEach.call($('table.tt_graph td'), function(td){
  td.onmouseover = over;
  td.onmouseout = out;
});
