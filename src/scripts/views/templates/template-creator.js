const createEventItemTemplate = (events) => `
        <div class="card" style="width: 18rem;" tabindex="0">
                    <img data-src="${events.images}" class="card-img-top lazyload" tabindex="0" style="max-width: 100%;max-height: 50%;object-fit: cover;" alt="${events.eventName}">
                    <div class="card-body">
                        <h5 class="card-title" tabindex="0">${events.eventName}</h5>
                        <p class="card-text" tabindex="0" style="overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;" >${events.deskripsi}</p>
                        <a href="/#/detail-home/${events.id}" class="btn btn-primary" tabindex="0">Go Detail</a>
                    </div>
                </div>`;

const createBlogItemTemplate = (blogs) => ` <div class="card bg-dark text-white lazyload" style="background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),
                    url('${blogs.images}') center center/cover no-repeat; width: 18rem;" tabindex="0">
                    <div class="card-body d-flex flex-column" tabindex="0">
                        <h5 class="card-title">${blogs.title}</h5>
                        <p class="card-text" style="overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;">${blogs.content}</p>
                        <a href="/#/detail-blog/${blogs.id}" class="btn btn-primary mt-auto"
                            style="background: #2E4C6D; border-radius: 5px;" tabindex="0">Go
                            Detail</a>
                    </div>
                </div>`;
;
const createBlogDetailTemplate = (blog) => `  <div class="contentblog-item">
                    <div class="title-content-blog">
                        <h1 tabindex="0">${blog.title}</h1>
                        <h2 tabindex="0">${blog.createdAt}</h2>
                    </div>
                    <div class="image-content-blog">
                        <img data-src="${blog.images}" class="img-fluid lazyload" tabindex="0" alt="">
                    </div>
                    <div class="text-content-blog" tabindex="0">
                        <p tabindex="0">${blog.content}</p>
                    </div>
                </div>`;
;
const createEventDetailTemplate = (event) => `
                         <div class="row detail-event-card">
                                <div class="col-12 col-lg-5 image-detail-event">
                                    <img data-src="${event.images}" class="card-img-top img-fluid lazyload" tabindex="0" alt="${event.eventName}">
                                </div>
                                <div class="col-12 col-lg-7 description-detail-event">
                                    <div class="card-body" tabindex="0">
                                        <h2 class="card-title" tabindex="0">${event.eventName}</h2>
                                        <p class="card-text" styles="overflow: hidden;
                                        text-overflow: ellipsis;
                                        display: -webkit-box;
                                        -webkit-line-clamp: 3;
                                        -webkit-box-orient: vertical;" tabindex="0">${event.deskripsi}</p>
                                        <p class="card-text"><small class="text-primary" tabindex="0"><b>Artist</b> : ${event.artist}</small></p>
                                        <p class="card-text"><small class="text-danger" tabindex="0"><b>Start Date Time</b> : ${event.startDate}</small></p>
                                    </div>
                                </div>
                            </div>`;

const createAboutUsTemplate = () => `
                                      <div class="row about-web mb-5">
                    <div class="col-12 col-md-5 image-detail-event">
                         <img data-src="../images/tentang-web.jpeg" class="card-img-top img-fluid lazyload" tabindex="0" alt="...">
                    </div>
                    <div class="col-12 col-md-7 description-detail-event">
                        <div class="card-body" tabindex="0">
                            <h2 class="card-title">Tentang Web</h2>
                            <p class="card-text">MINE (Music Information Event) merupakan platform non-profit pada industri music yang memiliki latar belakang untuk mendukung bergeraknya kembali industri musik yang sempat mati suri pada masa pandemi covid-19 ini. Website ini tersedia untuk para penikmat event musik yang merindukan suasana live musik sehingga memiliki interaksi antara penikmat musik dengan pegiat industri musik tersebut. Pada platform ini kami menyediakan beberapa fitur dan salah satunya menyediakan informasi seputar konser musik online secara akurat, selain itu anda bisa menggunakan fitur bookmark untuk menyimpan event yang anda mau, dan juga menggunakan fitur blog untuk membaca dan mendapatkan informasi terbaru tentang event musik yang akan diselenggarakan.</p>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="title-page mb-5">
                    <h1 id="textAboutUs" class="d-flex justify-content-center" tabindex="0">Fitur</h1>
                </div>
                <div class="row row-cols-1 row-cols-md-2 justify-content-around" style="width: auto;">
                        <div class="col-12 d-flex flex-column justify-content-center col-md-5 col-12 col-md-5 mb-5 mb-md-0">
                            <div class="icon-1 rounded" tabindex="0" style="
                                 background-color: #2E4C6D;
                                 height: 15em;
                                 color: white;
                                 display: flex;
                                 justify-content: center;
                                 align-items: center;">
                                    <span class="iconify" data-icon="uil:search" data-width="100" data-height="100">
                                    </span>
                            </div>
                                <h4 class="mx-auto mt-3" tabindex="0">Search Event</h4>
                        </div>
                        <div class="col-12 d-flex flex-column justify-content-center col-md-5 col-12 col-md-5 mb-5 mb-md-0">
                            <div class="icon-2 rounded" tabindex="0" style="
                                 background-color: #2E4C6D;
                                 height: 15em;
                                 color: white;
                                 display: flex;
                                 justify-content: center;
                                 align-items: center;">
                                    <span class="iconify" data-icon="uil:bookmark" data-width="100" data-height="100">
                                    </span>
                            </div>
                                <h4 class="mx-auto mt-3" tabindex="0">Bookmark Event</h4>
                        </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12 col-md-3 d-flex align-items-center">
                        <div class="title-page mb-5">
                            <h1 id="TextOurteam" tabindex="0">Our Team</h1>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-2 justify-content-around ml-lg-5" style="width: auto;">
                        <div class="col-12 d-flex flex-column justify-content-center col-md-5 col-12 col-md-5 mb-5 mb-md-0 mx-auto">
                        <div class="image-2 rounded d-flex justify-content-center"> 
                            <img data-src="../images/zahra.png" alt="..." class="rounded mb-md-2 lazyload" tabindex="0" style="max-width: 15em">
                        </div>    
                            <h5 class="text-name-1 mx-auto mt-3" tabindex="0">Zahra Elgysha N</h5>
                        </div>
                        <div class="col-12 d-flex flex-column justify-content-center col-md-5 col-12 col-md-5 mb-5 mb-md-0">
                            <div class="image-2 rounded d-flex justify-content-center"> 
                                <img data-src="../images/drajat.jpeg" alt="..." class="rounded mb-md-2 lazyload" tabindex="0" style="max-width: 15em">
                            </div>
                            <h5 class="text-name-2 mx-auto mt-3" tabindex="0">Muhammad Drajat R</h5>
                        </div>
                    </div>
                </div>`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this event" id="likeButton" class="bookmark-fill">
    <span class="iconify" data-icon="bi:bookmark" style="color: white;"></span>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this event" id="likeButton" class="bookmark-fill">
    <span class="iconify" data-icon="bx:bxs-bookmark" style="color: white;"></span>
  </button>
`;
export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createEventItemTemplate,
  createBlogItemTemplate,
  createBlogDetailTemplate,
  createEventDetailTemplate,
  createAboutUsTemplate,
};
