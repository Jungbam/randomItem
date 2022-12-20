
// document.cookie = `토큰=${토큰값}` // Ex) document. cookie = "test=abcde";

//cookie를 설정하는 setCookie() 함수,쿠키를 저장하는 함수
function setCookie(cookie_name, value, days) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + days);
  // 설정 일수만큼 현재시간에 만료값으로 지정
  var cookie_value = escape(value) + ((days == null) ? '' : ';
    expires = ' + exdate.toUTCString());
  document.cookie = cookie_name + '=' + cookie_value;
}
//3일 후에 만료되는 myHobby 이름으로 game이라는 값을 저장한다면 ?
//setCookie('myHobby', 'game', '3');
// 함수이름 ,저장할 값, 만료시간

//cookie가 잘 저장 되었는지 확인
document.cookie; // myHobby=game가 출력되며 ;를 구분자로 저장됨

// 값을 가져오는 방법
//getCookie() 함수

// function getCookie(cookie_name) {
//   var x, y;
//   var val = document.cookie.split(';');
//   for (var i = 0; i < val.length; i++) {
//     x = val[i].substr(0, val[i].indexOf('='));
//     y = val[i].substr(val[i].indexOf('=') + 1);
//     x = x.replace(/^\s+|\s+$/g, '');
//     // 앞과 뒤의 공백 제거하기
//     if (x == cookie_name) {
//       return unescape(y);
//       // unescape로 디코딩 후 값 리턴
//     }
//   }
// }
//만약, 저장할 값이 하나가 아닌 여러개인 경우,addCookie() 함수
// function addCookie(id) {
//   var items = getCookie('productItems');
//   // 이미 저장된 값을 쿠키에서 가져오기
//   var maxItemNum = 5;
//   // 최대 저장 가능한 아이템개수
//   var expire = 7;
//   // 쿠키값을 저장할 기간
//   if (items) {
//     var itemArray = items.split(',');
//     if (itemArray.indexOf(id) != -1) {
//       // 이미 존재하는 경우 종료
//       console.log('Already exists.');
//     } else {
//       // 새로운 값 저장 및 최대 개수 유지하기
//       itemArray.unshift(id);
//       if (itemArray.length > maxItemNum) itemArray.length = 5;
//       items = itemArray.join(',');
//       setCookie('productItems', items, expire);
//     }
//   } else {
//     // 신규 id값 저장하기
//     setCookie('productItems', id, expire);
//   }
// }
