package Servlet;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Dto.UserDTO;
import Jdbc.UserImpl;

import java.io.IOException;
import java.util.List;

@WebServlet(name="SearchServlet", urlPatterns ="/search")
public class SearchKHServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String txtSearch = request.getParameter("txt");
        UserImpl mh = new UserImpl();
        List<UserDTO> list = mh.search(txtSearch);
        request.setAttribute("data",list);
        request.getRequestDispatcher("trangchu.jsp").forward(request,response);
    }

}