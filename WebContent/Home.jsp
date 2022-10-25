<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>

   <head>

      <title>Tim Phong Tro</title>

      <link rel="stylesheet" href="css/frontend.css">
  </head>
  <jsp:include page="Header_home.jsp"></jsp:include>
   <body class="logged home windows home">
      <div id="webpage">
         <main id="main">
            <div style="height: 60px; margin-bottom: 10px;">
           </div>
            <div class="container clearfix">
               <div id="left-col">
                  <section class="section section-post-listing">
                     <div class="section-header"><span class="section-title">Danh sách tin đăng</span></div><%-- 
                     <div class="post-sort"><span>Sắp xếp: </span><a class="active" href="#">Mới nhất</a><a class="" href="#">Xem nhiều</a></div>
                     --%>
                     <ul class="post-listing clearfix">
                         <c:forEach items="${listPost}" var = "o">
               				<li class="post-item post-id-607942 style-4 clearfix tin-vip vip1" style="border-color: #ea2e9d;" post-id="607942">
                           		<figure class="post-thumb">
                           			<a class="clearfix" href="MainPost_servlet?Pid=${o.id}">
                           				<img class="lazy" src="#"  data-src="${o.images}" alt="..." height="100" width="100" layout="responsive">
                           			</a>
                           		</figure>
                           		<div class="post-meta">
									<h3 class="post-title"><a style="color: #ea2e9d;" href="MainPost_servlet?Pid=${o.id}">${o.title} </a></h3>
								<div class="meta-row clearfix">
									<span class="post-price">${o.price} đ/tháng</span>
									<span class="post-acreage">${o.area}m²</span>
									<span class="post-location">${o.locate}</span>
									<time class="post-time" title="Thứ 7, 17:20 15/10/2022">${o.getTimeAgo()}</time>
								</div>
                              	<div class="meta-row clearfix">
                                 	<p class="post-summary">${o.haft_description}...<a href="MainPost_servlet?Pid=${o.id}">xem thêm</a>
                              	</div>
                              	<div class="meta-row clearfix">
                                 	<div class="post-author"><span class="author-name">${o.user_name}</span></div>
                              	</div>
                           		</div>
                        	</li>
               			</c:forEach>
                     </ul>
                  </section>
                  
                  
               </div>
               <aside id="aside">
                  <section class="section section-sublink">
                     <div class="section-header"><span class="section-title">Danh mục cho thuê</span></div>
                     <ul class="list-links clearfix">
                        <li>
                           <h2><a href="Post_servlet?Cid=1" title="Cho thuê phòng trọ">Cho thuê phòng trọ</a></h2>
                           <span class="count"></span>
                        </li>
                        <li>
                           <h2><a href="Post_servlet?Cid=2" title="Cho thuê nhà nguyên căn">Cho thuê nhà nguyên căn</a></h2>
                           <span class="count"></span>
                        </li>
                        <li>
                           <h2><a href="Post_servlet?Cid=3" title="Cho thuê căn hộ">Cho thuê căn hộ</a></h2>
                           <span class="count"></span>
                        </li>

                        <li>
                           <h2><a href="Post_servlet?Cid=4" title="Cho thuê mặt bằng">Cho thuê mặt bằng</a></h2>
                           <span class="count"></span>
                        </li>
                        <li>
                           <h2><a href="Post_servlet?Cid=5" title="Tìm người ở ghép">Tìm người ở ghép</a></h2>
                           <span class="count"></span>
                        </li>
                     </ul>
                  </section>
                  <section class="section section-sublink">
                     <div class="section-header"><span class="section-title">Xem theo giá</span></div>
                     <ul class="list-links price clearfix">
                        <li><a href="Post_servlet?gia_den=1000000">Dưới 1 triệu</a></li>
                        <li><a href="Post_servlet?gia_tu=1000000&gia_den=2000000">Từ 1 - 2 triệu</a></li>
                        <li><a href="Post_servlet?gia_tu=2000000&gia_den=3000000">Từ 2 - 3 triệu</a></li>
                        <li><a href="Post_servlet?gia_tu=3000000&gia_den=5000000">Từ 3 - 5 triệu</a></li>
                        <li><a href="Post_servlet?gia_tu=5000000&gia_den=7000000">Từ 5 - 7 triệu</a></li>
                        <li><a href="Post_servlet?gia_tu=7000000&gia_den=10000000">Từ 7 - 10 triệu</a></li>
                        <li><a href="Post_servlet?gia_tu=10000000&gia_den=15000000">Từ 10 - 15 triệu</a></li>
                        <li><a href="Post_servlet?gia_tu=15000000">Trên 15 triệu</a></li>
                     </ul>
                  </section>
                  <section class="section section-sublink">
                     <div class="section-header"><span class="section-title">Xem theo diện tích</span></div>
                     <ul class="list-links acreage clearfix">
                        <li><a href="Post_servlet?dien_tich_den=20">Dưới 20 m<sup>2</sup></a></li>
                        <li><a href="Post_servlet?dien_tich_tu=20&dien_tich_den=30">Từ 20 - 30m<sup>2</sup></a></li>
                        <li><a href="Post_servlet?dien_tich_tu=30&dien_tich_den=50">Từ 30 - 50m<sup>2</sup></a></li>
                        <li><a href="Post_servlet?dien_tich_tu=50&dien_tich_den=70">Từ 50 - 70m<sup>2</sup></a></li>
                        <li><a href="Post_servlet?dien_tich_tu=70&dien_tich_den=90">Từ 70 - 90m<sup>2</sup></a></li>
                        <li><a href="Post_servlet?dien_tich_tu=90">Trên 90m<sup>2</sup></a></li>
                     </ul>
                  </section>
               </aside>
            </div>


         </main>

      </div>
      <script src="js/Javascipt.js"></script>
   </body>
</html>