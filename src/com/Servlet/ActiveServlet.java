package Servlet;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Jdbc.UserImpl;

import java.io.IOException;

@WebServlet(name = "ActiveServlet", value = "/active")
public class ActiveServlet extends HttpServlet {

protected void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException {
    int id = Integer.parseInt(request.getParameter("id"));
    UserImpl dao = new UserImpl();
    dao.activeKH(id);
    response.sendRedirect("trangchu");
}
}
