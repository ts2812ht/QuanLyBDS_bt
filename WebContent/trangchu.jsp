<%@ page import="java.util.Locale" %>
<%@ page import="java.text.NumberFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quản lý Bất Động Sản</title>
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- fontawesome  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

    <!-- style -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/styles.css" type="text/css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css" type="text/css">

</head>

<body>

<div id="page" class="d-flex">
    <nav id="sidebar" class="nav flex-column">
        <li class="nav-item logo">
            <div><i class="fa-brands fa-product-hunt fa-lg"></i>${sessionScope.account.name}</div>
        </li>
        <li class="sidebar-item nav-item active" value="0">
            <div class="nav-link d-flex">
                <div class="icon-item">
                    <i class="fa-solid fa-box-archive fa-lg"></i>
                </div>
                <div>
                    Quản lý khách hàng
                </div>
            </div>
        </li>
        <li class="sidebar-item nav-item" value="1">
            <div class="nav-link d-flex">
                <div class="icon-item">
                    <i class="fa-solid fa-cart-plus fa-lg"></i>
                </div>
                <div>
                    Quản lý bài viết
                </div>
            </div>
        </li>
    </nav>
    <div class="flex-grow-1">
        <menu class="d-flex justify-content-end">
            <div id="logout-btn"  class="d-flex align-items-center">
                <i class="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
                Đăng xuất
            </div>
        </menu>
        <!--  phần nhét code -->
        <main>
            <div class="header-main">
                <h4 style="font-weight: bold">Danh sách khách hàng</h4>
            </div>
            <div class="background-main">
                <div class="toolbar d-flex justify-content-between">
                    <form action="search" method="post">
                        <div id="search" class="input-group mb-3">
                            <input name="txt" type="text" class="form-control shadow-none" placeholder="Tìm theo tên khách hàng">
                            <button type="submit" class="input-group-text" title="Tìm kiếm"><i
                                    class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>

                </div>
                <div id="product-data">
                    <table class="table table-borderless">
                        <thead class="sticky-top">
                        <tr>
                            <th scope="col">Mã khách hàng</th>
                            <th scope="col">User name</th>
                            <th scope="col">Tên khách hàng</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Tình trạng</th>
                            <th class="table-function"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <c:forEach items="${data}" var="m">
                            <tr>
                                <td style="vertical-align: middle;" value="${m.getId()}" nameKhachHang="${m.getUsername()}" tt="${m.tinhtrang}"  >#${m.getId()}</td>
                                <td style="vertical-align: middle;">${m.getUsername()}</td>
                                <td style="vertical-align: middle;">${m.getName()}</td>
                                <td style="vertical-align: middle;">${m.getEmail()}</td>
                                <td style="vertical-align: middle;">${m.getPhone()}</td>
                                <td style="vertical-align: middle; ${m.tinhtrang == 1 ? 'color:green;">Hoạt động' : 'color:red;">Tạm khoá'}</td>
                                <td class="table-function text-center">
                                    <button type="button" title="Sửa" class="btn btn-save btn-save-table">
                                        <i class="fa-solid fa-pencil"></i></button>
                                    <button type="button" title="Khoá" class="btn btn-warning btn-warning-table">
                                        <i class="fa-solid fa-recycle"></i></button>
                                </td>
                            </tr>
                        </c:forEach>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
</div>

<!-- bootstrap -->
<script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script type="module">
    import Common from "./js/common.js";

    Common.sidebarFunction();
    $("#btnAdd").click(function () {
        window.location.href = "them-khach-hang";
    });
    $(document).on('click', '.btn-save-table', function () {
        var value = $(this).parent().parent().children().first().attr('value');
        window.location.href = "sua-khach-hang?idEdit=" + value;
    });

    $(document).on('click', '.btn-warning-table', function () {
        var value = $(this).parent().parent().children().first().attr('value');
        var name = $(this).parent().parent().children().first().attr('nameKhachHang');
		var tt = $(this).parent().parent().children().first().attr('tt');
        doDelete(value, name,tt);
    });
    function doDelete(id, name,tt) {
		if (tt ==  '1'){
        	if (confirm("Bạn có muốn vô hiệu tài khoản <" + name + ">")) {
            	window.location = "delete?id=" + id;
        	}
		} else {
			if (confirm("Bạn có muốn kích hoạt tài khoản <" + name + ">")) {
            	window.location = "active?id=" + id;
        	}
		}
    }
    $("#logout-btn").click(function() {
        window.location.href = "/QuanLyBDS_bt/Admin.jsp";
        }
    );

</script>
</body>

</html>
