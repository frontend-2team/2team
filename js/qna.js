
/* QNA */
/* 자주 묻는 질문 */
var answer = document.querySelectorAll('.answer');

const answer01 = document.querySelector('#answer01');
const answer02 = document.querySelector('#answer02');
const answer03 = document.querySelector('#answer03');
const answer04 = document.querySelector('#answer04');
const answer05 = document.querySelector('#answer05');
const answer06 = document.querySelector('#answer06');

const form = document.querySelector('#moveonClick');

function shortAnswer01(){

    if(answer01.style.display === 'none'){
        answer01.style.display = 'block';
        form.style.marginTop = '11%';
    } else {
        answer01.style.display = 'none';
        form.style.marginTop = '0';
    }
}

function shortAnswer02(){

    if(answer02.style.display === 'none'){
        answer02.style.display = 'block';
        form.style.marginTop = '11%';
    } else {
        answer02.style.display = 'none';
        form.style.marginTop = '0';
    }
}
function shortAnswer03(){

    if(answer03.style.display === 'none'){
        answer03.style.display = 'block';
        form.style.marginTop = '8%';
    } else {
        answer03.style.display = 'none';
        form.style.marginTop = '0';
    }
}

function shortAnswer04(){

    if(answer04.style.display === 'none'){
        answer04.style.display = 'block';
        form.style.marginTop = '13%';
    } else {
        answer04.style.display = 'none';
        form.style.marginTop = '0';
    }
}
function shortAnswer05(){

    if(answer05.style.display === 'none'){
        answer05.style.display = 'block';
        form.style.marginTop = '8%';
    } else {
        answer05.style.display = 'none';
        form.style.marginTop = '0';
    }
}

function shortAnswer06(){

    if(answer06.style.display === 'none'){
        answer06.style.display = 'block';
        form.style.marginTop = '12%';
    } else {
        answer06.style.display = 'none';
        form.style.marginTop = '0';
    }
}
