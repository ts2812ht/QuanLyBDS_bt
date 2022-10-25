package Servlet;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Dto.CategoryDTO;
import Dto.PostDTO;
import Jdbc.CategoryImpl;
import Jdbc.PostImpl;

/**
 * Servlet implementation class Post_servlet
 */
@WebServlet(
		displayName = "Trang_chu",
        urlPatterns = "/Post_servlet")

public class Post_servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public Post_servlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html;chartset=UTF-8");
		String Cid = null;
		Cid = request.getParameter("Cid");
		String gia_tu = request.getParameter("gia_tu");
		String gia_den = request.getParameter("gia_den");
		String dien_tich_tu = request.getParameter("dien_tich_tu");
		String dien_tich_den = request.getParameter("dien_tich_den");
		PostImpl dao = new PostImpl();
		List<PostDTO> list = null;
		CategoryImpl Dao = new CategoryImpl();
		List<CategoryDTO> listCategory = null;
		try {
			listCategory = Dao.getAllCategory();
		} catch (Exception e) {
			// TODO: handle exception
		}

		list = dao.getAllPost();
		if (Cid != null) {
			try {
				list = dao.getAllPostByCategoryId(Cid);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		} else if (gia_tu != null || gia_den != null){
			if (gia_tu == null) gia_tu = "";
			if (gia_den == null) gia_den = "";
			list = dao.searchPost("", "", gia_tu, gia_den, "", "");
		} else if (dien_tich_tu != null || dien_tich_den != null) {
			if (dien_tich_tu == null) dien_tich_tu = "";
			if (dien_tich_den == null) dien_tich_den = "";
			list = dao.searchPost("", "", "", "", dien_tich_tu, dien_tich_den);
		}
			
		request.setAttribute("tag",Cid);
		request.setAttribute("listPost",list);
		request.setAttribute("listCategory",listCategory);
		request.getRequestDispatcher("/Home.jsp").forward(request, response);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}
}
