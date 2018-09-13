// Define a new component called button-counter

var loadArticles = function () {
  articleMarkup.querySelector('h2').textContent = "Pewien wpis na blogu";
  articleMarkup.querySelector('p').textContent = "Ten artykuł został doładowany po pewnym czasie, ale użytkownik wiedział wcześniej gdzie może spodziewać się treśći na stronie. Dzięki temu jego wrażenia z przeglądania naszej strony będą lepsze :)";
  articleMarkup.querySelector('.author').textContent = "Jan Kowalski, reporter";
  var img = articleMarkup.querySelector('.avatar');
  img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1000px-Placeholder_no_text.svg.png";
  img.alt = "Zdjęcie Jana Kowalskiego";
}

var createMarkup = function () {
  var article = document.createElement('article'),
      h2 = document.createElement('h2'),
      p = document.createElement('p'),
      figure = document.createElement('figure'),
      img = document.createElement('img'),
      figcaption = document.createElement('figcaption');

  article.classList.add('entry');
  article.appendChild(h2);
  article.appendChild(p);

  img.classList.add('avatar');
  figcaption.classList.add('author');

  figure.appendChild(img);
  figure.appendChild(figcaption);

  article.appendChild(figure);

  return article;
};

var articleMarkup = createMarkup();
document.body.appendChild(articleMarkup);

setTimeout(loadArticles, 2000);


Vue.component('v-div', {
    data: function () {
      return {
        count: 1
      }
    },
    template: '<div></div>'
  })
