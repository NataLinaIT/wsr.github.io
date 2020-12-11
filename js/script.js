//language change
const portuguese = {
  home: "Casa",
  about_us: "Sobre nós",
  services: "Serviços",
  contact: "Contacto",
  english: "Inglês",
  portuguese: "Portugues",
  A: "A",
  wolf: "Wolf Security Resources ",
  about_div1:
    "trabalha para o restabelecimento e manutenção da paz por meio do amparo de ações cujo objetivo principal seja levar ajuda humanitária, esperança, dignidade, direitos humanos a pessoas que estejam em áreas de conflito.",
  about_div2:
    "Assim, contamos com uma equipa especializada para logística e apoio operacional de missões de manutenção da paz; evacuação de não combatentes; segurança de instalações estratégicas e de infraestruturas críticas; proteção de comboios e contentores terra – mar (incluindo de ajuda humanitária) e closed proteccion",
  button_read: "Ler mais ...",
  we_are: "Nós somos",
  about_div3:
    "é a primeira empresa de Segurança Militar Privada Portuguesa, que tem em seu corpo tático – operacional pessoal exclusivamente de nacionalidade portuguesa cujo requisito básico é terem sido – militares das Forças Especiais Portuguesas – reconhecida pela ONU como ter uma das melhores e mais bem treinadas Forças Especiais do mundo.",
  about_div4: "Entretanto, o diferencial na escolha da ",
  about_div5:
    "não termina por aqui. Nossos operadores detém competência técnica constantemente aprimorada e reciclada .Os operadores passam sistematicamente por avaliações psicológicas e treino operacional que os mantém atualizados com as mais recentes linhas de defesa e aptos a realização de qualquer operação com vistas à manutenção e restabelecimento da paz com foco nas questões humanitárias.",
  about_div6: "Ressalta-se ainda que todos os profissionais contratados pela ",
  about_div7:
    "são entrevistados e investigados pela empresa antes de serem contratados e suas condutas éticas, morais e profissionais, são constantemente monitoradas e avaliadas, pois, atuam dentro de uma rígida estrutura de hierarquia e disciplina, em fiel observância às leis internacionais e nacionais portuguesas, bem como, dos países em que realizem as missões.",

  our_servises: "Outros serviços",
  martime_security: "Segurança maritima",
  consulting: "Security Training & Consultoria",
  back: "Voltar...",
  services_div1:
    "Profissional para realizar segurança e proteção pessoal (autoridades; diplomatas; personalidades públicas; empresários; membros de organizações internacionais e humanitárias; executivos e funcionários de multinacionais, etc.). O profissional capacitado em Closed Protection também realiza segurança e proteção a entidades de impacto e relevância global como Parlamento Europeu; Organização das Nações Unidas; Cruz Vermelha, etc.",
  services_div2:
    "Profissional apto para atuar em operações antipirataria marítima e fluvial, bem como, escolta de contentores e suprimentos em águas internacionais ou respeitando a legislação de cada Estado Nacional.",
  services_div3:
    "Profissionais preparados para operações protectoras em um ambiente hostil, tais como: segurança de instalações estratégicas e de infraestruturas críticas; operações de pacificação e manutenção da paz; operação de evacuação de não combatentes; combate urbano.",
  services_div4:
    "Consultadoria e Assessoramento para elaboração do planejamento estratégico e operacional da missão de nossos clientes, compreendendo desde o apoio logístico para a análise da missão até a desmobilização do pessoal tático operacional que trabalhou na missão.",
  how_work: "Como funcionamos",
  step1: "Contacte-nos",
  step2: "Nos forneça os detalhes",
  step3: "Consigo o trabalho feito",
  partners: "Estamos a trabalhar com",
  company: "Contactos da empresa",
};
const english = {
  home: "Home",
  about_us: "About us",
  services: "Services",
  contact: "Contact",
  english: "English",
  portuguese: "Portugues",
  A: "A",
  wolf: "Wolf Security Resources",
  about_div1:
    "works towards restoring and peacekeeping througth means of supporting actions actions whose main objective is to bring humanitarian aid, hope, dignity, and human rights to people in conflitct areas.",
  about_div2:
    "Thus, we have a specialized team for a logistics and a operational support of missions of peacekeeping; evacuation of non – combatants; security of strategic facilities and critical infrastructures; protection of land – based trains and containers (including humanitarian aid) and Close Protection",
  button_read: "Rad more ...",
  we_are: "We are",
  about_div3:
    "has in its tactical-operative body personnel exclusively  of Portuguese nationality, whose basic requirement is to be ex-military of the Portuguese Special Forces (this is recognized by the UN as one of the best and best trained Special Forces in the world, with experience in international military operations) who have served in the Marines; Special Operations (rangers); Parachutists and Commands, and some operators still stand out for being decorated for their international performance.",
  about_div4: "However, the differentiation in choosing",
  about_div5:
    "does not end here. Our operators have high technicalcompetence, constantly improved and recycled with costs borne by the company itself: Operators systematically go through psychological evaluations and operational training, which keeps them updated with the latest lines of defense and capable of carrying out any peace-keeping and peace-building operation with a focus on humanitarian issues.",
  about_div6: "is also worth noting that all professionals hired by",
  about_div7:
    "are interviewed and investigated by the company before hiring them, and their ethical, moral and professional conduct is constantly monitored and evaluated. They operate within a rigid structure of hierarchy and discipline, in faithful compliance with Portuguese international and national laws, as well as the countries where the missions are carried out.",
  our_servises: "Our services",
  martime_security: "Martime Security",
  consulting: "Security Training & Consulting",
  back: "Back...",
  services_div1:
    "Professional to perform security and personal protection (authorities; diplomats; public figures; businessmen; members of international and humanitarian organizations; executives and employees of multinationals, etc.). The Closed Protection practitioner also provides security and protection to entities of global impact and relevance such as the European Parliament; United Nations Organization; Red Cross, etc.",
  services_div2:
    "Professional able to act in maritime and fluvial anti-piracy operations, as well as escort of containers and supplies in international waters or respecting the legislation of each National State.",
  services_div3:
    "Professionals prepared for protective operations in a hostile environment, such as: security of strategic facilities and critical infrastructures; peacekeeping operations; non-combatant evacuation operation; urban combat.",
  services_div4:
    "Consultancy and Advice for the strategic and operational planning of our clients' mission, ranging from logistic support for mission analysis to the demobilization of tactical operational personnel who worked on the mission.",
  how_work: "How It Works",
  step1: "Contact us",
  step2: "Provide us details",
  step3: "Concider job done",
  partners: "We are working with",
  company: "Company contacts",
};

