        const navBtns = document.querySelectorAll(".navBtn");
        const rows = document.querySelectorAll(".contentRows");

        /* 왼쪽 네비 바 클릭했을 때 페이지 이동 */
        navBtns[0].addEventListener('click', function(){
            location.href = "admin/sub_user";
        });
        navBtns[1].addEventListener('click', function(){
            location.href = "admin/sub_center";
        });

        /* 글의 레코드 클릭했을 때 페이지 이동 */
        rows[0].addEventListener('click', function(){
            location.href = "admin/sub_center_detail";
        });
