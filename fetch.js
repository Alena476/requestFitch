let body = document.body;
let url = window.location.search.substring(1);
let name = url.split('');
let userName = name[0];
if (userName == undefined) {
	userName = "Alena476";
}
console.log(userName);
fetch(`https://api.github.com/users/`+ userName)
  .then(res => res.json())
  .then(userInfo => {
  	let userName = userInfo.name;
  	let userPhoto = userInfo.avatar_url;
  	let userDescription = userInfo.bio;
  	let userUrl = userInfo.html_url;
  	  
    let addUserName = () => {
    let elementForName = document.createElement('a');
    elementForName.classList = "active";
    elementForName.href = userUrl;
    elementForName.innerHTML = userName;
    body.append(elementForName);
  }

    let addUserDiscription = () => {
  	let elementForDiscription = document.createElement('h3');
  	  elementForDiscription.innerHTML = userDescription;
  	  body.append(elementForDiscription);
  }

  let addUserPhoto = () => {
  	let elementForAvatar = document.createElement('img');
  	let newString = document.createElement('br');
  	  	elementForAvatar.src = userPhoto;
  	body.append(newString);
  	body.append(elementForAvatar);
  }

addUserName();
addUserDiscription();
addUserPhoto();
})
.catch(err => alert(err + "Информация о пользователе не найдена"))