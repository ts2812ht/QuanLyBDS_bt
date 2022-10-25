<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>

   <head>

      <title>Tim Phong Tro</title>

      <link rel="stylesheet" href="css/frontend.css">
  </head>

   	<div class="container container-header clearfix">
		<a id="top-logo" href="index.html" title="cho thuê phòng trọ, cho thuê nhà trọ, tìm phòng trọ"></a>
	 	<div class="user-welcome clearfix js-reload-html-header">
        <a rel="nofollow" class="btn" href="Dang_nhap.jsp">Đăng nhập</a>
        <a rel="nofollow" class="btn" href="Dang_ky.jsp"> Đăng ký</a>
        <a rel="nofollow" class="btn btn-add-post" href="Dang_nhap.jsp">Đăng tin mới</a>
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
  
  
  
   <body class="windows register">
      <div id="webpage">

         <main id="main">
            <section class="section section-access">
               <div class="section-header">
                  <h1 class="section-title big">Tạo tài khoản mới</h1>
               </div>
               <div class="section-content">
                  <form class="form-access register-form js-register-form clearfix" action="Register_servlet" method="POST">
                     <div class="form-group form-group-fullname">
                     	<label for="inputFullName">Họ tên</label>
                     	<input type="text" class="form-control" min-length="3" id="inputFullName" name="fullname" value="${fullname}" required data-msg="Không được phép để trống">
                     </div>
                     <div class="form-group form-group-phone">
                     	<label for="inputPhone">Số điện thoại</label>
                     	<input type="text" class="form-control" min-length="10" max-length="11" id="inputPhone" name="phone" value="${phone}" required data-msg="Không được phép để trống">
                     	<p style="color:red;font-size: 12px;margin-top: 0px;" >${error5}</p>
                     </div>
                     
                     <div class="form-group form-group-fullname">
                     	<label for="inputUsername">Tên đăng nhập</label>
                     	<input type="text" class="form-control" min-length="3" id="inputUsername" name="username" value="${username}" required data-msg="Không được phép để trống">
                     	<p style="color:red;font-size: 12px;margin-top: 0px;" >${error6}</p>
                     </div>
                     
                     <div class="form-group form-group-password">
                     	<label for="password">Mật khẩu</label>
                     	<input type="password" class="form-control" min-length="6" id="password" name="password" required data-msg="Không được phép để trống">
                     	<p style="color:red;font-size: 12px;margin-top: 0px;" >${error4}</p>
                     </div>
                     
                     <div class="form-group form-group-password">
                     	<label for="re_password">Nhập lại mật khẩu</label>
                     	<input type="password" class="form-control" min-length="6" id="re_password" name="re_password" required data-msg="Không được phép để trống">
                     	<p style="color:red;font-size: 12px;margin-top: 0px;" >${error2}</p>
                     </div>
					 <div class="form-group"><button type="submit" name="wp-submit-register" class="btn btn-submit">Tạo tài khoản</button></div>
                     
					 <div class="form-group">
						<p style="padding: 5px 0;">Bạn đã có tài khoản? <a class="link" href="Dang_nhap.jsp">Đăng nhập ngay</a></p>
                     </div>
                     <input type="hidden" name="redirect" value=""/>
                  </form>
               </div>
            </section>
		 </main>

   </body>
   <!--  -->
</html>