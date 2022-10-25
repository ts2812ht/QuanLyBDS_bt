<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!doctype html>
<html lang="en">
<head>
<link rel="stylesheet"
	href="https://phongtro123.com/dashboard_resource/css/bootstrap.min.css?v=20191108">
<link rel="stylesheet" href="css/dashboard.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<title>Quản lý tin đăng</title>
</head>
<body class="desktop dashboard quan-ly cap-nhat-thong-tin-ca-nhan">
	<div id="webpage">
		<nav class="navbar navbar-expand-md fixed-top flex-md-nowrap p-0"
			id="mobile_navbar_top">
			<a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Thông tin cá nhân</a>
			<div class="collapse navbar-collapse" id="navbarCollapse"></div>
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
						<li class="nav-item"><a class="nav-link active" href="Quan_ly_tin.jsp">Quản lý tin đăng </a></li>
						<li class="nav-item"><a class="nav-link " href="Thong_tin_ca_nhan.jsp"> Sửa thông tin cá nhân </a></li>
						<li class="nav-item"><a class="nav-link" href="Change_Pass.jsp"> Đổi mật khẩu </a></li>
						<li class="nav-item"><a class="nav-link" href="Post_servlet"> Trở về trang chủ</a></li>
					</ul>
				</nav>
				<main role="main" class="ml-sm-auto col-lg-10">
					<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
						<h1 class="h2">Quản lý tin đăng</h1>
					</div>

					<div class="d-none d-md-block">
						<div class="table-responsive">
							<table class="table table_post_listing table-bordered _table-hover" id="tb_Post">
								<thead>
									<tr>
										<th>Mã tin</th>
										<th style="white-space: nowrap;">Tiêu đề</th>
										<th>Địa chỉ</th>
										<th style="white-space: nowrap;">Ngày đăng</th>
										<th style="white-space: nowrap;">Trạng thái</th>
										<th style="white-space: nowrap;">Chỉnh sửa</th>
									</tr>
								</thead>
								<tbody>

									
								</tbody>
							</table>
						</div>

					</div>

					<br>
					<br>
				</main>

			</div>
		</div>
	</div>
</body>

<script type="text/javascript">
     $(document).ready(function () {
         $.ajax({
             url: "Quan_ly_tin_servlet",
             method: "GET",
             success: function (data, textStatus, jqXHR) {
//               console.log(data);
                 let obj = $.parseJSON(data);

                 $('#tb_Post').append('<tbody>')
                 $.each(obj, function (key, value) {
                	 let color = value.approve == '1' ? 'green' : 'red' ;
                	 value.approve = value.approve == '1' ? 'Đang đăng' : 'Bị huỷ';
                	 switch (value.category_id) {
	                	  case '1':
	                		value.category_id = 'Phòng trọ';
	                	    break;
	                	  case '2':
	                		value.category_id = 'Nhà cho thuê';
	                	    break;
	                	  case '3':
	                		value.category_id = 'Căn hộ';
	                	    break;
	                	  case '4':
	                		value.category_id = 'Mặt bằng';
	                	    break;
	                	  case '5':
	                		value.category_id = 'Ở ghép';
	                	    break;
	                	}
                	 $('#tb_Post').append(
                			 	'<tr>'
                			 	+'<td>#'+value.id+'</td>'
								+'<td><span class="badge badge-pill badge-warning">'+value.category_id+'</span>'
									+ '<a class="post_title" target="_blank" href="MainPost_servlet?Pid='+value.id+'" style="color:;">'+value.title+'</a></td>'
								+'<td><p style="margin-top: 10px;">' + value.address + '</p></td>'
								+'<td><p style="margin-top: 10px;">' + value.create_at + '</p></td>'
								+'<td style="color:'+ color +'"><b>' + value.approve + '</b></td>'
								+'<td><div class="post_btn_toolbar mt-1"><a href="Sua_tin.jsp?Pid=' +  value.id + '" class="btn btn-sm">Sửa tin</a></div>'
								+'<div class="post_btn_toolbar mt-2"><a href="Xoa_tin_servlet?Pid=' + value.id+'" class="btn btn-sm" id="delete">Xoá tin</a></div></td>'
                	 			+'</tr>');
                 });
                 $('#tb_Post').append('</tbody>')
             },
             error: function (jqXHR, textStatus, errorThrown) {
            	 console.log("error ajax");
             },
             cache: false
         });      
     });
 </script>
</html>