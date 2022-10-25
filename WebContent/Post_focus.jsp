<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@page import="Dto.UserDTO"%>

<!DOCTYPE html>
<html>
   <head>
      <title>Cho thuê phòng </title>
      <link rel="stylesheet" href="css/frontend.css">

   </head>
      	<div class="container container-header clearfix">
 		<a id="top-logo" href="index.html" title="cho thuê phòng trọ, cho thuê nhà trọ, tìm phòng trọ"></a>
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
           <li class="navbar_item clearfix"><a href="Post_servlet">Trang chủ</a></li>
           <li class="navbar_item clearfix"><a href="Post_servlet?Cid=1">Phòng trọ cho thuê</a></li>
           <li class="navbar_item clearfix"><a href="Post_servlet?Cid=2">Nhà cho thuê</a></li>
           <li class="navbar_item clearfix"><a href="Post_servlet?Cid=3">Cho thuê căn hộ</a></li>
           <li class="navbar_item clearfix"><a href="Post_servlet?Cid=4">Cho thuê mặt bằng</a></li>
           <li class="navbar_item clearfix"><a href="Post_servlet?Cid=5">Tìm người ở ghép</a></li>
        </ul>
    </nav>
   <body class="post post-607942 windows single_post_new">
      <div id="webpage">
  
         <main id="main">
            <div class="container clearfix">

               <div id="left-col">
                  <article class="the-post tin-vip vip1">
                     <div class="post-images">
                        <div class="images-swiper-container">
                           <div class="swiper-wrapper">
							  <div class="swiper-slide"><img alt="Cho thuê phòng" src="${post.images}"></div>
                           </div>
                        </div>
                     </div>
                     <header class="page-header">
                        <h1 class="page-h1"><a style="color: #ea2e9d;" href="#" title="${post.title}">${post.title}</a></h1>
                        <div class="clearfix"></div>
                        <p style="margin-bottom: 10px;"></p>
                        <address class="post-address">Địa chỉ: ${post.address}</address>
                        <div class="post-attributes">
                           <div class="item price"><i></i><span style="color: #16c784; font-weight: bold; font-size: 1.5rem">${post.price} đ/tháng</span></div>
                           <div class="item acreage"><i></i><span> ${post.area}m<sup>2</sup></span></div>
                           <div class="item published"><i></i><span title="Thứ 7, 17:20 15/10/2022">6 giờ trước</span></div>
                        </div>
                     </header>
                     <section class="section post-main-content">
                        <div class="section-header">
                           <h2 class="section-title">Thông tin mô tả</h2>
                        </div>
                        <div class="section-content">
                           ${post.description}
                        </div>
                     </section>
                     <section class="section post-overview">

                     </section>
                     <section class="section post-contact">
                        <div class="section-header">
                           <h3 class="section-title">Thông tin liên hệ</h3>
                        </div>
                        <div class="section-content">
                           <table class="table">
                              <tr>
                                 <td class="name">Liên hệ:</td>
                                 <td> ${post.user_name}</td>
                              </tr>
                              <tr>
                                 <td class="name">Điện thoại:</td>
                                 <td> ${post.phone}</td>
                              </tr>
                           </table>
                        </div>
                     </section>

                     <%--<section class="section post-report">
                        <div class="section-content">
                           <a class="btn btn-report btn-outline" target="_blank" rel="nofollow" href="#"><i></i> Gửi phản hồi</a>
                        </div>
                     </section>--%>
                     <div class="post-fix-bar">
                        <div class="inner clearfix">
                           <div class="left-bar"><span class="post-fix-bar-price">6 triệu/tháng <span style="color: #333; font-weight: normal;">- 30m<sup>2</sup></span></span><span class="post-fix-bar-address">Đường Xô Viết Nghệ Tĩnh, Phường 26, Quận Bình Thạnh, Hồ Chí Minh</span></div>
                           <div class="right-bar"><span class="post-fix-bar-save js-btn-save" data-post-id="607942"><i></i> Yêu thích</span><a class="post-fix-bar-zalo" rel="nofollow" target="_blank" href="https://zalo.me/0943430106">Nhắn Zalo</a><a class="post-fix-bar-phone" rel="nofollow" target="_blank" href="tel:0943430106"><i></i> Gọi ngay 0943430106</a></div>
                        </div>
                     </div>
                  </article>
				</div>
               <aside id="aside">
                  <div class="author-aside">
                     <figure class="author-avatar"><img src="${post.user_image}"></figure>
                     <span class="author-name">${post.user_name}</span>
                     <div style="min-height: 16px; margin-bottom: 10px;">
                        
                     </div>
                     <a class="btn author-phone" rel="nofollow" href="tel:0943430106"><i></i> ${post.phone}</a>	
                  </div>

                 	<%-- <section class="section section-aside-tinmoidang">
                     <div class="section-header"><span class="section-title">Tin mới đăng</span></div>
                     <ul class="post-listing aside clearfix">
                        <li class="post-item clearfix tin-vip vip3" post-id="608767">
                           <a href="https://phongtro123.com/chinh-chu-cho-2-nu-thue-tang-3-nha-trong-ngach-79-56-ngo-79-duong-cau-giay-phuong-yen-hoa-quan-cau-giay-pr608767.html">
                              <figure><img class="lazy" src="https://phongtro123.com/images/mobile/image-placeholder.png" data-src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/15/z3802977199913-b95b8b45c1d7ec5a77a1b53023f9cce5_1665852766.jpg" alt="Chính chủ, cho 2 nữ thuê tầng 3, nhà trong ngách 79/56 ngõ 79, đường Cầu Giấy, Phường Yên Hòa, Quận Cầu Giấy" height="100" width="100" layout="responsive"><span class="has-video"></span></figure>
                              <div class="post-meta"><span class="post-title" style="color: #3763e0;"><span class="star star-2"></span> Chính chủ, cho 2 nữ thuê tầng 3, nhà trong… </span><span class="post-price">3.8 triệu/tháng</span><time class="post-time" title="Thứ 7, 23:55 15/10/2022">12 phút trước</time></div>
                           </a>
                        </li>

                     </ul>
                  </section> --%>
				</aside>
            </div>

         </main>
      <script src="asda.js"></script>
   </body>
  
</html>