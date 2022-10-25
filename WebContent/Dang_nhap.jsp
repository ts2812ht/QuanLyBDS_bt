<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
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
   <body class="windows login">
      <div id="webpage">
         <main id="main">
            <section class="section section-access">
               <div class="section-header">
                  <h1 class="section-title big">Đăng nhập</h1>
               </div>
               <div class="section-content">
                  <form class="form-access login-form js-login-form clearfix" action="Login" method="POST">
                     	<div class="form-group form-group-phone">
                     		<label for="username">Tên đăng nhập</label>
                     		<input type="text" class="form-control" id="inputPhoneEmailLogin" required placeholder="" name="username">
                     	</div>
                     	
                     	<div class="form-group form-group-password">
                     		<label for="password">Mật khẩu</label>
                     		<input type="password" class="form-control" id="password" required placeholder="" name="password">
                     	</div>
                     	<div class="form-group form-group-password">
                     		<p style="color:red">${error}<p>
                     	</div>
                     	<div class="form-group">
                     		<button type="submit" name="wp-submit-login" class="btn btn-submit">Đăng nhập</button>
                     	</div>
                     	<div class="form-group clearfix">
                     		<a href="Dang_ky.jsp">Tạo tài khoản mới</a>
                     	</div>
                     	<div>Hoặc đăng nhập với <fb:login-button scope="public_profile,email" onlogin="checkLoginState();"></fb:login-button> </div>
                     	
                  </form>
               </div>
            </section>
            
    <script>

  function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
    	document.location.href = 'Login?userId='+response.authResponse.userID;
    } else {                                 // Not logged into your webpage or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this webpage.';
    }
  }


  function checkLoginState() {
	  // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) {   // See the onlogin handler
      statusChangeCallback(response);
    });
  }


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1313041056118231',
      cookie     : true,                     // Enable cookies to allow the server to access the session.
      xfbml      : true,                     // Parse social plugins on this webpage.
      version    : 'v15.0'           // Use this Graph API version for this call.
    });


    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
      statusChangeCallback(response);        // Returns the login status.
    });
  };
 

</script>
   </body>
</html>