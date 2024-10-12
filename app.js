//update the current year in footer
function printYear() {
  document.getElementById("yr").innerText = new Date().getFullYear();
}

printYear();

//read the response from github api
function readInput(name) {
  let item = new Github();
  let out = item.getUser(name);
  console.log(`github res=`, out);
  out
    .then((res) => {
      console.log(`final res=`, res);
      printProfile(res.profile);
      printAllRepo(res.repos);
    })
    .catch((err) => console.log(err));
}

//print the user details
var profile = document.querySelector("#profile");
function printProfile(data) {
  profile.innerHTML = `<div class="profile">
        <div class="left">
        <img src="${data.avatar_url}" alt="image not found"/>
        </div>
        <div class="right">
        <div class="content">
        <h3>${data.name}</h3>
        <p>${data.company}</p>
        <p> Bio: ${data.bio}</p>
        <p>Followers: ${data.followers}</p>
        <p> Following: ${data.following}</p>
        <p> Location: ${data.location}</p>
        </div>
        </div>
        </div>`;
}

//execute it with onchange event
document.getElementById("key").addEventListener("focusout", function () {
  let name = document.getElementById("key").value;
  console.log(`name=`, name);
  readInput(name);
});

//print all repo details
var repo = document.getElementById("repo");
function printAllRepo(data) {
  data.forEach((item, index) => {
    repo.innerHTML += `<ul>
    <li>
    <div>
    <h4>${item.name}</h4>
    <h5>RepoType:${item.private ? "Private" : "Public"}</h5>
    <a href="${item.html_url}" target="_blank">ViewRepo</a>
    </div>
    </li>
    
    
    </ul>`;
  });
}
