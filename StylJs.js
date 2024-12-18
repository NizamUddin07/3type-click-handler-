const sections = document.querySelectorAll('section');

for(const section of sections){

    section.style.border= '2px solid green';
    section.style.marginBottom = '10px';
    section.style.listStyle = 'none';
    section.style.padding = '10px';
    section.style.fontSize='20px';
}

const placeList = document.getElementById('fruts_list');
const li = document.createElement('li');
li.innerText = 'New Text added';
placeList.appendChild(li);

function makeRed(){
    document.body.style.backgroundColor= 'red';
}

const greenButton = document.getElementById('makeGreen');
greenButton.onclick = function doitGreen(){
    document.body.style.backgroundColor ='green'
}
