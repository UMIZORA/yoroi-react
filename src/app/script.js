/* IntersectionObserver 監視 */
const setObserver = () => {
  const callback = (entries) => {
    entries.forEach( (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('up_effect');
      } else {
        entry.target.classList.remove('up_effect');
      }
    });
  }
 
  const options = {
    threshold:0.1, //要素の５割みえたら着火
    rootMargin: "1px",
  }
 
  const observer = new IntersectionObserver(callback, options);
 
  const targets = document.querySelectorAll('.scroll_up');
 
  targets.forEach( (elem) => {
    observer.observe(elem);
  });
}

setObserver(); 


//スマホのときのみ発動
const ua = navigator.userAgent;
if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {

const lineAnimationObserver = () => {
  const callback = (entries) => {
    entries.forEach( (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('line_effect');
      } else {
        entry.target.classList.remove('line_effect');
      }
    });
  }
 
  const options = {
    threshold:1, //要素全てみえたら着火
    rootMargin: "30px",
  }
  const line_observer = new IntersectionObserver(callback, options);
  const line_targets = document.querySelectorAll('.sp_line');
 
  line_targets.forEach( (elem) => {
    line_observer.observe(elem);
  });
}

lineAnimationObserver(); 
}



/*
// 着火点となる要素
const headings = document.querySelectorAll('.scroll_up');

const options = {
  threshold: 1
};

// 実行するよ
const observer = new IntersectionObserver(showElements);

// 各 .heading に到達したら発動。複数あるから forEach 使うよ。
headings.forEach(heading => {
  observer.observe(heading);
});

// 要素が表示されたら実行する動作
function showElements(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 各 .heading に .active を加える
      entry.target.classList.add('up_effect');
    } else {
      entry.target.classList.remove('up_effect');
    }
  });
};
*/





/*** ハンバーガーメニュー ***/
const navMenu = $('#g_nav > nav');
$("#navbtn").click(function () {
	$(this).toggleClass('active');
	navMenu.toggleClass('active');
});



/* ページ内リンクスクロール */
$(function(){
	$('a[href^="#"]').click(function(){

	const ua = navigator.userAgent;
	if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
		var adjust = -80;
	} else if (ua.indexOf('iPad') > -1 || ua.indexOf('Android') > -1) {
		var adjust = -80;
	} else {
		var adjust = -80;
	}

    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'linear');
    return false;
	});
	});






  // パララックス
  document.addEventListener("DOMContentLoaded", function () {
    const elem = document.querySelector(".img_parallax");
    if (elem !== null) {
      let target = document.getElementsByClassName("img_parallax");
      let parallaxConfig = {
        delay: 0.8, // スクロール止めてから動く秒数
        orientation: "up", // 動く方向
        scale: 1.4, // 動く大きさ
      };
      const parallax_instance = new simpleParallax(target, parallaxConfig);
    }
  });

