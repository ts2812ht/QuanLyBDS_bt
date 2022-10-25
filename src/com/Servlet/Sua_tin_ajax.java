package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import Dto.PostDTO;
import Jdbc.PostImpl;

/**
 * Servlet implementation class Sua_tin_servlet
 */
@WebServlet("/Sua_tin_ajax")
public class Sua_tin_ajax extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Sua_tin_ajax() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;chartset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		
		try (PrintWriter out = response.getWriter()) {
			
			
			PostImpl dao = new PostImpl();
			String Pid = request.getParameter("Pid");
			try {
				PostDTO post = dao.getPostById(Pid);
				List<PostDTO> list = new ArrayList<>();
				list.add(post);
				Gson json = new Gson();
				response.getWriter().write(json.toJson(list));
			} catch (SQLException e) {
				e.printStackTrace();
			}
        }
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
