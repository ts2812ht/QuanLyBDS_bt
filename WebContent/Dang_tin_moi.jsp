<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!doctype html>
<html lang="en">
   <head>
   	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
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
								<img src="${sessionScope.Login_user.avatar}">
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
						<li class="nav-item"><a class="nav-link" href="Thong_tin_ca_nhan.jsp"> Sửa thông tin cá nhân </a></li>
						<li class="nav-item"><a class="nav-link" href="Change_Pass.jsp"> Đổi mật khẩu </a></li>
						<li class="nav-item"><a class="nav-link" href="Post_servlet"> Trở về trang chủ</a></li>
					</ul>
				</nav>
               <main role="main" class="ml-sm-auto col-lg-10">
                  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                     <h1 class="h1">Đăng tin mới</h1>
                  </div>
				  <div><p style="color:#00ff00">${success}</p></div>
                  <form class="form-horizontal js-form-submit-data js-frm-manage-post" action="NewPost_servlet" enctype="multipart/form-data" method="POST">
                     <div class="row">
                        <div class="col-md-8">
                           <div class="row">
                              <div class="col-md-12">
                                 <h3>Địa chỉ cho thuê</h3>
                              </div>
                           </div>
                           <div class="row mt-3">
                              <div class="col-md-4">
                                 <div class="form-group">
                                    <label class="col-form-label" for="district_id">Quận/Huyện</label>
                                    <select name="district_id" id="district_id" class="form-control js-select-quanhuyen select2-hidden-accessible" required="" data-msg-required="Chưa chọn Quận/Huyện" tabindex="-1" aria-hidden="true">
                                       <option value="0">Chọn Quận/Huyện</option>
                                    </select>
                                 </div>
                              </div>
                              <div class="col-md-4">
                                 <div class="form-group">
                                    <label class="col-form-label" for="phuongxa">Phường/Xã</label>
                                    <select class="form-control js-select-phuongxa" name="phuongxa" id="phuongxa">
                                       <option value="0">Chọn Phường/Xã</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                           <div class="row">
			                    <div class="col-md-6">
			                        <div class="form-group">
			                            <label for="address" class="col-form-label">Địa chỉ</label>
			                            <input type="text" class="form-control js-input-street-number" name="address" id="address" value="">
			                        </div>
			                    </div>
			               </div>
                           <div class="row">
                              <div class="col-md-12">
                                 <div class="form-group">
                                    <label for="diachi" class="col-form-label">Địa chỉ chính xác</label>
                                    <input type="text" class="form-control" readonly ="readonly" name="dia_chi" id="diachi" value="">
                                 </div>
                              </div>
                           </div>
                           <div class="form-group row mt-5">
                              <div class="col-md-12">
                                 <h3>Thông tin mô tả</h3>
                              </div>
                           </div>
                           <div class="form-group row mt-3">
                              <label for="post_cat" class="col-md-12 col-form-label">Loại chuyên mục</label>
                              <div class="col-md-6">
                                 <select class="form-control" id="post_cat" name="loai_chuyen_muc" required data-msg-required="Chưa chọn loại chuyên mục">
                                    <option value="">-- Chọn loại chuyên mục --</option>
                                    <option value="1">Phòng trọ, nhà trọ</option>
                                    <option value="2">Nhà thuê nguyên căn</option>
                                    <option value="3">Cho thuê căn hộ</option>
                                    <option value="4">Cho thuê mặt bằng</option>
                                    <option value="5">Tìm người ở ghép</option>
                                 </select>
                              </div>
                           </div>
                           <div class="form-group row">
                              <label for="post_title" class="col-md-12 col-form-label">Tiêu đề</label>
                              <div class="col-md-12">
                                 <input type="text" class="form-control" name="post_title" id="post_title" value="" minlength="30" maxlength="120" required data-msg-required="Tiêu đề không được để trống" data-msg-minlength="Tiêu đề quá ngắn" data-msg-maxlength="Tiêu đề quá dài">
                              </div>
                           </div>
                           <div class="form-group row">
                              <label for="description" class="col-md-12 col-form-label">Nội dung mô tả</label>
                              <div class="col-md-12">
                                 <textarea class="form-control" name="description" id="description" rows="10" required minlength="100" data-msg-required="Bạn chưa nhập nội dung" data-msg-minlength="Nội dung tối thiểu 100 kí tự"></textarea>
                              </div>
                           </div>
                           <div class="form-group row">
                              <label for="phone" class="col-md-12 col-form-label">Thông tin liên hệ</label>
                              <div class="col-md-6">
                                 <div class="input-group mb-3">
                                    <input id="ten_lien_he" type="text" name="ten_lien_he" class="form-control" readonly="readonly" required data-msg-required="Tên liên hệ" value="${sessionScope.Login_user.name}">
                           			<input type="hidden" name="user_id" value="${sessionScope.Login_user.id}" />
                                 </div>
                              </div>
                           </div>
                           <div class="form-group row">
                              <label for="phone" class="col-md-12 col-form-label">Điện thoại</label>
                              <div class="col-md-6">
                                 <div class="input-group mb-3">
                                    <input id="phone" type="number" name="phone" class="form-control" readonly="readonly" required data-msg-required="Số điện thoại" value="${sessionScope.Login_user.phone}">
                                 </div>
                              </div>
                           </div>
                           <div class="form-group row">
                              <label for="giachothue" class="col-md-12 col-form-label">Giá cho thuê</label>
                              <div class="col-md-6">
                                 <div class="input-group">
                                    <input id="giachothue" name="price" pattern="[0-9.]+" type="text" class="form-control" required data-msg-required="Bạn chưa nhập giá phòng" data-msg-min="Giá phòng chưa đúng">
                                    <div class="input-group-append">
                                       <span class="input-group-text">đồng</span>
                                    </div>
                                 </div>
                                 <small class="form-text text-muted">Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000</small>
                              </div>
                              <label for="text_giachothue" id="text_giachothue" class="col-sm-12 control-label js-number-text" style="color: red;"></label>
                           </div>
                           <div class="form-group row">
                              <label for="post_acreage" class="col-md-12 col-form-label">Diện tích</label>
                              <div class="col-md-6">
                                 <div class="input-group mb-3">
                                    <input id="post_acreage" type="number" pattern="[0-9.]+" name="area" max="1000" class="form-control" required data-msg-required="Bạn chưa nhập diện tích">
                                    <div class="input-group-append">
                                       <span class="input-group-text">m<sup>2</sup></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="form-group row mt-5">
                              <div class="col-md-12">
                                 <h3>Hình ảnh</h3>
                              </div>
                           </div>
                           <div class="form-group row">
                              <div class="col-md-12">
                                 <p>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</p>
                                    <div class="col-md-6">
                        				<input type="file" name = "image"/>
                        			</div>
                              </div>
                           </div>
                           <div><p style="color:red">${error}</p></div>
                           <div class="form-group row mt-5">
                              <div class="col-md-12">
                                 <button type="submit" class="btn btn-success mb-5 btn-lg btn-block js-btn-hoan-tat">Tiếp tục</button>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="card mb-5" style="color: #856404; background-color: #fff3cd; border-color: #ffeeba;">
                              <div class="card-body">
                                 <h4 class="card-title">Lưu ý khi đăng tin</h4>
                                 <ul style="padding-left: 15px;">
                                    <li style="list-style-type: square; margin-left: 15px;">Nội dung phải viết bằng tiếng Việt có dấu</li>
                                    <li style="list-style-type: square; margin-left: 15px;">Tiêu đề tin không dài quá 100 kí tự</li>
                                    <li style="list-style-type: square; margin-left: 15px;">Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có hiệu quả hơn.</li>
                                    <li style="list-style-type: square; margin-left: 15px;">Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so với tin rao không có ảnh. Hãy đăng ảnh để được giao dịch nhanh chóng!</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     
            </form>
            
            <br><br>
            </main>
            </div>
         </div>
      </div>

   </body>
