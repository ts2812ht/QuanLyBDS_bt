package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import Dto.PhuongxaDTO;
import Jdbc.PhuongxaImpl;

/**
 * Servlet implementation class Phuongxa_ajax_servlet
 */
@WebServlet("/Phuongxa_ajax_servlet")
public class Phuongxa_ajax_servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Phuongxa_ajax_servlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;chartset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		
		try (PrintWriter out = response.getWriter()) {
			
			
			PhuongxaImpl dao = new PhuongxaImpl();
			String did = request.getParameter("id");
			try {
				List <PhuongxaDTO> list = dao.getPhuongxaByDistrictId(did);
				Gson json = new Gson();
				String PhuongxaList = json.toJson(list);
				response.getWriter().write(PhuongxaList);
			} catch (SQLException e) {
				e.printStackTrace();
			}

        }
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
