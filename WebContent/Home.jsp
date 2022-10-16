<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<jsp:include page="Header_home.jsp"></jsp:include>
         <main id="main">
            <div style="height: 60px; margin-bottom: 10px;">
           </div>

            <div class="container clearfix">
               <div id="left-col">
                  <section class="section section-post-listing">
                     <div class="section-header"><span class="section-title">Danh sách tin đăng</span></div>
                     <div class="post-sort"><span>Sắp xếp: </span><a class="active" href="#">Mới nhất</a><a class="" href="#">Xem nhiều</a></div>
                     
                     <ul class="post-listing clearfix">
                         <c:forEach items="${listPost}" var = "o">
               				<li class="post-item post-id-607942 style-4 clearfix tin-vip vip1" style="border-color: #ea2e9d;" post-id="607942">
                           		<figure class="post-thumb"><a class="clearfix" href="#"><img class="lazy" src="images/mobile/image-placeholder.png" alt="..." height="100" width="100" layout="responsive"></a></figure>
                           		<div class="post-meta">
									<h3 class="post-title"><a style="color: #ea2e9d;" href="#">${o.title} </a></h3>
								<div class="meta-row clearfix">
									<span class="post-price">${o.price} đ/tháng</span>
									<span class="post-acreage">${o.area}m²</span>
									<span class="post-location"> Bình Thạnh, Hồ Chí Minh</span>
									<time class="post-time" title="Thứ 7, 17:20 15/10/2022">6 giờ trước</time>
								</div>
                              	<div class="meta-row clearfix">
                                 	<p class="post-summary">${o.description}</p>
                              	</div>
                              	<div class="meta-row clearfix">
                                 	<div class="post-author"><span class="author-name">lê thanh hoàng quân</span></div>
                              	</div>
                           		</div>
                        	</li>
               			</c:forEach>
                        
                        
                     </ul>
                  </section>
                  <ul class="pagination">
                     <li class="page-item active"><span class="page-link">1</span></li>
                     <li class="page-item"><a class="page-link" href="index4658.html?page=2">2</a></li>
                     <li class="page-item"><a class="page-link" href="index9ba9.html?page=3">3</a></li>
                     <li class="page-item"><a class="page-link" href="indexfdb0.html?page=4">4</a></li>
                     <li class="page-item disabled"><span class="page-link">...</span></li>
                     <li class="page-item"><a class="page-link" href="index8fcf.html?page=4869" rel="next">&raquo;&raquo;</a></li>
                  </ul>
               </div>
               <aside id="aside">
                  <section class="section section-sublink">
                     <div class="section-header"><span class="section-title">Danh mục cho thuê</span></div>
                     <ul class="list-links clearfix">
                        <li>
                           <h2><a href="cho-thue-phong-tro.html" title="Cho thuê phòng trọ">Cho thuê phòng trọ</a></h2>
                           <span class="count">(49.212)</span>
                        </li>
                        <li>
                           <h2><a href="nha-cho-thue.html" title="Cho thuê nhà nguyên căn">Cho thuê nhà nguyên căn</a></h2>
                           <span class="count">(8.954)</span>
                        </li>
                        <li>
                           <h2><a href="cho-thue-can-ho.html" title="Cho thuê căn hộ">Cho thuê căn hộ</a></h2>
                           <span class="count">(9.520)</span>
                        </li>

                        <li>
                           <h2><a href="cho-thue-mat-bang.html" title="Cho thuê mặt bằng">Cho thuê mặt bằng</a></h2>
                           <span class="count">(2.050)</span>
                        </li>
                        <li>
                           <h2><a href="tim-nguoi-o-ghep.html" title="Tìm người ở ghép">Tìm người ở ghép</a></h2>
                           <span class="count">(14.608)</span>
                        </li>
                     </ul>
                  </section>
                  <section class="section section-sublink">
                     <div class="section-header"><span class="section-title">Xem theo giá</span></div>
                     <ul class="list-links price clearfix">
                        <li><a href="index1eb7.html?gia_den=1000000">Dưới 1 triệu</a></li>
                        <li><a href="index0f58.html?gia_tu=1000000&amp;gia_den=2000000">Từ 1 - 2 triệu</a></li>
                        <li><a href="index56c5.html?gia_tu=2000000&amp;gia_den=3000000">Từ 2 - 3 triệu</a></li>
                        <li><a href="indexe9e9.html?gia_tu=3000000&amp;gia_den=5000000">Từ 3 - 5 triệu</a></li>
                        <li><a href="index1179.html?gia_tu=5000000&amp;gia_den=7000000">Từ 5 - 7 triệu</a></li>
                        <li><a href="index2037.html?gia_tu=7000000&amp;gia_den=10000000">Từ 7 - 10 triệu</a></li>
                        <li><a href="indexf318.html?gia_tu=10000000&amp;gia_den=15000000">Từ 10 - 15 triệu</a></li>
                        <li><a href="indexa646.html?gia_tu=15000000">Trên 15 triệu</a></li>
                     </ul>
                  </section>
                  <section class="section section-sublink">
                     <div class="section-header"><span class="section-title">Xem theo diện tích</span></div>
                     <ul class="list-links acreage clearfix">
                        <li><a href="indexf85e.html?dien_tich_den=20">Dưới 20 m<sup>2</sup></a></li>
                        <li><a href="indexb6c5.html?dien_tich_tu=20&amp;dien_tich_den=30">Từ 20 - 30m<sup>2</sup></a></li>
                        <li><a href="indexffb2.html?dien_tich_tu=30&amp;dien_tich_den=50">Từ 30 - 50m<sup>2</sup></a></li>
                        <li><a href="index7c6c.html?dien_tich_tu=50&amp;dien_tich_den=70">Từ 50 - 70m<sup>2</sup></a></li>
                        <li><a href="index3b56.html?dien_tich_tu=70&amp;dien_tich_den=90">Từ 70 - 90m<sup>2</sup></a></li>
                        <li><a href="indexe1a1.html?dien_tich_tu=90">Trên 90m<sup>2</sup></a></li>
                     </ul>
                  </section>



               </aside>
            </div>


         </main>

      </div>
   </body>
</html>