let select = document.querySelector("select");

select.addEventListener("change", function() {
  if (select.value === "portuguese") {
    getNode(portuguese, "pt");
  } else {
    getNode(english, "en");
  };
});

function getNode(obj_language, lang) {
  document.querySelectorAll("*").forEach(function(node) {
    if (node.dataset.language) {
      let obj = node.dataset;
      for (let keyData in obj) {
        changeLanguage(node, obj[keyData], obj_language, lang);
      }
    }
  });
}

function changeLanguage(node, data, obj_language, lang) {
  for (let keyLanguage in obj_language) {
    if (data == keyLanguage) {
      node.innerText = obj_language[keyLanguage];
      node.setAttribute("lang", lang);
    }
  }
}
;
//Burger
document.querySelector(".burger").onclick = () => {
  document.querySelector("nav").classList.toggle("opened");
  document.querySelector(".burger").classList.toggle("opened");
  document.querySelector("h1").classList.toggle("hidden");
  document.querySelector(".h3_header").classList.toggle("hidden");
};;
//modal window
//open modal about_us
document
  .querySelector(".button_about")
  .addEventListener("click", getClassAbout);

function getClassAbout() {
  openModal(".wrap_about");
}

//Open modals our_servises
document.querySelector(".close_protection").addEventListener("click", getClass);
document
  .querySelector(".martime_security")
  .addEventListener("click", getClass2);
document.querySelector(".contractors").addEventListener("click", getClass3);
document.querySelector(".consulting").addEventListener("click", getClass4);

let serviceArr = document.querySelectorAll(".icon");
serviceArr[0].addEventListener("click", getClass);
serviceArr[1].addEventListener("click", getClass2);
serviceArr[2].addEventListener("click", getClass3);
serviceArr[3].addEventListener("click", getClass4);

