<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!doctype html>
<html lang="en">
   <head>
      <link rel="stylesheet" href="https://phongtro123.com/dashboard_resource/css/bootstrap.min.css?v=20191108">
      <link rel="stylesheet" href="css/dashboard.css">
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <title>Cập nhật thông tin cá nhân</title>
   </head>
   <body class="desktop dashboard quan-ly cap-nhat-thong-tin-ca-nhan">
      <div id="webpage">
         <nav class="navbar navbar-expand-md fixed-top flex-md-nowrap p-0" id="mobile_navbar_top">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Thông tin cá nhân</a>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            </div>
         </nav>
         <div class="container-fluid">
            <div class="row">
               <nav class="col-lg-2 d-none d-lg-block bg-light sidebar">
					<div class="user_info">
						<a href="#" class="clearfix">
							<div class="user_avatar">
								<img src="images/users/id5/avatar2.jpg">
							</div>
							<div class="user_meta">
								<div class="inner">
									<div class="user_name">${sessionScope.Login_user.name}</div>
									<div class="user_verify"
										style="color: #555; font-size: 0.9rem;">${sessionScope.Login_user.phone}</div>
								</div>
							</div>
						</a> <a class="btn btn-danger btn-sm" href="Dang_tin_moi.jsp">Đăng tin</a>
					</div>
					<ul class="nav nav-sidebar">
						<li class="nav-item"><a class="nav-link" href="Quan_ly_tin.jsp">Quản lý tin đăng </a></li>
						<li class="nav-item"><a class="nav-link active" href="Thong_tin_ca_nhan.jsp"> Sửa thông tin cá nhân </a></li>
						<li class="nav-item"><a class="nav-link" href="Change_Pass.jsp"> Đổi mật khẩu </a></li>
						<li class="nav-item"><a class="nav-link" href="Post_servlet"> Trở về trang chủ</a></li>
					</ul>
				</nav>
               <main role="main" class="ml-sm-auto col-lg-10">
                  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                     <h1 class="h2">Cập nhật thông tin cá nhân</h1>
                  </div>
                  <form class="js-form-submit-data" action="Update_Acc" enctype="multipart/form-data" method="POST">
                     <div class="form-group row mt-5">
                        <label for="user_id" class="col-md-2 offset-md-2 col-form-label">Tên đăng nhập</label>
                        <div class="col-md-6">
                           <input type="text" readonly class="form-control disable" id="user_id" value="${sessionScope.Login_user.username}">
                        </div>
                     </div>
                     <div class="form-group row">
                        <label for="user_phone" class="col-md-2 offset-md-2 col-form-label">Số điện thoại</label>
                        <div class="col-md-6">
                           <input type="phone" class="form-control disable" id="user_phone" name="phone" value="${sessionScope.Login_user.phone}">
                        </div>
                     </div>
                     <div class="form-group row">
                        <label for="user_name" class="col-md-2 offset-md-2 col-form-label">Tên hiển thị</label>
                        <div class="col-md-6">
                           <input type="text" class="form-control" id="user_name" name="name" value="${sessionScope.Login_user.name}" placeholder="Ex: Nguyễn Văn A">
                        </div>
                     </div>
                     <div class="form-group row">
                        <label for="user_email" class="col-md-2 offset-md-2 col-form-label">Email</label>
                        <div class="col-md-6">
                           <input type="text" class="form-control" id="user_email" name="email" value="${sessionScope.Login_user.email}" placeholder="">
                        </div>
                     </div>
                     <div class="form-group row mt-5">
                        <label for="user_avatar" class="col-md-2 offset-md-2 col-form-label" style="padding-top: 0;">Thay ảnh đại diện</label>
                        <div class="col-md-6">
                        <input type="file" name = "image"/>
                         <%--  <div class="user-avatar-upload-wrapper js-one-image-wrapper ">
                           
                              <div class="user-avatar-upload clearfix">
                                 
                             <input type="hidden" name="user_avatar" class="js-input-value" value="" /> 
                              </div>
                           </div> --%>
                        </div>
                     </div>
                     <div class="form-group row mt-5">
                        <label for="user_email" class="col-md-2 col-form-label"></label>
                        <div class="col-md-8">
                           <button type="submit" class="btn btn-primary btn-lg mb-2 btn-block">Lưu & Cập nhật</button>
                        </div>
                     </div>
                     <input type="hidden" name="user_id" value="${sessionScope.Login_user.id}">
                  </form>
                  <br><br>
               </main>
            </div>
         </div>
      </div>
   </body>
</html>