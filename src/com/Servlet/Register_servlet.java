package Servlet;

import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Dto.UserDTO;
import Jdbc.UserImpl;

/**
 * Servlet implementation class Register_servlet
 */
@WebServlet("/Register_servlet")
public class Register_servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Register_servlet() {
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
		response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("utf-8");
        String url = "";
        UserDTO user = new UserDTO();		//new user
        
        String mauPass ="^(?=(.*[0-9]))((?=.*[A-Z])(?=.*[a-z])).{8,32}$";
        String maudienthoai = "^[0]([0-9]{9,10})$";
        Pattern pattern = Pattern.compile(mauPass);
        
        String pass = request.getParameter("password");
        String phone = request.getParameter("phone");
        String repass = request.getParameter("re_password");
        String username = request.getParameter("username");
        String name = request.getParameter("fullname");
        Matcher matcherpass = Pattern.compile(mauPass).matcher(pass);
        Matcher matcherdienthoai = Pattern.compile(maudienthoai).matcher(phone);
        

        UserImpl usersDAO = new UserImpl();		//Open implement ->SQL
        
        if (	  usersDAO.kiemtra(username)
                | pass.length() < 8
                | !repass.equals(pass)
                | username.length() < 5 | username.length() > 32
                | !matcherpass.matches()
                | !matcherdienthoai.matches()
                ) 
        	{

        	if (pass.length() < 8) {
                request.setAttribute("error4", "Độ dài dật khẩu phải lớn hơn 8 ký tự");
            }
            
            
            if ( username.length() < 5 | username.length() > 32) {
                request.setAttribute("error6", "Tên đăng nhập phải lớn hơn 5 và ít hơn 32 ký tự");
            }
            
            if (!matcherpass.matches()) {
                request.setAttribute("error4", "Mật khẩu chứa ít nhất 1 ký tự hoa,1 ký tự thường,và 1 số");
                
            }else if (!repass.equals(pass)) {
                request.setAttribute("error2", "Mật khẩu nhập lại bị sai");
            }
            
            
            
            if (!matcherdienthoai.matches()) {
                request.setAttribute("error5", "Số điện thoại phải gồm 10 hoặc 11 số và bắt đầu từ số 0");
            }

        	if (usersDAO.kiemtra(username)) {
                request.setAttribute("error6", "Tên đăng nhập đã tồn tại!, vui lòng sử dụng tên đăng nhập Khác");
            }
            
            request.setAttribute("phone", phone);
            request.setAttribute("username", username);
            request.setAttribute("fullname", name);
            url = "/Dang_ky.jsp";
            RequestDispatcher rd = getServletContext().getRequestDispatcher(url);
            rd.forward(request, response);
        } else {
            user = new UserDTO(name,username,pass,phone);
            usersDAO.register(user);
			HttpSession session = request.getSession();
			session.setAttribute("Login_user", user);
			response.sendRedirect(request.getContextPath() +"/Post_servlet");
        }
   }
}
