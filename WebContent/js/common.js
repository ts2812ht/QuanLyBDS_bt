import resource from "./resource.js";

var Common = Common || {};

Common.sidebarFunction= function()  {
    $(".sidebar-item").click(function () {
        debugger
        $(".sidebar-item").removeClass("active");
        $(this).addClass("active");
        var value = $(this).attr("value");
        if (value == 0) {
            window.location.href = "/QuanLyBDS_bt/trangchu";
        } else if (value == 1) {
            window.location.href = "/QuanLyBDS_bt/quan-ly-post";
        }
    });
}
export default Common;