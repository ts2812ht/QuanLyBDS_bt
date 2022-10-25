package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import Dto.PostDTO;
import Dto.UserDTO;
import Jdbc.PostImpl;

/**
 * Servlet implementation class Quan_ly_tin_servlet
 */
@WebServlet("/Quan_ly_tin_servlet")
public class Quan_ly_tin_servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Quan_ly_tin_servlet() {
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
			HttpSession session = request.getSession();
			UserDTO C_user = (UserDTO) session.getAttribute("Login_user");  
			PostImpl dao = new PostImpl();
			try {
				List <PostDTO> list = dao.getAllPostbyUserId(C_user.getId());
				Gson json = new Gson();
				String DistrictList = json.toJson(list);
				response.getWriter().write(DistrictList);
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
