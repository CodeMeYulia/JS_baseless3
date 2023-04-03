

// const element = document.querySelector('span'){
//     element.textContent = 'мальчик';
// };

let catGender = document.querySelectorAll('.gender');
console.log(catGender);
console.log(catGender[0].textContent);
catGender[0].textContent = 'мальчик';

// cards[0].querySelector('.newInfo').innerHTML = `<p>Порода:бенгальская</p>
// <p>Вес: 9 кг</p>
// <p>Имя владельца: Виталий</p>
// <p>Город: Барнаул</p>`;

const cards = document.querySelectorAll('.card');
console.log(cards);
const stepa = cards[0].querySelector('.newInfo');
console.log(stepa);
const stesha = cards[1].querySelector('.newInfo');
console.log(stesha);
const timofei = cards[2].querySelector('.newInfo');
console.log(timofei);


const inHtml = (where, type, moreabout, weight, owner, city) => {
where.innerHTML = `<p>Порода:${type}</p>
<a href=${moreabout}><button>Узнать больше</button></a>
                   <p>Вес: ${weight}</p>
                   <p>Имя владельца: ${owner}</p>
                   <p>Город: ${city}</p>`;
};
inHtml (stepa, 'бенгальская', "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BD%D0%B3%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D0%BE%D1%88%D0%BA%D0%B0_(%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D1%8F%D1%8F)", '9кг', 'Виталий', 'Барнаул');
inHtml (stesha, 'британская', "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%88%D1%91%D1%80%D1%81%D1%82%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BE%D1%88%D0%BA%D0%B0",'11кг', 'Лариса', 'Чита');
inHtml (timofei, 'сибирская', "https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D0%BE%D1%88%D0%BA%D0%B0",'10кг', 'Владислав', 'Омск');

 //<button onclick="hrefto()">Узнать больше</button>
