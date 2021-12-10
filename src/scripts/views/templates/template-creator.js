const createEventItemTemplate = (events) => `
        <div class="card" style="width: 18rem;" tabindex="0">
                    <img src="${events.images}" class="card-img-top" alt="...">
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

const createBlogItemTemplate = (blogs) => ` <div class="card bg-dark text-white" style="background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),
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
                        <img src="${blog.images}" class="img-fluid" tabindex="0" alt="">
                    </div>
                    <div class="text-content-blog" tabindex="0">
                        <p>${blog.content}</p>
                    </div>
                </div>`;
;
const createEventDetailTemplate = (event) => `
                         <div class="row detail-event-card">
                                <div class="col-12 col-md-5 image-detail-event">
                                    <img src="${event.images}" class="card-img-top img-fluid" tabindex="0" alt="...">
                                </div>
                                <div class="col-12 col-md-7 description-detail-event">
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
export {
  createEventItemTemplate,
  createBlogItemTemplate,
  createBlogDetailTemplate,
  createEventDetailTemplate,
};
