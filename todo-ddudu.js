let date = document.querySelectorAll('tr td');

for (let i = 0; i < date.length; i++) {
  date[i].onclick = function () {
    let tabID = this.querySelector('a').getAttribute('href');
    console.log(this.classList);
    document.querySelectorAll('.days .day').forEach(function (item) {
      item.classList.remove('active');
    });
    document.querySelector(tabID).classList.add('active');
    // this.classList.add('active');
  };
}
