package Servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Dto.UserDTO;
import Jdbc.UserImpl;

/**
 * Servlet implementation class Login_servlet
 */
@WebServlet("/Login")
public class Login_servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login_servlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;chartset=UTF-8");
		String username, password,facebook;
		username = request.getParameter("username");
		password = request.getParameter("password");
		String userId = request.getParameter("userId");

		UserImpl dao = new UserImpl();
		UserDTO user = dao.getUserLogin(username,password);
		
		if (userId == null) {
			if (user.getUsername() == null) {
				request.setAttribute("error","Sai tên đăng nhập hoặc mật khẩu");
//				response.sendRedirect(request.getContextPath() + "/LoginForm.jsp");
				request.getRequestDispatcher("/Dang_nhap.jsp").forward(request, response);
			} else {
				HttpSession session = request.getSession();
				session.setAttribute("Login_user", user);
				response.sendRedirect(request.getContextPath() +"/Post_servlet");
			}
		} else {
			user = dao.getUserLogin(userId,userId);
			if (user.getUsername() == null) {
				String name = request.getParameter("name");
				user = new UserDTO("",userId,userId,"");
	            dao.register(user);
			}
			HttpSession session = request.getSession();
			session.setAttribute("Login_user", user);
			response.sendRedirect(request.getContextPath() +"/Post_servlet");
		}
	}

}