function getClass() {
  openModal(".modal_close_protection");
}
function getClass2() {
  openModal(".modal_martime_security");
}
function getClass3() {
  openModal(".modal_contractors");
}
function getClass4() {
  openModal(".modal_consulting");
}

function openModal(modal_class) {
  document.querySelector(modal_class).classList.remove("hidden");
  hideArraw();
}

//close modal
document.querySelectorAll(".close").forEach(el => (el.onclick = hideModal));

document
  .querySelectorAll("#our_services .modal-hide")
  .forEach(el => (el.onclick = hideModal));

document.onkeydown = e => {
  if (e.keyCode == 27) {
    hideModal();
  }
};

function hideModal() {
  document
    .querySelectorAll(".modal-hide")
    .forEach(el => el.classList.add("hidden"));
  document.querySelector(".fa-arrow-circle-up").style.display = "block";
}

function hideArraw() {
  document.querySelector(".fa-arrow-circle-up").style.display = "none";
}

//close modal mobile
document.querySelectorAll(".back").forEach(el => (el.onclick = hideModal));
;
//slider
let slides = document.querySelectorAll(".slider_item");
let slider = [];

for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i].src;
  slides[i].remove();
}
let stepSlider = 0;
let offsetSlider = 0;

function drow() {
  let img = document.createElement("img");
  img.src = slider[stepSlider];
  img.classList.add("slider_item");
  img.classList.add("fade_slide");
  img.style.left = offsetSlider * 600 + "px";
  document.querySelector(".slider").appendChild(img);

  if (stepSlider + 1 == slides.length) {
    stepSlider = 0;
  } else {
    stepSlider++;
  }
  offsetSlider++;
}

function left() {
  let slides2 = document.querySelectorAll(".slider_item");
  let offsetSlider2 = 0;
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.left = offsetSlider2 * 600 - 600 + "px";
    slides2[i].classList.add("fade_slide");
    offsetSlider2++;
  }
  setTimeout(function() {
    slides2[0].remove();
    drow();
  }, 1000);
}
drow();
drow();
setInterval(left, 6000);;

//animations in section on
const achievedTop = document.getElementById("achieved").offsetTop;
const counter = document.querySelectorAll(".count");
const texts = document.querySelectorAll(".typewriter");
let statsAnimated = false;

window.onscroll = function() {
  let scrollTop =
    document.documentElement.scrollTop || document.scrollingElement.scrollTop;
  onScroll(scrollTop);
};

function onScroll(top) {
  if (top > achievedTop - 600 && !statsAnimated) {
    statsAnimated = true;

    for (let i = 0; i < counter.length; i++) {
      countStats(counter[i]);
      typewrite(texts[i]);
    }
  }
}

function plusOne() {
  setTimeout(function() {
    document.querySelector(".saved_lives").innerHTML =
      '<div class="number count saved_lives">&nbsp</div>';
  }, 2000);
  setInterval(function() {
    document.querySelector(".saved_lives").innerText = "+1";
  }, 2000);
}
plusOne();

//counters
function countStats(statElem) {
  let num = Number(statElem.getAttribute("data-count"));
  let currentNum = 0;
  let intervalId = setInterval(function() {
    if (currentNum < num) {
      currentNum++;
      statElem.innerText = currentNum;
    } else {
      clearInterval(intervalId);
    }
  }, 2000 / num);
}

//typewriter
function typewrite(textEl) {
  let chars = textEl.getAttribute("data-text").split("");
  let charNumber = 0;

  let timer = setInterval(function() {
    if (charNumber < chars.length) {
      textEl.textContent += chars[charNumber];
      charNumber++;
    } else {
      clearInterval(timer);
    }
  }, 100);
}

//smooth scroll
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("scroll")) {
    event.preventDefault();
    let target = event.target.getAttribute("href");
    let targetPosition = document.querySelector(target).offsetTop;
    window.scrollTo({
      top: targetPosition,
      left: 0,
      behavior: "smooth"
    });
  }
});

//hide totop on header
const totop =  document.querySelector("#totop");
document.addEventListener("scroll", function(){
  if(pageYOffset <= 80){
    totop.style.opacity = "0";
  } else {
    totop.style.opacity = "0.7";
  }
})




