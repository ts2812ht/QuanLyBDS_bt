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

import Dto.DistrictDTO;
import Jdbc.DistrictImpl;

/**
 * Servlet implementation class District_ajax_servlet
 */
@WebServlet("/District_ajax_servlet")
public class District_ajax_servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public District_ajax_servlet() {
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
			
			
			DistrictImpl dao = new DistrictImpl();
			try {
				List <DistrictDTO> list = dao.getAllDistrict();
				Gson json = new Gson();
				String DistrictList = json.toJson(list);
				response.getWriter().write(DistrictList);
			} catch (SQLException e) {
				e.printStackTrace();
			}
//            CountryStateDao csd = new CountryStateDao(DBCon.getCon());
//            
//            String op = request.getParameter("operation");
//            
//            if (op.equals("country")) {
//                List<Country> clist = csd.getAllCountry();
//                Gson json = new Gson();
//                String countryList = json.toJson(clist);
//                response.setContentType("text/html");
//                response.getWriter().write(countryList);
//            }
//
//            if (op.equals("state")) {
//                int id = Integer.parseInt(request.getParameter("id"));
//                List<State> slist = csd.getStateByCountryId(id);
//                Gson json = new Gson();
//                String countryList = json.toJson(slist);
//                response.setContentType("text/html");
//                response.getWriter().write(countryList);
//            }
//
//            if (op.equals("city")) {
//                int id = Integer.parseInt(request.getParameter("id"));
//                List<City> citylist = csd.getCityByStateId(id);
//                Gson json = new Gson();
//                String countryList = json.toJson(citylist);
//                response.setContentType("text/html");
//                response.getWriter().write(countryList);
//            }
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
