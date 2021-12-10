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
  createEventDetailTemplate,
};
