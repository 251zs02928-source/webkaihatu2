'use strict';
'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.addEventListener(
  'click',
  () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {

      return;
    }


    resultDivision.innerText = '';
    const header = document.createElement('h3');
    header.innerText = '結果は…';
    resultDivision.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivision.appendChild(paragraph);


  }
);
const answers = [
  '###userName###の今日の運勢は大吉です',
  '###userName###の今日の運勢は吉です',
  '###userName###の今日の運勢は中吉です',
  '###userName###の今日の運勢は小吉です',
  '###userName###の今日の運勢は末吉です',
];

 function assessment(userName) {
 
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  const index = sumOfCharCode % answers.length;
  let result = answers[index];

  result = result.replaceAll('###userName###', userName);
  return result;
}