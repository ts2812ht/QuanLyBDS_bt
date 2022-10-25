package Servlet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Dto.UserDTO;
import Jdbc.UserImpl;

import java.io.IOException;
import java.util.List;

@WebServlet(name = "trangchu", value = "/trangchu")
public class DanhSachKhachHangServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        UserImpl dao = new UserImpl();
        List<UserDTO> list = dao.getall();
        request.setAttribute("data", list);
        RequestDispatcher dispatcher = request.getRequestDispatcher("trangchu.jsp");
        dispatcher.forward(request, response);
    }
}