<script type="text/javascript">
     $(document).ready(function () {
    	 $.ajax({
             url: "District_ajax_servlet",
             method: "GET",
             success: function (data, textStatus, jqXHR) {
                 console.log(data);
                 let obj = $.parseJSON(data);
                 $.each(obj, function (key, value) {
                	 $('#district_id').append('<option value="' + value.id + '">' + value.name + '</option>');
                 });
             },
             error: function (jqXHR, textStatus, errorThrown) {
                 $('#country').append('<option>Country Unavailable</option>');
             },
             cache: false
         });
         $('#district_id').change(function () {
             $('#phuongxa').find('option').remove();
             if ($('select[name=district_id] option:selected').val() !=0 ){
                 $('#diachi').val($('select[name=district_id] option:selected').text() + ', Hà Nội');
             }
             $('#phuongxa').append('<option value="0">Chọn Phường/xã</option>'); 
             let did = $('#district_id').val();
             let data = {
                 id: did
             };

             $.ajax({
                 url: "Phuongxa_ajax_servlet",
                 method: "GET",
                 data: data,
                 success: function (data, textStatus, jqXHR) {
                     console.log(data);
                     let obj = $.parseJSON(data);
                     $.each(obj, function (key, value) {
                         $('#phuongxa').append('<option value="' + value.id + '">' + value.name + '</option>')
                     });
                 },
                 error: function (jqXHR, textStatus, errorThrown) {
                    
                 },
                 cache: false
             });
             
             $('#phuongxa').change(function () {
            	 if ($('select[name=phuongxa] option:selected').val() !=0 ){
            		 $('#diachi').val($('select[name=phuongxa] option:selected').text() + ', ' + $('select[name=district_id] option:selected').text() + ', Hà Nội');
                 }
                
             });
             
         });
         
        $('#address').on('input',function(){ 
       		if ($('select[name=district_id] option:selected').val() !=0 ){
    		       $('#diachi').val($('#address').val() +', ' + $('select[name=district_id] option:selected').text() + ', Hà Nội');
    			if ($('select[name=district_id] option:selected').val() !=0 && $('select[name=phuongxa] option:selected').val() !=0){
    		       	$('#diachi').val($('#address').val() + ', ' + $('select[name=phuongxa] option:selected').text() +  ', ' + $('select[name=district_id] option:selected').text() + ', Hà Nội');
    		   		} 
    		   }  else{
    		  	 $('#diachi').val($('#address').val());
        		}
        	
        });
        
        /*Not complete
        function Ship_to_dia_chi() {
		    if ($('select[name=district_id] option:selected').val() !=0 ){
		       $('#diachi').val($('#address').val() +', ' + $('select[name=district_id] option:selected').text() + ', Hà Nội');
			if ($('select[name=district_id] option:selected').val() !=0 && $('select[name=phuongxa] option:selected').val() !=0){
		       	$('#diachi').val($('#address').val() + ', ' + $('select[name=phuongxa] option:selected').text() +  ', ' + $('select[name=district_id] option:selected').text() + ', Hà Nội');
		   		} 
		   }  else{
		  	 $('#diachi').val($('#address').val());
    		}
		}
        $(function () {
  			}
		});
     	$('#address').change(function () {
     		 if ($('select[name=district_id] option:selected').val() !=0 ){
                 $('#diachi').val($('#address').val() +', ' + $('select[name=district_id] option:selected').text() + ', Hà Nội');
             } else if ($('select[name=district_id] option:selected').val() !=0 && $('select[name=phuongxa] option:selected').val() !=0){
                 $('#diachi').val($('#address').val() + ', ' + $('select[name=phuongxa] option:selected').text() +  ', ' + $('select[name=district_id] option:selected').text() + ', Hà Nội');
             } else{
            	 $('#diachi').val($('#address').val());
             }
     		 
     	

     	});*/
         
     });
 </script>
</html>