function getViewport(){
  // 检查 document.compatMode 属性，以确定浏览器是否运行在混杂模式。
  // Safari3.1 之前的版本不支持这个属性，因此就会自动执行 else 语句
  if (document.compatMode == "BackCompat"){
      return {
          width: document.body.clientWidth,
          height: document.body.clientHeight
      };
  } else {
      return {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
      }; 
  }
}

function getElementLeft(element){
  var actualLeft = element.offsetLeft;
  var current = element.offsetParent;
  while (current !== null){
      actualLeft += current.offsetLeft;
      current = current.offsetParent;
  }
  return actualLeft;
}

function getElementTop(element){
  var actualTop = element.offsetTop;
  var current = element.offsetParent;
  while (current !== null){
      actualTop += current. offsetTop;
      current = current.offsetParent;
  }
  return actualTop;
}

function getBoundingClientRect(element) {
  var scrollTop = document.documentElement.scrollTop;
  var scrollLeft = document.documentElement.scrollLeft;
  if (element.getBoundingClientRect) {
      if (typeof arguments.callee.offset != "number") {
          var temp = document.createElement("div");
          temp.style.cssText = "position:absolute;left:0;top:0;"; document.body.appendChild(temp);
          arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop; document.body.removeChild(temp);
          temp = null;
      }
      var rect = element.getBoundingClientRect();
      var offset = arguments.callee.offset;
      return {
          left: rect.left + offset,
          right: rect.right + offset,
          top: rect.top + offset,
          bottom: rect.bottom + offset
      };
  } else {
      var actualLeft = getElementLeft(element);
      var actualTop = getElementTop(element);
      return {
          left: actualLeft - scrollLeft,
          right: actualLeft + element.offsetWidth - scrollLeft,
          top: actualTop - scrollTop,
          bottom: actualTop + element.offsetHeight - scrollTop
      }
  }
}


function isInViewPortOfOne (el) {
  // viewPortHeight 兼容所有浏览器写法
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight 
  const offsetTop = el.offsetTop
  const scrollTop = document.documentElement.scrollTop
  const top = offsetTop - scrollTop
//   console.log('top', top)
   // 这里有个+100是为了提前加载+ 100
  return top <= viewPortHeight;
}
