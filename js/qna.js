
/* QNA */
/* 자주 묻는 질문 */
const question = document.getElementsByClassName('question');
const answer = document.getElementsByClassName('answer');

let isClicked = true;

let shortAnswer = function(){

    if(isClicked){
        answer.style.display = 'block';
        isClicked = false;
    } else {
        answer.style.display = 'none';
        isClicked = true;
    }

}