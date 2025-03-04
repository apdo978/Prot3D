// email
(function () {
    emailjs.init({
        publicKey: "pTJXgAYxxtFObHDBu",
    });
})();
   let swiper = new Swiper('.swiper-container', {
        effect: 'cube', 
        allowTouchMove: false,
        grabCursor: false,
        cubeEffect: {
            shadow: false,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        mousewheel: false,
     
    });
        function Navigate(index){
            for(let i of document.querySelectorAll('Li')) i.classList.remove('active'); 
            Array.from(document.querySelectorAll('Li'))[index].classList.add('active');
            swiper.slideTo(index,1000,true);
        }
   let swiper1 = new Swiper('.swiper-container1', {
       effect: "slide", // بدل "fade"
       
       autoplay: {
           delay: 3000,
       },
     
    });    
// ai part
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', isUser ? 'user-message' : 'bot-message');
    messageDiv.textContent = content;
    chatBody.append(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}
function showLoadingIndicator() {
    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('loading');
    loadingDiv.innerHTML = '<span></span><span></span><span></span>';
    chatBody.appendChild(loadingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    return loadingDiv;
}
sendBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;

    addMessage(message, true);
    chatInput.value = '';
    sendBtn.disabled = true;

    const loadingIndicator = showLoadingIndicator();
    try {
        const response = await fetch('https://test-production-524a.up.railway.app/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
        });


        const data = await response.json();

        if (!data) {
            chatBody.removeChild(loadingIndicator);
            addMessage('Oops! Something went wrong.');
        } else {
            chatBody.removeChild(loadingIndicator);
            addMessage(data.reply);
        }
    } catch (error) {
        chatBody.removeChild(loadingIndicator);
        addMessage('Error connecting to the server.');
    }

    sendBtn.disabled = false;
});
document.getElementById('fullscreen-button').addEventListener('click', function () {

    document.querySelector('.chat-container').requestFullscreen();
});

//1287bfad53e041329ff22f23cb6fd900
const form1 = document.querySelector(".test")
const contactinfo = document.querySelector(".infoico")
// const t3 = document.querySelector(".t3")
// const f4 = document.querySelector(".f4")
const elements = [form1, contactinfo]
let elem;

// console.log( form.style.display!="none");

 function nav(num){
     [elem] = elements.filter((ele)=>{
        return ele.style.display != "none"
     })
     if (elem.classList.contains("show")){
         elem.classList.remove("show")
     }
     elem.classList.add("hide")
     setTimeout(()=>{
         elem.style.display = "none"
         elem.classList.remove("hide")
         elements[num].style.display = "flex"
         elements[num].classList.add("show")
    },1000)

}
const chatbutt = document.querySelector(".chat-butt") 
const exit =document.querySelector(".chat-header i ") 
const chat = document.querySelector('.card-Chat')
chatbutt.addEventListener("click", ()=>{
    chat.classList.remove("hide")
    chat.classList.add("show")
    chat.style.display = 'flex'
    chatbutt.style.display = "none"
    
    
})
exit.addEventListener("click", ()=>{
        chat.classList.remove("show")
        chat.classList.add("hide")
        setTimeout(()=>{
            chat.style.display = "none"
        },500)
        chatbutt.style.display = "flex"
        chatbutt.classList.add("show")
        
})


//send email funcc
const form = document.querySelector('#contact-form')


const phoneInput = document.getElementById('phone-number');
const phonePattern = /^01[0-9]{9}$/;
const errorMessage = document.getElementById('error-message');
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const messageName = document.getElementById('message')
const serviceID = 'service_67kb1dc'
const TemplateID = 'template_y85lxo7'

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = { firstName: firstName.value, lastName: lastName.value, phoneInput: phoneInput.value, email: email.value, messageName: messageName.value }
    Swal.fire({
        title: 'Sending...',
        text: 'Please wait while your email is being sent.',
        icon: 'info',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
    emailjs.send(serviceID, TemplateID, formData).then((res) => {

        Swal.fire({
            title: 'Success!',
            text: 'Your Email sent successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        firstName.value = '';
        phoneInput.value = '';
        lastName.value = '';
        email.value = '';
        messageName.value = '';
    }).catch(err => {
        Swal.fire({
            title: 'Error!',
            text: `Failed to send email: ${err}`,
            icon: 'error',
            confirmButtonText: 'OK'
        });
    })

})
let preseed = false
const asidebutt = document.querySelector(".fa-angle-right")
const aside = document.querySelector(".side-bar")
const divrot = document.querySelector(".div-i-side")
const listtext = Array.from(document.querySelectorAll(".side-bar Li span"))
const listicons = Array.from(document.querySelectorAll(".side-bar Li i"))
const ul = document.querySelector(".side-bar ul")



asidebutt.addEventListener("click", ()=>{
    if (preseed) {

        aside.classList.remove("closed");
        divrot.style.transform = "rotate(180deg)"
        ul.classList.remove("li-right");
        // listtext.forEach((ele) => {
        //     ele.style.opacity = "1"
        //     // ele.style.display = "inline"
        // })
        
        preseed = false
        return 
    }
    aside.classList.add("closed");
    divrot.style.transform = "rotate(0deg)"
    setTimeout(() => { 

        ul.classList.add("li-right");
    },400)
    // listtext.forEach((ele)=>{
    //     ele.style.opacity = "0"
    //     // ele.style.display = "none"
    // })
    preseed = true
})



