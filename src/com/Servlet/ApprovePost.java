package Servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Jdbc.PostImpl;

import java.io.IOException;

@WebServlet(name = "AppovePostServlet", value = "/approvePost")
public class ApprovePost extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        int id = Integer.parseInt(request.getParameter("id"));
        PostImpl dao = new PostImpl();
        dao.ApprovePost(id);
        response.sendRedirect("quan-ly-post");
    }
}