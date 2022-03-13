 let search = document.getElementById("search");
 let logo = document.getElementById("img-logo")
 let followers = document.getElementById("folowers")
 let following = document.getElementById("following")
 let profileNm = document.getElementById("name")
 let totalRepo = document.getElementById("total-repositories")
 let repo1 = document.getElementById("repo1")
 let repo2 = document.getElementById("repo2")
 let repo3 = document.getElementById("repo3")
 let repo4 = document.getElementById("repo4")
 let repo5 = document.getElementById("repo5");
 let wrap = document.getElementById("information-wrapper");
 let info = document.getElementById("info");
 let searchBtn = document.getElementById("searchButn")
 let nameCont = document.getElementById("name-cont");

 searchBtn.addEventListener("click", getResult)


 function getResult() {
     wrap.style.display = "block";
     //  window.addEventListener("input", function() {
     fetch(`https://api.github.com/users/${search.value}/repos`).then(res => res.json()).then(repoName => {

         //  to open github repository if user clicks on repository name 

         repo1.addEventListener("click", function() {
             window.open(repoName[0].html_url)
         })
         repo2.addEventListener("click", function() {
             window.open(repoName[1].html_url)
         })
         repo3.addEventListener("click", function() {
             window.open(repoName[2].html_url)
         })
         repo4.addEventListener("click", function() {
             window.open(repoName[3].html_url)
         })
         repo5.addEventListener("click", function() {
             window.open(repoName[4].html_url)
         })


         repo1.innerText = repoName[0]['name'];
         repo2.innerText = repoName[1]['name'];
         repo3.innerText = repoName[2]['name'];
         repo4.innerText = repoName[3]['name'];
         repo5.innerText = repoName[4]['name'];

     })

     fetch(`https://api.github.com/users/${search.value}`).then(res => res.json()).then(result => {
         logo.src = result.avatar_url;
         followers.innerText = result.followers + " Followers";
         following.innerText = result.following + " Following";
         totalRepo.innerText = result.public_repos + " Repositories";
         profileNm.innerText = result.name;
         var repos = result.repos_url;
     })
     if (search.value == "") {
         wrap.style.display = "none";
     }
     window.addEventListener('error', function(e) {
         logo.style.display = "none";
         repo1.style.display = "none";
         repo2.style.display = "none";
         repo3.style.display = "none";
         repo4.style.display = "none";
         repo5.style.display = "none";
         followers.style.display = "none";
         following.style.display = "none";
         totalRepo.style.display = "none";
         profileNm.innerText = `Sorry but we can't find any github account named   "${search.value}"`;
     }, true);
 }

 window.addEventListener("keydown", (e) => {
     if (e.keyCode == 13) {
         getResult();
     }
 });