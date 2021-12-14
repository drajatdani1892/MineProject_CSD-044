const createEventItemTemplate = (events) => `
        <div class="card" style="width: 18rem;" tabindex="0">
                    <img src="${events.images}" class="card-img-top lazyload" alt="${events.eventName}">
                    <div class="card-body">
                        <h5 class="card-title">${events.eventName}</h5>
                        <p class="card-text" style="overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;" >${events.deskripsi}</p>
                        <a href="/#/detail-home/${events.id}" class="btn btn-primary" tabindex="0">Go somewhere</a>
                    </div>
                </div>`;

const createBlogItemTemplate = (blogs) => ` <div class="card bg-dark text-white lazyload" style="background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),
                    url('${blogs.images}') center center/cover no-repeat; width: 18rem;" tabindex="0">
                    <div class="card-body" tabindex="0">
                        <h5 class="card-title">${blogs.title}</h5>
                        <p class="card-text" style="overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;">${blogs.content}</p>
                        <a href="/#/detail-blog/${blogs.id}" class="btn btn-primary"
                            style="background: #2E4C6D; border-radius: 5px;" tabindex="0">Go
                            Detail</a>
                    </div>
                </div>`;
;
const createBlogDetailTemplate = (blog) => `  <div class="contentblog-item">
                    <div class="title-content-blog">
                        <h1>${blog.title}</h1>
                        <h2>${blog.createdAt}</h2>
                    </div>
                    <div class="image-content-blog">
                        <img src="${blog.images}" class="img-fluid lazyload" tabindex="0" alt="">
                    </div>
                    <div class="text-content-blog" tabindex="0">
                        <p>${blog.content}</p>
                    </div>
                </div>`;
;
const createEventDetailTemplate = (event) => `
                         <div class="row detail-event-card">
                                <div class="col-12 col-lg-5 image-detail-event">
                                    <img src="${event.images}" class="card-img-top img-fluid lazyload" tabindex="0" alt="${event.eventName}">
                                </div>
                                <div class="col-12 col-lg-7 description-detail-event">
                                    <div class="card-body" tabindex="0">
                                        <h2 class="card-title">${event.eventName}</h2>
                                        <p class="card-text" styles="overflow: hidden;
                                        text-overflow: ellipsis;
                                        display: -webkit-box;
                                        -webkit-line-clamp: 3;
                                        -webkit-box-orient: vertical;" >${event.deskripsi}</p>
                                        <p class="card-text"><small class="text-primary"><b>Artist</b> : ${event.artist}</small></p>
                                        <p class="card-text"><small class="text-danger"><b>Start Date Time</b> : ${event.startDate}</small></p>
                                    </div>
                                </div>
                            </div>`;

const createAboutUsTemplate = () => `
                                      <div class="row about-web mb-5">
                    <div class="col-12 col-md-5 image-detail-event">
                        <img src="../images/image-2.jpeg" class="card-img-top img-fluid lazyload" tabindex="0" alt="...">
                    </div>
                    <div class="col-12 col-md-7 description-detail-event">
                        <div class="card-body" tabindex="0">
                            <h2 class="card-title">Tentang Web</h2>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Minus, minima ipsa. Fuga nulla, sequi dignissimos facere
                                ducimus, corrupti omnis velit aliquid molestias tenetur vitae nemo ullam voluptates
                                delectus
                                perspiciatis similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                                sunt
                                illo tempora, necessitatibus, consequuntur quam ab iure praesentium nisi rem reiciendis.
                                Quisquam dolore repudiandae veritatis facilis sit aliquam deleniti architecto.</p>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="title-page mb-5">
                    <h2 id="textAboutUs" class="d-flex justify-content-center" tabindex="0">Fitur</h2>
                </div>
                <div class="row row-cols-1 row-cols-md-2 justify-content-center" style="width: auto;">
                    <div class="col mb-4" tabindex="0">
                        <div class="card h-100">
                            <img src="../assets/image-2.jpeg" class="card-img-top lazyload" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural
                                    lead-in
                                    to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4" tabindex="0">
                        <div class="card h-100">
                            <img src="../assets/image-2.jpeg" class="card-img-top lazyload" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a short card.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12 col-md-3 d-flex align-items-center">
                        <div class="title-page mb-5">
                            <h1 id="TextOurteam" tabindex="0">Our Team</h1>
                        </div>
                    </div>
                    <div class="col-12 col-md-9" style="width: 18rem;">
                        <div class="image-team d-flex flex-column flex-lg-row  ">
                            <img src="../assets/image-2.jpeg" alt="..." class="rounded mb-5 mb-md-2 lazyload" tabindex="0">
                            <img src="../assets/image-2.jpeg" alt="..." class="rounded mb-5 mb-md-2 lazyload" tabindex="0">
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
