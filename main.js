var prevAspectNum = 0;
var point = 0;
var layer = 0;
function showAspectContent(aspectNum) {
    console.log(aspectNum);
    for (i = 1; i < 7; i++) {
        document.querySelectorAll('#' + point + ' #make-longer-' + i)[0].style.display = 'none';
        document.querySelectorAll('#' + point + ' #info-aspect-' + i)[0].style.display = 'none';
        document.querySelectorAll('#' + point + ' #blank-' + i)[0].style.display = 'none';
        document.querySelectorAll('#' + point + ' #aspect-' + i)[0].style.borderColor = 'white';
    }


    if (prevAspectNum != aspectNum) {

        document.querySelectorAll('#' + point + ' #make-longer-' + aspectNum)[0].style.display = 'block';

        document.querySelectorAll('#' + point + ' #info-aspect-' + aspectNum)[0].style.display = 'block'

        document.querySelectorAll('#' + point + ' #aspect-' + aspectNum)[0].style.borderColor = '#0077ff';

        blankId = document.querySelectorAll('#' + point + ' #blank-' + aspectNum)[0];
        blankId.style.display = 'block';


        document.querySelectorAll('#' + point + ' #aspect-' + aspectNum)[0].scrollIntoView({ behavior: 'smooth' });

        prevAspectNum = aspectNum;

    } else {
        prevAspectNum = 0;
    }
}

var flag = 0;
function aspect_move(elem, elemNum) {
    document.querySelectorAll('#' + point + ' #info-aspect-' + prevAspectNum + ' #new-text-' + elemNum)[0].classList.toggle('start_view');
    document.querySelectorAll('#' + point + ' #info-aspect-' + prevAspectNum + ' #new-text-' + elemNum)[0].classList.toggle('show_new_information');
    document.querySelectorAll('#' + point + ' #info-aspect-' + prevAspectNum + ' #button-more-' + elemNum)[0].classList.toggle('arrowI');
    document.querySelectorAll('#' + point + ' #info-aspect-' + prevAspectNum + ' #button-more-' + elemNum)[0].classList.toggle('arrowII');
    if (flag) {
        elem.innerHTML = 'подробнее';
        flag = 0;
    } else {
        elem.innerHTML = 'скрыть';
        flag = 1;
    }
}



function showAspects() {
    for (i = 0; i < 8; i++) {
        document.getElementsByClassName('info')[i].style.display = 'none';
    }
    point = document.getElementById('accept-point-button').pointName
    document.getElementById(point).style.display = 'block';
    document.querySelectorAll('#' + point + ' > .main-info > .point-photo')[0].scrollIntoView({ block: 'center', behavior: 'smooth' });

}


function scrollnavbar(obj) {
    obj.scrollIntoView({ block: 'start', behavior: 'smooth' });
    document.getElementById('check').checked = 0;
}


function use_popup(photo_address, text) {
    document.getElementById('Popup').classList.toggle('start_popup');
    document.getElementById('Popup').classList.toggle('see_popup');

    document.getElementById('Popup_photo').setAttribute('src', photo_address);
    document.getElementById('Popup_text').innerHTML = text;
}

function use_popup_point(photo_address, text) {
    document.getElementById('Popup-point').classList.toggle('start_popup');
    document.getElementById('Popup-point').classList.toggle('see_popup');

    document.getElementById('Popup_photo-point').setAttribute('src', photo_address);
    document.getElementById('Popup_text-point').innerHTML = text;
}

let tooltipElem;

document.onmouseover = function(event) {
  let target = event.target;
  // если у нас есть подсказка...
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;
  // ...создадим элемент для подсказки
  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);
  // спозиционируем его сверху от аннотируемого элемента (top-center)
  let coords = target.getBoundingClientRect();
  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // не заезжать за левый край окна
  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + target.offsetHeight + 5;
  }
  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};
document.onmouseout = function(e) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};