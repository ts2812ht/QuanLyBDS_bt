package Servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Dto.PostDTO;
import Jdbc.PostImpl;

import java.io.IOException;
import java.util.List;

@WebServlet(name="SearchPostServlet", urlPatterns ="/searchPost")
public class SearchPostServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String txtSearch = request.getParameter("txt");
        PostImpl p = new PostImpl();
        List<PostDTO> list = p.search(txtSearch);
        request.setAttribute("data1",list);
        request.setAttribute("txtSearch",txtSearch);
        request.getRequestDispatcher("thempost/quanlypost.jsp").forward(request,response);
    }

}