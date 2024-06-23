document.addEventListener("DOMContentLoaded", ()=>{
    const tabItem = document.querySelectorAll(".tab-item");
    tabItem.forEach(function (item) {
        item.addEventListener("click", () => {
            const dataId = item.dataset.tab;
            tabItem.forEach(function (anoItem) {
                anoItem.classList.remove("active");
            });
            item.classList.add("active");

            // Tab body
            const tabDataItem = document.querySelectorAll(".tab-data-items");
            tabDataItem.forEach(function (dataItem) {
                const dataItemId = dataItem.dataset.tab;
                if (dataId === dataItemId) {
                    dataItem.classList.add("active");
                } else {
                    dataItem.classList.remove("active");
                }
            });
        });
    });
})