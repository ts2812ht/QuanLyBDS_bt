
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sửa bài viết</title>
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
            <div id="popupNotifyBody">
                <%= application.getAttribute("messages")%>
                <% application.setAttribute("check", "0"); %>
            </div>
        </div>
        <% }%>
        <!--  phần nhét code -->
        <form id="formSua" action="<%= request.getContextPath() %>/sua-post" class="form__add-product" method="POST" enctype="multipart/form-data" autocomplete="off">
            <div class="app__add-product">
                <div class="content__header">
                    <div class="content__name defaultCursor">
                        <a href="/KhachHang/quan-ly-post">
                            <i class="fa-solid fa-arrow-left-long me-2 fa-lg" style="cursor: pointer"></i>
                        </a>
                        Sửa bài viết
                    </div>
                    <!-- <div class="btn-accept"> -->
                    <!-- <a href="" class="btn-accept-link">Xác nhận</a> -->
                    <div id="successNotify"></div>
                    <button type="submit"  class="btn-accept btn-accept-button btn-save">Xác nhận</button>
                    <!-- </div> -->
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
                                                    <span class="atb-name defaultCursor">Mã bài viết<span style="color: red"> *</span></span>
                                                    <input value="${post.getCode()}" type="text" id="postCode" name="postCode" class="atb-input input-group form-control shadow-none form-control shadow-none" placeholder="" autofocus >
                                                </div>
                                                <div class="atb col-4">
                                                    <span class="atb-name defaultCursor">Tiêu đề<span style="color: red"> *</span></span>
                                                    <input value="${post.getTitle()}" type="text" id="title" name="title" class="atb-input input-group form-control shadow-none" placeholder="Nhập Tiêu đề">
                                                </div>
                                                <div class="atb col-4">
                                                    <span class="atb-name defaultCursor">Mô tả<span style="color: red"> *</span></span>
                                                    <input value="${post.getDescription()}" type="text" id="description" name="description" class="atb-input input-group form-control shadow-none" placeholder="Nhập Mô tả">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="atb col-4">
                                                    <span class="atb-name defaultCursor">Giá (vnđ)<span style="color: red"> *</span></span>
                                                    <input value="${post.getPrice()}" type="text" id="price" name="price" class="atb-input input-group form-control shadow-none" placeholder="Nhập Giá">
                                                    <span id="warningProductwholesaleprice" class="warningText" hidden="true"></span>
                                                </div>
                                                <div class="atb col-4">
                                                    <span class="atb-name defaultCursor">Số lượt view<span style="color: red"> *</span></span>
                                                    <input value="${post.getCount_view()}" type="text" id="count_view" name="count_view" class="atb-input input-group form-control shadow-none" placeholder="Nhập Số lượt view">
                                                    <span id="warningProductunit" class="warningText" hidden="true"></span>
                                                </div>
                                                <div class="atb col-4">
                                                    <span class="atb-name defaultCursor">Địa chỉ<span style="color: red"> *</span></span>
                                                    <input value="${post.getAddress()}" type="text" id="address" name="address" class="atb-input input-group form-control shadow-none form-control shadow-none" placeholder="Nhập vào địa chỉ" autofocus >
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="atb col-4">
                                                    <span class="atb-name defaultCursor">Loại bài viết</span>
                                                    <select name="categoryPostID" id="categoryPostID" class="atb-input input-group form-control shadow-none category-select">
                                                        <c:forEach items="${listCategoryPost}" var="categoryPost">
                                                            <option value="${categoryPost.getId()}" class="category-item"
                                                                ${post.getCategoryPost().getId() == categoryPost.getId() ? 'selected' : ''}>
                                                                <c:out value="${categoryPost.getName()}" />
                                                            </option>
                                                        </c:forEach>
                                                    </select>
                                                </div>
                                                <div class="atb col-4">
                                                    <span class="atb-name defaultCursor">Khu vực</span>
                                                    <select name="districtID" id="districtID" class="atb-input input-group form-control shadow-none category-select">
                                                        <c:forEach items="${listDistrict}" var="district">
                                                            <option value="${district.getId()}" class="category-item"
                                                                ${post.getDistrict().getId() == district.getId() ? 'selected' : ''}>
                                                                <c:out value="${district.getName()}" />
                                                            </option>
                                                        </c:forEach>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3 product-image">
                                    <span class="defaultCursor">Ảnh (.jpg)</span>
                                    <input type="file" id="img" name="img" class="img form-control shadow-none">
                                    <img src="data:image/png;base64,${imageBase64}" style="white-space:pre;" alt="Hình ảnh bị lỗi hoặc đã bị xóa" id="img-chose" class="img-chose">
                                    <span id="warningImg" class="warningImg" hidden="true"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" id="postID" name="postID" value="${post.getId()}">
                    <input type="hidden" id="byteImage" name="byteImage" value="${post.getImage()}">
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