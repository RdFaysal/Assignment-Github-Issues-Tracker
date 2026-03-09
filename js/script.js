
function login(){

const username = document.getElementById("username").value
const password = document.getElementById("password").value

if(username === "admin" && password === "admin123"){

window.location.href = "main.html"

}else{

alert("Invalid Login")

}

}


let allIssues = [];

async function loadIssues(){

const spinner = document.getElementById("spinner");

spinner.classList.remove("hidden");

const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");

const data = await res.json();

allIssues = data.data;

displayIssues(allIssues);

spinner.classList.add("hidden");

}

if(document.getElementById("issuesContainer")){

loadIssues();

}




function displayIssues(issues){

const container = document.getElementById("issuesContainer");

container.innerHTML = "";

issues.forEach(issue => {
    console.log(issue);
    

const div = document.createElement("div");

let border = issue.status === "open"
? "border-green-500"
: "border-purple-500";

div.className = `card bg-base-100 shadow border-t-4 ${border}`;

div.innerHTML = `

<div class="card-body">
<div class="flex justify-between items-center gap-4">
 <img 
    src="${issue.priority === 'high' || issue.priority === 'medium' ? './assets/Open-Status.png' : './assets/Closed-Status.png'}" 
    alt="Status Icon" 
    class="w-5 h-5"
  />
<span class="badge px-3 py-1 text-sm text-center rounded-xl
  ${issue.priority === 'high' ? 'bg-[#FEECEC] text-[#EF4444]' : 
    issue.priority === 'medium' ? 'bg-[#FFF6D1] text-[#F59E0B]' : 
    'bg-[#EEEFF2] text-[#9CA3AF]'}">
  ${issue.priority}
</span>
</div>
<h2 class="card-title line-clamp-2">${issue.title}</h2>

<p class="text-gray-500">
${issue.description.length > 50 ? issue.description.slice(0, 50) + "..." : issue.description}
</p>
<div class="flex items-center  gap-2">
<span class="py-1 px-2 bg-[#FEECEC] text-[#EF4444] rounded-2xl"> Bug </span>
<span class="py-1 px-2 bg-[#FFF6D1] text-[#F59E0B] rounded-2xl ">HELP WANTED </span>
</div>
<hr class=" border-gray-300 -mx-6 my-2" />
<p class="text-gray-500"> #${issue.id} ${issue.author
}</p>

<p class="text-gray-500"> ${issue.createdAt
}</p>



</div>

`;

div.addEventListener("click", function(){

document.getElementById("modalTitle").innerText = issue.title;

document.getElementById("modalDesc").innerText = issue.description;

issueModal.showModal();

});

container.appendChild(div);

});

}




document.getElementById("openBtn")?.addEventListener("click", function(){

const open = allIssues.filter(i => i.status === "open");

displayIssues(open);

});


document.getElementById("closedBtn")?.addEventListener("click", function(){

const closed = allIssues.filter(i => i.status === "closed");

displayIssues(closed);

});


document.getElementById("allBtn")?.addEventListener("click", function(){

displayIssues(allIssues);

});




async function searchIssue(){

const text = document.getElementById("searchInput").value;

const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`);

const data = await res.json();

displayIssues(data.data);

}

