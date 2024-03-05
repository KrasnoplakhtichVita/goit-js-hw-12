export function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
            <div class="gallery-thumb">
              <div class="thumb">
                <h2 class="thumb-title">Likes</h2>
                <p class="thumb-description">${likes}</p>
              </div>
              <div class="thumb">
                <h2 class="thumb-title">Views</h2>
                <p class="thumb-description">${views}</p>
              </div>
              <div class="thumb">
                <h2 class="thumb-title">Comments</h2>
                <p class="thumb-description">${comments}</p>
              </div>
              <div class="thumb">
                <h2 class="thumb-title">Downloads</h2>
                <p class="thumb-description">${downloads}</p>
              </div>
            </div>
          </a>
        </li>`
    )
    .join('');
}
