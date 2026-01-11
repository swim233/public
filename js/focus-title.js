(() => {
    let oldTitle = document.title;
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            oldTitle = document.title;
            document.title = "抓到你了喵! · TheSw1mの小窝";
        } else {
            document.title = oldTitle;
        }
    }
    );
})();