package Servlet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Dto.PostDTO;
import Jdbc.PostImpl;

import java.io.IOException;
import java.util.List;

@WebServlet(name = "QuanlyPost", value = "/quan-ly-post")
public class DanhSachPostServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PostImpl postDAO = new PostImpl();
        List<PostDTO> list = postDAO.getAllPost2();
        request.setAttribute("data1", list);
        RequestDispatcher dispatcher = request.getRequestDispatcher("thempost/quanlypost.jsp");
        dispatcher.forward(request, response);
    }
}
