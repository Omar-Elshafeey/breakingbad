// get 4 characters in home Page
async function get4char() {
    let url = 'https://www.breakingbadapi.com/api/characters?limit=4';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function render4char() {
    let limChar = await get4char();
    let html = '';
    limChar.forEach(limChars => {
      let htmlSegment = `

      <div class="col-md-3 mt-3">
        <div class="card mx-3" style="  border-color: #114C38;">
          <img src="${limChars.img}" class="img-thumbnail" alt="...">
        <div class="card-body">
          <h5 class="card-title">${limChars.name}</h5>
          <a href="charDetails.html?id=${limChars.char_id}" class="btn btn-primary float-end" target="_blank">More</a>
        </div>
      </div>
      </div>

                            `;

        html += htmlSegment;
    });

    let container = document.querySelector('.list4char');
    container.innerHTML = html;
}
render4char();





// get All charracters in character Page
async function getchar() {

var currentUrl = window.location.href;
var charIdUrl = currentUrl.substring(currentUrl.lastIndexOf('=') + 1);

    let url = 'https://www.breakingbadapi.com/api/characters?limit=10&offset='+charIdUrl;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderchar() {
    let chars = await getchar();
    let html = '';
    chars.forEach(char => {
      let htmlSegment = `

              <div class="col-xs-12 col-sm-6 col-md-4">
                      <div class="image-flip" >
                          <div class="mainflip flip-0">
                              <div class="frontside m-2 ">
                                  <div class="card">
                                      <div class="card-body">
                                      <p><img class="pt-0" src="${char.img}"></p>
                                      </div>
                                  </div>
                              </div>
                              <div class="backside m-2">
                                  <div class="card" style="width:370px;">
                                      <div class="card-body text-center mt-4">
                                          <p class="card-text" style="font-weight: bold;">${char.name}</p>
                                          <p class="card-text">Nickname : ${char.nickname}</p>
                                          <p class="card-text">birthday ${char.birthday}</p>
                                          <p class="card-text">occupation ${char.occupation}</p>
                                          <a href="charDetails.html?id=${char.char_id}" target="_blank" class="btn btn-primary" style="background-color:white;">More</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                            `;

        html += htmlSegment;
    });


    let container = document.querySelector('.listallchar');
    container.innerHTML = html;
}
renderchar();





// get character details
async function getcharDetails() {

  var  currentUrl = window.location.href;
  var charIdUrl = currentUrl.substring(currentUrl.lastIndexOf('=') + 1);

    let url = 'https://www.breakingbadapi.com/api/characters/'+charIdUrl;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function rendercharDetails() {
    let details = await getcharDetails();
    let html = '';
    details.forEach(detail => {
      let htmlSegment = `

      <aside class="profile-card">
          <header>
            <a target="_blank" href="#">
              <img src="${detail.img}" class="hoverZoomLink">
            </a>
            <h1>${detail.name}</h1>
            <h2>${detail.nickname}</h2>
          </header>

          <div class="profile-bio">
          <p class="card-text">Birthday : ${detail.birthday}</p>
          <p class="card-text">Occupation : ${detail.occupation}</p>
          <p class="card-text">Appearance : ${detail.appearance}</p>
          </div>

        </aside>

                            `;

        html += htmlSegment;
    });


    let container = document.querySelector('.char-details');
    container.innerHTML = html;
}
rendercharDetails();






// get random Quotes
async function get1quote() {

    let url = 'https://www.breakingbadapi.com/api/quote/random'
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function render1quote() {
    let quotes = await get1quote();
    let html = '';
    quotes.forEach(quote => {
      let htmlSegment = `


      <div class="container">
          <div class="row">
              <div class="col-lg-15">
                  <blockquote class="blockquote blockquote-custom sm-white  ">
                      <div class="blockquote-custom-icon"><i class="fa fa-quote-left"></i></div>
                      <p class="mb-0 mt-2 font-italic">"${quote.quote}"</p>
                      <footer class="blockquote-footer pt-4 mt-4 border-top">
                          <cite title="Source Title">${quote.author}</cite>
                      </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

                            `;

        html += htmlSegment;
    });


    let container = document.querySelector('.dropquote');
    container.innerHTML = html;
}
render1quote();





// get Death
async function get1death() {

    let url = 'https://www.breakingbadapi.com/api/death?name=Walter+White'
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function render1death() {
    let death = await get1death();
    let html = '';
    death.forEach(user => {
      let htmlSegment = `

      <div class="cardd" style="width: 18rem; background-color: #114C38; color:white; ">
        <div class="card-body">
          <h5 class="card-title">Death <hr></h5>
          <p class="card-text hr">Death : ${user.death}</p>
          <p class="card-text">Cause : ${user.cause}</p>
          <p class="card-text">Responsible : ${user.responsible} <hr></p>
          <p class="card-text">Last_words : ${user.last_words}</p>
        </div>
      </div>

                            `;

        html += htmlSegment;
    });


    let container = document.querySelector('.dropdeath');
    container.innerHTML = html;
}
render1death();






// get all episods in episods page
async function get4eps() {
    let url = 'https://www.breakingbadapi.com/api/episodes?limit=4';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function render4eps() {
    let epss = await get4eps();
    let html = '';
    epss.forEach(eps => {
      let htmlSegment = `

      <div class="col-xs-12 col-sm-6 col-md-4">
                      <div class="image-flip" >
                          <div class="mainflip flip-0">
                              <div class="frontside m-2">
                                  <div class="card">
                                      <div class="card-body text-center">
                                          <h4 class="card-title pt-5">${eps.title}</h4>
                                          <p class="card-text">season ${eps.season}</p>
                                          <p class="card-text">episode ${eps.episode}</p>
                                          <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                      </div>
                                  </div>
                              </div>
                              <div class="backside m-2">
                                  <div class="card" style="width:370px;">
                                      <div class="card-body text-center mt-4">
                                          <h4 class="card-title">${eps.title}</h4>
                                          <p class="card-text">season ${eps.season}</p>
                                          <p class="card-text">episode ${eps.episode}</p>
                                          <p class="card-text">Air Date ${eps.air_date}</p>
                                          <p class="card-text">series ${eps.series}</p>
                                          <ul class="list-inline">
                                              <li class="list-inline-item">
                                                  <a class="social-icon text-xs-center" target="_blank" href="https://www.facebook.com/BreakingBad/">
                                                      <i class="fa fa-facebook"></i>
                                                  </a>
                                              </li>
                                              <li class="list-inline-item">
                                                  <a class="social-icon text-xs-center" target="_blank" href="https://twitter.com/BreakingBad?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                                                      <i class="fa fa-twitter"></i>
                                                  </a>
                                              </li>
                                              <li class="list-inline-item">
                                                  <a class="social-icon text-xs-center" target="_blank" href="https://www.breakingbadstore.com/s">
                                                      <i class="fa fa-google"></i>
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                       `;

        html += htmlSegment;
    });


    let container = document.querySelector('.drop4eps');
    container.innerHTML = html;
}
render4eps();







// search Javascript
async function getsrch() {

    var  currentUrl = window.location.href;
    var charIdUrl = currentUrl.substring(currentUrl.lastIndexOf('=') + 1);
    let value = document.getElementsByName("inputValue");
    var replaced = charIdUrl.split(' ').join('+');

    let url = 'https://www.breakingbadapi.com/api/characters?name='+charIdUrl;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function rendersrch() {
    let srchs = await getsrch();
    let html = '';
    srchs.forEach(srch => {
      let htmlSegment = `

      <div class="col-md-3 mt-3">
        <div class="card mx-3" style="border-color: #114C38;">
          <img src="${srch.img}" class="card-img img-thumbnail" alt="..." >
          <div class="card-body">
            <h5 class="card-title">${srch.name}</h5>
              <a href="CharDetails.html?id=${srch.char_id}" class="btn btn-primary float-end" target="_blank">More</a>
          </div>
        </div>
      </div>

                            `;

        html += htmlSegment;
    });


    let container = document.querySelector('.search');
    container.innerHTML = html;
}
rendersrch();






// pagination Javascript
  async function getCountChar() {
    let url = 'https://www.breakingbadapi.com/api/characters';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderCountChar() {
    let countChar = await getCountChar();
    let html = '';
    var length = Object.keys(countChar).length;
    var  currentUrl = window.location.href;
    var charIdUrl = currentUrl.substring(currentUrl.lastIndexOf('=') + 1);
     // alert(charIdUrl);
      let text = "";
      for (let i = 0; i < length/10; i++) {
        if(i*10 == charIdUrl){
            text +="<li id='0' class='page-item inlinee'><a class='page-link active' href='Characters.html?p="+ i*10+"'>"+ i +"</a></li>";
        }else {
            text +="<li id='0 'class='page-item inlinee'><a class='page-link ' href='Characters.html?p="+ i*10+"'>"+ i +"</a></li>";
        }

            }

        html += text;

    let container = document.querySelector('.count');
    container.innerHTML = html;
}
renderCountChar();






// pagination Next button
async function renderNext() {
    let next = await getCountChar();
    let html = '';
    var length = Object.keys(next).length;
    var  currentUrl = window.location.href;
    var charIdUrl = currentUrl.substring(currentUrl.lastIndexOf('=') + 1);
    function roundNearest10(num) {
      return Math.round(num / 10) * 10;
    }
    var approximated = roundNearest10(length)
     // alert(charIdUrl);
      let text = "";
        if(charIdUrl < approximated ){
            text +="<li class='page-item'> <a class='page-link' href='Characters.html?p="+ (parseInt(charIdUrl) + 10) +"'>Next</a> </li>";
        }else {
            text +="<li class='page-item'> <a class='page-link disabled' href='Characters.html'>Next</a></li>";
        }
        html += text;
    let container = document.querySelector('.next');
    container.innerHTML = html;
}
renderNext();





// pagination Previous button
async function renderPrev() {
    let prev = await getCountChar();
    let html = '';
    var length = Object.keys(prev).length;
    var  currentUrl = window.location.href;
    var charIdUrl = currentUrl.substring(currentUrl.lastIndexOf('=') + 1);
     // alert(charIdUrl);
      let text = "";
      // for (let i = 0; i < 1; i++) {
        if(charIdUrl > 0 ){
            text +="<li class='page-item'> <a class='page-link' href='Characters.html?p="+ (parseInt(charIdUrl) - 10) +"'>prev</a> </li>";
        }else {
            text +="<li class='page-item'> <a class='page-link disabled' href='Characters.html'>prev</a></li>";
        }
            // }
        html += text;
    let container = document.querySelector('.prev');
    container.innerHTML = html;
}
renderPrev();
