let issueContainer = document.getElementById('issues-container');
let url = 'https://api.github.com/repos/facebook/react/issues';
let fetchDatafromApi = async () => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => renderData(data));
};
let renderData = (data) => {
  console.log(data);
  issueContainer.innerHTML = '';
  for (let i of data) {
    let newDiv = document.createElement('div');
    newDiv.className = 'issue-container d-flex';
    newDiv.innerHTML = `
    <div class="issue-icon"><i class="far fa-dot-circle"></i></div>
    <div class="issue-title">
    <a href="${i.html_url}">${i.title}</a>
   <div class="title-second-row">
   <div class="issue-title-info d-flex">
   <div class="issue-id">#${i.number}</div>
   <div class="issue-opened">Last opened by ${i.user.login}</div></div>
     </div>
    </div>
    <div class="issue-comment d-flex"><i class="far fa-comment"></i>${i.comments}</div>

    
    `;

    issueContainer.appendChild(newDiv);
  }
};

document.addEventListener('DOMContentLoaded', fetchDatafromApi());
