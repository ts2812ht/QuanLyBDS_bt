<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
   <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
   <head>

      <title>Tim Phong Tro</title>

      <link rel="stylesheet" href="css/frontend.css">
  </head>
   <body class="logged home windows home">
      <div id="webpage">
         <div class="container container-header clearfix">
            <a id="top-logo" href="index.html" title="cho thuê phòng trọ, cho thuê nhà trọ, tìm phòng trọ">cho thuê phòng trọ, cho thuê nhà trọ, tìm phòng trọ</a>
            <div class="user-welcome clearfix js-reload-html-header">
               <div class="welcome-text">Xin chào!</div>
               <a rel="nofollow" class="btn" href="#">Đăng nhập</a>
               <a rel="nofollow" class="btn" href="#"> Đăng ký</a>
               <a rel="nofollow" class="btn btn-add-post" href="#">Đăng tin mới</a>
            </div>
         </div>
         <nav id="navbar-menu">
            <ul id="menu-main-menu" class="container-menu clearfix level-1">
               <li class="navbar_item clearfix active current-menu-item"><a href="Post_servlet">Trang chủ</a></li>
               <c:forEach items="${listCategory}" var = "o">
               		<li class="navbar_item clearfix "><a href="Post_servlet?Cid=1">${o.name}</a></li>
               </c:forEach>
               
            </ul>
         </nav>