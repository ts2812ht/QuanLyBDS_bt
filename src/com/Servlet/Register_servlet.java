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
                request.setAttribute("error4", "????? d??i d???t kh???u ph???i l???n h??n 8 k?? t???");
            }
            
            
            if ( username.length() < 5 | username.length() > 32) {
                request.setAttribute("error6", "T??n ????ng nh???p ph???i l???n h??n 5 v?? ??t h??n 32 k?? t???");
            }
            
            if (!matcherpass.matches()) {
                request.setAttribute("error4", "M???t kh???u ch???a ??t nh???t 1 k?? t??? hoa,1 k?? t??? th?????ng,v?? 1 s???");
                
            }else if (!repass.equals(pass)) {
                request.setAttribute("error2", "M???t kh???u nh???p l???i b??? sai");
            }
            
            
            
            if (!matcherdienthoai.matches()) {
                request.setAttribute("error5", "S??? ??i???n tho???i ph???i g???m 10 ho???c 11 s??? v?? b???t ?????u t??? s??? 0");
            }

        	if (usersDAO.kiemtra(username)) {
                request.setAttribute("error6", "T??n ????ng nh???p ???? t???n t???i!, vui l??ng s??? d???ng t??n ????ng nh???p Kh??c");
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
