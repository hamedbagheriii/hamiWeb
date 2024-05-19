function main(){

    // change item in section 6 for click in btn
    function changeItem(){
        //get teg
        const Loading=document.getElementById("cardLoad")
        const btnUi1=document.getElementById("btnUi1");
        const btnUi2=document.getElementById("btnUi2");
        const title1=document.getElementById("textPower1");
        const title2=document.getElementById("textPower2");
        const title3=document.getElementById("textPower3");
        const numTitle1=document.getElementById("numTitle1");
        const numTitle2=document.getElementById("numTitle2");
        const numTitle3=document.getElementById("numTitle3");
        const progress1=document.getElementById("progress1");
        const progress2=document.getElementById("progress2");
        const progress3=document.getElementById("progress3");

        //set btn1 style  
        btnUi1.addEventListener("click",()=>{
            setTimeout(() => {
                //remove Loading
                Loading.classList.remove("d-block");
                Loading.classList.add("d-none");

                //set innerText in Title
                title1.textContent="HTML";
                title2.textContent="CSS";
                title3.textContent="JS";
            
                //set number in title
                numTitle1.textContent="90%";
                numTitle2.textContent="85%";
                numTitle3.textContent="80%";  

                //set btn action
                btnUi2.classList.remove("pe-none")
                btnUi1.classList.add("pe-none")

                //set progress bar width
                progress1.style.width="90%";
                progress2.style.width="85%";
                progress3.style.width="80%";
                
            }, 2000);
            

            //set Loading
            Loading.classList.remove("d-none");
            Loading.classList.add("d-block");
            btnUi2.classList.add("pe-none")
            btnUi1.classList.add("pe-none")

            //set btn color
            btnUi2.classList.remove("btn-danger");
            btnUi1.classList.remove("border");
            btnUi1.classList.remove("border-secondary");
            btnUi2.classList.remove("text-white");
            btnUi2.classList.add("text-dark");
            btnUi2.classList.add("border");
            btnUi2.classList.add("border-secondary");
            btnUi1.classList.add("btn-danger");
            btnUi1.classList.add("text-white");

        
     })

        //set btn2 style  
        btnUi2.addEventListener("click",()=>{
            setTimeout(() => {
                 //remove Loading
                Loading.classList.remove("d-block");
                Loading.classList.add("d-none");

                //set innerText in Title
                title1.textContent="JS";
                title2.textContent="#C";
                title3.textContent="PHP";
                
                //set number in title
                numTitle1.textContent="80%";
                numTitle2.textContent="30%";
                numTitle3.textContent="55%";  

                //set btn action
                btnUi1.classList.remove("pe-none")
                btnUi2.classList.add("pe-none")

                //set progress bar width
                progress1.style.width="80%";
                progress2.style.width="30%";
                progress3.style.width="55%";

            }, 2000);
                

            //set Loading
            Loading.classList.remove("d-none");
            Loading.classList.add("d-block");
            btnUi2.classList.add("pe-none")
            btnUi1.classList.add("pe-none")

            //set btn color
            btnUi1.classList.remove("btn-danger");
            btnUi2.classList.remove("border");
            btnUi2.classList.remove("border-secondary");
            btnUi1.classList.remove("text-white");
            btnUi1.classList.add("text-dark");
            btnUi1.classList.add("border");
            btnUi1.classList.add("border-secondary");
            btnUi2.classList.add("btn-danger");
            btnUi2.classList.add("text-white");

        })

    };
    changeItem()

    // change item in section project for click in btn
    function changeItem2(){
        //get teg
        const Loading=document.getElementById("cardLoad2")
        const allCards=document.querySelectorAll(".card-project")
        const notCard=document.getElementById("not-card");
        const notCard2=document.getElementById("not-card2");
        const btnUi1=document.getElementById("btnUi1p");
        const btnUi2=document.getElementById("btnUi2p");
        const btnUi3=document.getElementById("btnUi3p");
        const title1=document.getElementById("titleProject1");
        const title2=document.getElementById("titleProject2");
        const title3=document.getElementById("titleProject3");
        const title4=document.getElementById("titleProject4");
        const text1=document.getElementById("textProject1");
        const text2=document.getElementById("textProject2");
        const text3=document.getElementById("textProject3");
        const text4=document.getElementById("textProject4");
        const img1=document.getElementById("img-project1");
        const img2=document.getElementById("img-project2");
        const img3=document.getElementById("img-project3");
        const img4=document.getElementById("img-project4");

        //set btn1 style  
        btnUi1.addEventListener("click",()=>{
            setTimeout(() => {
                //remove Loading
                Loading.classList.remove("d-block");
                Loading.classList.add("d-none");
                allCards.forEach(element => {
                    element.classList.add("card-project");
                });

                //add card
                notCard.classList.remove("d-none");
                notCard2.classList.remove("d-none");
                notCard.classList.add("d-block");

                //set / remove img
                img1.removeAttribute("src")
                img1.setAttribute("src","img/shakhsi.png")
                img2.removeAttribute("src");
                img2.setAttribute("src","img/market.jpg")
                img3.removeAttribute("src");
                img3.setAttribute("src","img/1page.png");
                img4.removeAttribute("src")
                img4.setAttribute("src","img/amozeshi.png");

                //set innerText in Title
                title1.textContent="شخصی";
                title2.textContent="فروشگاهی";
                title3.textContent="تک صفحه ای";
                title4.textContent="آموزشی";
            
                //set innerText in Text
                text1.textContent="طراحی وب";
                text3.textContent="طراحی وب";
                text2.textContent="طراحی وب";
                text4.textContent="طراحی وب"; 

                //set btn action
                btnUi2.classList.remove("pe-none")
                btnUi3.classList.remove("pe-none")
                btnUi1.classList.add("pe-none")

                
            }, 2000);
            

            //set Loading
            Loading.classList.remove("d-none");
            Loading.classList.add("d-block");
            btnUi2.classList.add("pe-none")
            btnUi3.classList.add("pe-none")
            btnUi1.classList.add("pe-none")
            allCards.forEach(element => {
                element.classList.remove("card-project");
            });

            //set btn color
            btnUi2.classList.remove("btn-danger");
            btnUi3.classList.remove("btn-danger");
            btnUi1.classList.remove("border");
            btnUi1.classList.remove("border-secondary");
            btnUi2.classList.remove("text-white");
            btnUi3.classList.remove("text-white");
            btnUi2.classList.add("text-dark");
            btnUi3.classList.add("text-dark");
            btnUi2.classList.add("border");
            btnUi3.classList.add("border");
            btnUi2.classList.add("border-secondary");
            btnUi3.classList.add("border-secondary");
            btnUi1.classList.add("btn-danger");
            btnUi1.classList.add("text-white");

        
     })

        //set btn2 style  
        btnUi2.addEventListener("click",()=>{
            setTimeout(() => {
                //remove Loading
                Loading.classList.remove("d-block");
                Loading.classList.add("d-none");
                allCards.forEach(element => {
                    element.classList.add("card-project");
                });

                //remove card
                notCard.classList.add("d-none");
                notCard2.classList.remove("d-none");
                
                //set / remove img
                img1.removeAttribute("src")
                img1.setAttribute("src","img/Cshp.png");
                img2.removeAttribute("src")
                img2.setAttribute("src","img/jsp.jpg");
                img3.removeAttribute("src")
                img3.setAttribute("src","img/phpp.png");

                //set innerText in Title
                title1.textContent="نرم افزار";
                title2.textContent="بازی";
                title3.textContent="بک اند";
            
                //set innerText in Text
                text1.textContent="#C";
                text2.textContent="JS";
                text3.textContent="PHP";

                //set btn action
                btnUi1.classList.remove("pe-none")
                btnUi3.classList.remove("pe-none")
                btnUi2.classList.add("pe-none")


            }, 2000);
                

            //set Loading
            Loading.classList.remove("d-none");
            Loading.classList.add("d-block");
            btnUi2.classList.add("pe-none")
            btnUi3.classList.add("pe-none")
            btnUi1.classList.add("pe-none")
            allCards.forEach(element => {
                element.classList.remove("card-project");
            });

            //set btn color
            btnUi1.classList.remove("btn-danger");
            btnUi3.classList.remove("btn-danger");
            btnUi2.classList.remove("border");
            btnUi2.classList.remove("border-secondary");
            btnUi1.classList.remove("text-white");
            btnUi3.classList.remove("text-white");
            btnUi1.classList.add("text-dark");
            btnUi3.classList.add("text-dark");
            btnUi1.classList.add("border");
            btnUi3.classList.add("border");
            btnUi1.classList.add("border-secondary");
            btnUi3.classList.add("border-secondary");
            btnUi2.classList.add("btn-danger");
            btnUi2.classList.add("text-white");


        })
        
        //set btn3 style  
        btnUi3.addEventListener("click",()=>{
            setTimeout(() => {
                //remove Loading
                Loading.classList.remove("d-block");
                Loading.classList.add("d-none");
                allCards.forEach(element => {
                    element.classList.add("card-project");
                });

                //remove card
                notCard.classList.add("d-none");
                notCard2.classList.add("d-none");

                //set / remove img
                img1.removeAttribute("src")
                img1.setAttribute("src","img/ui1.jpg")
                img2.removeAttribute("src");
                img2.setAttribute("src","img/ui2.png")

                //set innerText in Title
                title1.textContent="ورزشی";
                title2.textContent="شبکه اجتماعی";
            
                //set innerText in Text
                text1.textContent="FIGMA";
                text2.textContent="FIGMA";

                //set btn action
                btnUi1.classList.remove("pe-none")
                btnUi2.classList.remove("pe-none")
                btnUi3.classList.add("pe-none")


            }, 2000);
                

            //set Loading
            Loading.classList.remove("d-none");
            Loading.classList.add("d-block");
            btnUi2.classList.add("pe-none")
            btnUi3.classList.add("pe-none")
            btnUi1.classList.add("pe-none")
            allCards.forEach(element => {
                element.classList.remove("card-project");
            });

            //set btn color
            btnUi1.classList.remove("btn-danger");
            btnUi2.classList.remove("btn-danger");
            btnUi3.classList.remove("border");
            btnUi3.classList.remove("border-secondary");
            btnUi1.classList.remove("text-white");
            btnUi2.classList.remove("text-white");
            btnUi1.classList.add("text-dark");
            btnUi2.classList.add("text-dark");
            btnUi1.classList.add("border");
            btnUi2.classList.add("border");
            btnUi1.classList.add("border-secondary");
            btnUi2.classList.add("border-secondary");
            btnUi3.classList.add("btn-danger");
            btnUi3.classList.add("text-white");

        })

    };
    changeItem2()


    // send form data
    function sendData(e){

        // get tag
        const fullName=document.querySelector(".fullName").value;
        const email=document.querySelector(".email").value;
        const textBody=document.querySelector(".textBody").value;
        

        //create date Time
        const date=new Date();
        //create day
        const day = date.getDay();
        const days = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
        //get day Name
        var dayName = days[day];
        //get hours 
        var hours = date.getHours();
        //get minute
        var minutes = date.getMinutes();
        //create FullTime 
        const time=`${hours}:${minutes} ، ${dayName}`
        


        //create params
        const params={FullName:fullName,UserEmail:email,TextBody:textBody,Time:time};
        var allParams=[];

        if (localStorage.getItem("userInfo")) {
            allParams=JSON.parse(localStorage.getItem("userInfo"));
        }

        allParams.push(params);
       
        localStorage.setItem("userInfo",JSON.stringify(allParams))
        // localStorage.removeItem("userInfo")        
        location.reload();

    }
    document.getElementById("btnSubmit").addEventListener("click",sendData)



    //get data
    function getData(){

        var data=JSON.parse(localStorage.getItem("userInfo"))
        for (const element of data) {
            
            //create teg of Element
            var card=document.createElement("div");
            var cardBody=document.createElement("div");
            var userName=document.createElement("h5");
            var time=document.createElement("h5");
            var textBody=document.createElement("p");
    
            //set className
            card.className="carousel-item";
            cardBody.className="card cardText cardShadow py-4 border rounded-3 border-2 border-secondary px-3 mb-3 mx-3";
            userName.className="card-title user-select-none text-danger";
            time.className="card-text text-secondary user-select-none";
            textBody.className="card-text mt-3  user-select-none";
    
             //set innerText in tag
            userName.innerText=element.FullName;
            time.innerText=element.Time;
            textBody.innerText=element.TextBody;
    
    
            //append tag
            cardBody.appendChild(userName);
            cardBody.appendChild(time);
            cardBody.appendChild(textBody);
            card.appendChild(cardBody);
    
            //append child card in HTML
            document.querySelector(".carousel-inner").appendChild(card);
        
        }
    }
    getData();













}

document.addEventListener("DOMContentLoaded",main)