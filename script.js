
const usersData = [
    {
        id:0,
        username:"Wade Wilson",
        image:"https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city:"California",
        country:"USA",
        techStak:["PHP","android","IOS",'Flutter','Swift','Kotlin','Java'],
        description:"Alexandra is very dedicated developer for mobile platforms and very good designer as well.",
    },
    {
        id:1,
        username:"Alex Morgan",
        image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city:"London",
        country:"UK",
        techStak:["UI","UX","Photoshop",'AfterEffect','Premier Pro','Adobe Illutrator'],
        description:"Wade is a 32 year old UI/UX designer, with impressive portfolio behind him.",
    },
    
    {
        id:2,
        username:"Jonathan Jones",
        image:"https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city:"Berlin",
        country:"Germany",
        techStak:["Node.JS","MongoDB","React.JS",'HTML','CSS','JS','Express','Redux','Firebase','Next.JS','Angular.JS'],
        description:"Jonathan is very good web developer who can create any web application with high effeciency",
    },
    
]

var imgdiv1 = document.querySelector('.main .card img');
var imgdiv2 = document.querySelector('.main .card2 img');
var descr1 = document.querySelector('.main .card p');
var descr2 = document.querySelector('.main .card2 p');
var cityname1 = document.querySelector('.main .card .city');
var city2name = document.querySelector('.main .card2 .city');
var cardonename = document.querySelector('.main .card h1');
var cardtwome = document.querySelector('.main .card2 h1');
var techstack1 = document.querySelector('.main .card .techs');
var techstack2 = document.querySelector('.main .card2 .techs');




for(var i = 0;i< 3;i++){
    
    var techstack = `<div class="techstack border-2 border-gray-950 px-2 py-1 rounded-[50px]"> ${usersData[0].techStak[i]}</div>`;
   // techstack1.appendChild(techstack);
    techstack1.innerHTML += techstack;
    var techstack = `<div class="techstack border-2 border-gray-950 px-2 py-1 rounded-[50px]"> ${usersData[1].techStak[i]}</div>`;
    techstack2.innerHTML += techstack;
    //techstack2.appendChild(techstack);
}

imgdiv1.setAttribute('src',usersData[0].image);
imgdiv2.setAttribute('src',usersData[1].image);
cardonename.innerHTML = usersData[0].username;
cityname1.innerHTML =  ` ${usersData[0].city},${usersData[0].country}`;
city2name.innerHTML = ` ${usersData[0].city},${usersData[1].country}`;
cardtwome.innerHTML = usersData[1].username;

descr1.innerHTML = usersData[0].description;
descr2.innerHTML = usersData[1].description;


