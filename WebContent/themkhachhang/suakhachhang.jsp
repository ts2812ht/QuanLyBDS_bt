
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sửa khách hàng</title>
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- fontawesome  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

    <!-- style -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/styles.css" type="text/css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css" type="text/css">

    <!--  -->
    <link class="jsbin" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />
    <script class="jsbin" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script class="jsbin" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.0/jquery-ui.min.js"></script>
</head>

<body>

<div id="page" class="d-flex">
    <nav id="sidebar" class="nav flex-column">
        <li class="nav-item logo">
            <div><i class="fa-brands fa-product-hunt fa-lg"></i>${sessionScope.account.name}</div>
        </li>
        <li class="sidebar-item nav-item" value="0">
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
            <div  class="nav-link d-flex">
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

        </menu>
        <% if ((application.getAttribute("check") == "1") && (application.getAttribute("messages") != null)) {%>
        <div id="popupNotify">
            <div id="popupNotifyBody">Sửa thành công <% application.setAttribute("check", "0"); %>
            </div>
        </div>
        <% }%>
        <!--  phần nhét code -->
        <form id="formSua" action="<%= request.getContextPath() %>/sua-khach-hang" class="form__add-product" method="POST" enctype="multipart/form-data" autocomplete="off">
            <div class="app__add-product">
                <div class="content__header">
                    <div class="content__name defaultCursor">
                        <a href="${pageContext.request.contextPath}/trangchu">
                            <i class="fa-solid fa-arrow-left-long me-2 fa-lg" style="cursor: pointer"></i>
                        </a>
                        Sửa khách hàng
                    </div>
                    <div id="successNotify"></div>
                    <button type="submit"  class="btn-accept btn-accept-button btn-save">Xác nhận</button>
                </div>
                <div class="content__attributes">
                    <div class="content__attributes-items">
                        <div class="item-name defaultCursor">Thông tin chung</div>
                        <div class="item-content container">
                            <div class="item-content__main-row row">
                                <div class="col-9 general-info">
                                    <div class="container">
                                        <div class="row general-info__basic">
                                            <div class="row">
                                                <div class="atb col-4">
                                                    <span class="atb-name defaultCursor">Mã khách hàng<span style="color: red"> *</span></span>
                                                    <input value="#${khachHang.id}" type="text" id="customerid" name="customerid" class="atb-input input-group form-control shadow-none form-control shadow-none" placeholder="" readonly="readonly" >
                                                    <span id="warningProductID" class="warningText" hidden="true"></span>
                                                </div>
                                                <div class="atb col-4">
                                                    <span class="atb-name defaultCursor">Username<span style="color: red"> *</span></span>
                                                    <input value="${khachHang.username}" type="text" id="customerusername" name="customerusername" class="atb-input input-group form-control shadow-none" readonly="readonly">
                                                </div>
                                                
                                                <div class="atb col-4">
                                                    <span class="atb-name defaultCursor">Email<span style="color: red"> *</span></span>
                                                    <input value="${khachHang.email}" type="text" id="customeremail" name="customeremail" class="atb-input input-group form-control shadow-none" placeholder="Nhập Email">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="atb col-4">
                                                    <span class="atb-name defaultCursor">Phone<span style="color: red"> *</span></span>
                                                    <input value="${khachHang.phone}" type="text" id="customerphone" name="customerphone" class="atb-input input-group form-control shadow-none" placeholder="Nhập Phone">
                                                </div>
                                                <div class="atb col-4">
                                                    <span class="atb-name defaultCursor">Tên khách hàng<span style="color: red"> *</span></span>
                                                    <input value="${khachHang.name}" type="text" id="customername" name="customername" class="atb-input input-group form-control shadow-none" placeholder="Nhập Tên khách hàng">
                                                </div>
                                                <div class="atb col-4">
                                                    <span class="atb-name defaultCursor">Password<span style="color: red"> *</span></span>
                                                    <input value="${khachHang.getPassword()}" type="text" id="customerpassword" name="customerpassword" class="atb-input input-group form-control shadow-none" placeholder="Nhập password">
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" id="idKhachHang" name="idKhachHang" value="${khachHang.getId()}">
                </div>
            </div>
        </form>
    </div>
</div>

<!-- bootstrap -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>

</body>

</html>