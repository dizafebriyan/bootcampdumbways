
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
let posttime=new Date();
image=URL.createObjectURL(image[0]);

let datacheckbox = [data1,data2,data3,data4];

let dataform = {
    title,
    startdate,
    enddate,
    content,
    datacheckbox,
    image,
    posttime,
    
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
                    <a href="myProjectDetail.html" target="blank">
                        ${dataproject[index].title}
                    </a>
                </h1>
                <div class="blog-list-item-content-detail">${gettimedistance(dataproject[index].posttime)}</div>
                <div class="blog-list-item-content-detail">Project Time : ${dataproject[index].startdate} - ${dataproject[index].enddate} </div>

                <p>
                    ${dataproject[index].content}
                </p>

            </div>

        </div>`
    }
}

function gettimeago(time){
   const databulan=[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
   ];
   let monthindex=time.getMonth();

   let date=time.getDate();
   let month=databulan[monthindex];
   let year = time.getFullYear();
   let hours=date.getHours();
   let minutes=date.getMinutes();

   if (minutes<10){
    minutes=`0${minutes}`;
   }



}

function gettimedistance(time){
    timenow=new Date();
    let distance = timenow-time; //hasilnya milidetik

    const milisecond=1000;
    const second1hours=3600;
    const hours1days=24;

    let distanceday = Math.floor(
        distance/(milisecond*second1hours*hours1days)
        );
    let distancehours= Math.floor(
        distance/(milisecond*60*60)
    );
    let distanceminutes=Math.floor(
        distance/(milisecond*60)
    );
    let distanceseconds=Math.floor(
        distance/milisecond
    );

    if (distanceday>0){
        return `${distanceday} Day Ago`;
    }

    else if (distancehours>0){
        return `${distancehours} Hours Ago`;
    }
    
    else if (distanceminutes>0){
        return `${distanceminutes} Minutes Ago`;
    }

    else{
        return `${distanceseconds} Seconds Ago`;
    }
    
}

setInterval (function(){
    renderBlog();
},3000);
