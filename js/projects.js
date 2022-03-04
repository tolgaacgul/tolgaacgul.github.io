// Projeler kısmı
let idContent = document.querySelector("#idContent")
let projects = [
    {
        title : "sendeoyver.com",  
        description : "Seçim anketlerinin daha hızlı ve pratik yapılabileceği web tabanlı uygulama. İsteyen oyunu kullanarak sonuçlara erişebilir.",
        img : "assets/img/sendeoyver.jpg",
        link :  "https://sendeoyver.com"
    },
    {
        title : "ToDo List With JS",
        description : "Yapmak istediklerinizin listesini tutabileceğiniz bir app. Yapacaklarım kısmından yapıyorum ya da yaptım kısmına taşıyabilirisiniz.",
        img : "assets/img/todolistjs.jpg",
        link : "../project/todolist/index.html"
    },
    {
      title : "Hipotenüs Aracı",
      description : "İlgili iki değeri girerek girilmeyen kenarın uzunluğunu bulmak için kullanılabilir.",
      img : "assets/img/hipotenus.jpg",
      link : "../project/hipotenus/index.html"
    }
]
/* Çalışmalar / Clone Örnekler */
let working = [
  {
      title : "linkedin clone",  
      description : "Linkedin 'in genel yapısına uygun gelişritilmiş clone",
      img : "assets/img/linkedinclone.jpg",
      link : "../working/linkedin/index.html"
  },
  {
    title : "Google clone",  
    description : "Google'in genel yapısına uygun gelişritilmiş clone",
    img : "assets/img/google22clone.jpg",
    link : "../working/google22/index.html"
}
]

writeProjects(projects,"Projects");
writeProjects(working,"Working / Clone");
function writeProjects(arr,titleSubj=""){
    idContent.innerHTML += `
    <div class="col-12 col-sm-12">
      <h4 class="d-inline">${titleSubj}</h4>
      <span><u>${arr.length}</u></span>
      <hr>
    </div>`;
    arr.forEach(e => {
        idContent.innerHTML += `                  
        <div class="col">
          <div class="card cardObj">
            <img src="${e.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">
                <a href="${e.link}" class="nav-link p-0 ">
                  <i class="bi bi-link-45deg"></i>
                  <span>${e.title}</span>
                </a>
              </h5>
              <p class="card-text">${e.description}</p>
            </div>
          </div>
          <br><br>
        </div>`
    });
}