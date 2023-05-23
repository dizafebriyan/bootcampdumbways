
// let datakita = {
//     nama:"diza febriyan",
//     umur:23,
//     asal:"palembang",
// };

// console.log(datakita);

// console.log(datakita.nama);

// //array of object

// let kumpulannama=[
//     {nama: "diza febriyan",umur: 23,},
//     {nama: "ucok", umur:22},
// ];

// console.log(kumpulannama);
// console.log(kumpulannama[1].nama);

let dataproject=[];

function addblog(event){
event.preventDefault();

let title = document.getElementById("input-blog-title").value;
let startdate = document.getElementById("input-blog-date-start").value;
let enddate = document.getElementById("input-blog-date-end").value;
let content = document.getElementById("input-blog-content").value;
let data1 = Number(document.getElementById("iot").checked);
let data2 = Number(document.getElementById("datascience").checked);
let data3 = Number(document.getElementById("fullstack").checked);
let data4 = Number(document.getElementById("contentcreator").checked);
let image = document.getElementById("input-blog-image").files;

image=URL.createObjectURL(image[0]);

let datacheckbox = [data1,data2,data3,data4];

let dataform = {
    title,
    startdate,
    enddate,
    content,
    datacheckbox,
    image,
}

dataproject.push(dataform);

console.log(dataproject);
renderBlog();
}


function renderBlog(){
    document.getElementById("contents").innerHTML="";

    for(let index = 0;index<dataproject.length; index++){
        document.getElementById("contents").innerHTML+=`
        <div class="blog-list-item">
            <div class="blog-list-item-image">
                <img src="${dataproject[index].image}" alt="Foto Bahasan"/>
            </div>
            <div class="blog-list-item-content">
                <div class="blog-list-item-content-button">
                    <button class="btn-edit">Edit Project</button>
                    <button class="btn-delete">Delete Project</button>
                </div>

                <h1>
                    <a href="blogDetail.html" target="blank">
                        ${dataproject[index].title}
                    </a>
                </h1>
                <div class="blog-list-item-content-detail">${dataproject[index].startdate} - ${dataproject[index].enddate}</div>

                <p>
                    ${dataproject[index].content}
                </p>

            </div>

        </div>`
    }
}