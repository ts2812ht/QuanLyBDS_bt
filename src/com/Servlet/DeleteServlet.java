package Servlet;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Jdbc.UserImpl;

import java.io.IOException;

@WebServlet(name = "DeleteServlet", value = "/delete")
public class DeleteServlet extends HttpServlet {

protected void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException {
    int id = Integer.parseInt(request.getParameter("id"));
    UserImpl dao = new UserImpl();
    dao.deleteKH(id);
    response.sendRedirect("trangchu");
}

}
