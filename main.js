import './style.css'

/*==============================================================
  トップへ戻るボタンの表示を切替 intersection observer
==============================================================*/

const btn = document.getElementById('btn');
const mv = document.getElementById('mv');  

const mvOptions = {
  root: null, 
  rootMargin: "0px 0px 0px 0px",
  threshold: 0
};

const mvObserver = new IntersectionObserver(doWhenMvIntersect, mvOptions);

mvObserver.observe(mv);

function doWhenMvIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting ) {
      // console.log('true');
      btn.classList.remove('active');
      // console.log('remove active');

    } else {
      btn.classList.add('active');
      // console.log('add active');
    }
  });
}

/*==============================================================
 トップへ戻るボタンの位置を変更
==============================================================*/

const footer = document.getElementById('footer');

const footerOptions = {
  root: null, 
  rootMargin: "0px 0px -10% 0px",
  threshold: 0
};

const footerObserver = new IntersectionObserver(doWhenFooterIntersect, footerOptions);

footerObserver.observe(footer);

function doWhenFooterIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting ) {
      // console.log('true');
      btn.classList.add('absolute');
      // console.log('remove active');

    } else {
      btn.classList.remove('absolute');

      
      // console.log('add active');
    }
  });
}