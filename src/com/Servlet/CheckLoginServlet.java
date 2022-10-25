package Servlet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Dto.UserDTO;
import Jdbc.UserImpl;

import java.io.IOException;
import java.util.List;

@WebServlet(name = "CheckLoginServlet", value = "/CheckLoginServlet")
public class CheckLoginServlet extends HttpServlet {
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.sendRedirect("index.jsp");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String u = request.getParameter("user");
        String p = request.getParameter("pass");
        UserImpl userDAO = new UserImpl();
        UserDTO user = userDAO.checkLoginAdmin(u, p);
        if (user == null) {
            request.setAttribute("error", "Nhập sai tài khoản hoặc mật khẩu");
            request.getRequestDispatcher("index.jsp").forward(request, response);
        } else {
            HttpSession sesion = request.getSession();
            sesion.setAttribute("account", user);
            UserImpl dao = new UserImpl();
            List<UserDTO> list = dao.getall();
            request.setAttribute("data", list);
            RequestDispatcher dispatcher = request.getRequestDispatcher("trangchu.jsp");
            dispatcher.forward(request, response);
        }
    }
}
