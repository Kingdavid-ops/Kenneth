fetch('youtubeclone.json').
then(response=>response.json()).
then(data=>{data.forEach(element => {
   let main_page =  document.querySelector(".main_page");
   main_page.innerHTML += `
        <div class="video_grid">
          <div class="firstThumbnail">
            <img
              class="thumnail1"
              src="${element.thumbnail}"
              alt="Video of a man"
            >
          </div>
          <section class="video_info_grid">
            <div class="profilephoto">
              <img
                class="profileimg"
                src="${element.profileimg}"
                alt="profile pic"
              >
            </div>
            <div class="video_caption">
              <p class="firstvideopreview">
               ${element.firstvediopreview}
              </p>
              <p class="firstvideopreview">${element.name}</p>
              <p class="firstvideopreview">${element.date}</p>
            </div>
          </section>
        </div>`
});
})