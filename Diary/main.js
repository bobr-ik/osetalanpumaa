// var flagI = 0;
// var flagII = 0;
// function Arrow(elem) {
//     elem.classList.toggle('arrowI');               //
//     elem.classList.toggle('arrowII');              //Фишка со стрелочками
//     if (flagI == 0) {
//         elem.innerHTML = 'Скрыть';
//         flagI = 1;
//     } else {
//         elem.innerHTML = 'Читать далее';
//         flagI = 0;
//     }

//     if (flagII == 0) {
//         document.getElementById('Diary').classList.toggle('start');
//         document.getElementById('Diary').classList.toggle('movie');
//         document.getElementById('place_to').scrollIntoView(
//         {
//             behavior: 'smooth',
//             block: 'end'
//         });
//         flagII = 1;
//     } else {
//         setTimeout(delete_diary, 5);
//         document.getElementById('place_to_after').scrollIntoView(
//             {
//                 behavior: 'auto',
//                 block: 'end'
//             });
//         flagII = 0;
//     }
// }

// function delete_diary() {
//     document.getElementById('Diary').classList.toggle('start');
//     document.getElementById('Diary').classList.toggle('movie');
// }

function move_to_place(place) {
    setTimeout(open(place), 350);
}

function use_popup(photo_address, text) {
    document.getElementById('Popup').classList.toggle('start_popup');
    document.getElementById('Popup').classList.toggle('see_popup');

    // if (photo_address != null && text != null) {
    document.getElementById('Popup_photo').setAttribute('src', photo_address);
    document.getElementById('Popup_photo').style.border = '2px solid rgb(200, 200, 200)';
    document.getElementById('Popup_text').innerHTML = text;
    // }

    // console.log(photo_address, text);
    // alert('Я лох');
}

function open(flag) {
    if (flag == 1) {
        window.location.href = '../index.html';
    } 
    if (flag == 2) {
    } 
    if (flag == 3) {
    } 
    if (flag == 4) {
        document.getElementById('check').checked = 0;
        document.getElementById('Block_diary').scrollIntoView(
            {
                behavior: 'auto',
                block: 'end'
        });
    } 
    if (flag == 5) {
    } 
}