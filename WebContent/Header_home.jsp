<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@page import="Dto.UserDTO"%>

 <link rel="stylesheet" href="css/frontend.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
   	<div class="container container-header clearfix">
 		<a id="top-logo" href="index.jsp" title="cho thuê phòng trọ, cho thuê nhà trọ, tìm phòng trọ"></a>
    	<div class="user-welcome clearfix js-reload-html-header">
        <%
		UserDTO Login_user = null;
		String isLoginUrl = "Dang_nhap.jsp";
		if (session.getAttribute("Login_user") != null) {
			Login_user = (UserDTO) session.getAttribute("Login_user");
      			isLoginUrl = "NewPost.jsp";
  			}%>
		<% if (Login_user == null) {%>
           <a rel="nofollow" class="btn" href="Dang_nhap.jsp">Đăng nhập</a>
           <a rel="nofollow" class="btn" href="Dang_ky.jsp"> Đăng ký</a>
           <a rel="nofollow" class="btn btn-add-post" href="<%out.print(isLoginUrl);%>">Đăng tin mới</a>
           <%} else{%>
           <a class="welcome-text" href="#" rel="nofollow">
    		<img src="<%=Login_user.getAvatar()%>" style="border: 1px solid #ddd; width: 40px; height: 40px; border-radius: 50%; margin-right: 5px;">
    		<div>
				<span style="display: block;font-size: 1.2rem;margin-bottom: 3px;max-width: 300px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">Xin chào, <strong><%out.print(Login_user.getName()); %></strong>
     		</div>
			</a>
       				<div class="dropdown" onclick="$(this).toggleClass('open')">
					<button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown">Quản lý tài khoản </button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-menu-item dang-tin" rel="nofollow" href="Dang_tin_moi.jsp" title="Đăng tin cho thuê"><i></i> Đăng tin cho thuê</a></li>
							<li><a class="dropdown-menu-item quan-ly-tin-dang" rel="nofollow" href="Quan_ly_tin.jsp" title="Quản lý tin đăng"><i></i> Quản lý tin đăng</a></li>
							<li><a class="dropdown-menu-item thong-tin-ca-nhan" rel="nofollow" href="Thong_tin_ca_nhan.jsp"><i></i> Thông tin cá nhân</a></li>
							<li><a class="dropdown-menu-item lich-su-nap-tien" rel="nofollow" href="Change_Pass.jsp"><i></i> Đổi mật khẩu</a></li>
							<li><a class="dropdown-menu-item thoat" rel="nofollow" href="Logout" title="Thoát"><i></i> Thoát</a></li>
               			</ul>
					</div>
 					<a rel="nofollow" class="btn btn-add-post" href="Dang_tin_moi.jsp">Đăng tin mới</a>
            <%}%>
        </div>
    </div>
         <nav id="navbar-menu">
            <ul id="menu-main-menu" class="container-menu clearfix level-1">
               <li class="navbar_item clearfix ${tag == null ? "active current-menu-item":"" }"><a href="Post_servlet">Trang chủ</a></li>
               <c:forEach items="${listCategory}" var = "o">
               		<li class="navbar_item clearfix ${tag == o.id ? "active current-menu-item":"" }" "><a href="Post_servlet?Cid=${o.id}">${o.name}</a></li>
               </c:forEach>
            </ul>
         </nav>