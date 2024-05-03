document.addEventListener('DOMContentLoaded', function () {
    var aboutLink = document.getElementById('about-link');
    var artistsLink = document.getElementById('artists-link');
    var contactLink = document.getElementById('contact-link');
    var subMenus = document.querySelectorAll(".sub-menu");

    var hideSubMenuTimer; // 타이머 변수 추가
    var scrollPosition = 0;

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '/';
    });

    artistsLink.addEventListener('mouseenter', function () {
        showSubMenus();
    });

    artistsLink.addEventListener('mouseleave', function () {
        // 마우스가 artistsLink를 벗어나면 일정 시간 후에 hideSubMenus 호출
        hideSubMenuTimer = setTimeout(hideSubMenus, 2000); // 1000ms(1초)로 설정
    });


    document.addEventListener('mouseenter', function (event) {
        // artistsLink 또는 subMenus의 자식 요소가 아닌 곳에 마우스가 올라갔을 때 hideSubMenus 호출
        if (!artistsLink.contains(event.target) && !isChildOf(event.target, subMenus)) {
            hideSubMenus();
        } else {
            // 마우스가 artistsLink 또는 subMenus 위에 있으면 타이머 제거
            clearTimeout(hideSubMenuTimer);
        }
    });

    contactLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '/contact';
    });

	// 서브 메뉴에 마우스를 올렸을 때 타이머 초기화
    subMenus.forEach(function (subMenu) {
        subMenu.addEventListener('mouseenter', function () {
            clearTimeout(hideSubMenuTimer);
        });

        subMenu.addEventListener('mouseleave', function () {
            // 마우스가 서브 메뉴를 벗어나면 일정 시간 후에 hideSubMenus 호출
            hideSubMenuTimer = setTimeout(hideSubMenus, 1000);
        });
    });

    var subMenuItems = document.querySelectorAll(".sub-menu a");

    subMenuItems.forEach(function (item) {
		item.addEventListener("click", function () {
			// 클릭된 서브메뉴의 href 속성 값
			var href = this.getAttribute("href");
			window.location.href = href;
		});
	});

    function showSubMenus() {
        subMenus.forEach(function (subMenu) {
            subMenu.style.display = 'block';
        });
    }

    function hideSubMenus() {
        subMenus.forEach(function (subMenu) {
            subMenu.style.display = 'none';
        });
    }

    // element가 parent의 자식인지 확인하는 함수
    function isChildOf(element, parent) {
        while (element !== null) {
            if (element === parent) {
                return true;
            }
            element = element.parentElement;
        }
        return false;
    }

    window.onload = function() {
        window.scrollTo(0, scrollPosition);
    }
});
