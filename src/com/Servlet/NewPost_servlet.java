package Servlet;

import java.io.File;
import java.io.IOException;
import java.sql.SQLException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;

import Dto.PostDTO;
import Dto.UserDTO;
import Jdbc.PostImpl;
import Jdbc.UserImpl;;

/**
 * Servlet implementation class NewPost_servlet
 */
@WebServlet("/NewPost_servlet")
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 4, // 4MB
					maxFileSize = 1024 * 1024 * 10, // 10MB
					maxRequestSize = 1024 * 1024 * 50) // 50MB
public class NewPost_servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public NewPost_servlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("utf-8");
        String url = "/Post_servlet";
        
        String district_id = request.getParameter("district_id");
        String phuongxa = request.getParameter("phuongxa");
        String address = request.getParameter("dia_chi");
        String category = request.getParameter("loai_chuyen_muc");
        String title = request.getParameter("post_title");
        String description = request.getParameter("description");
        String user_id = request.getParameter("user_id");
        String price = request.getParameter("price");
        String area = request.getParameter("area");
        String phone = request.getParameter("phone");
        Part part = request.getPart("image");
//        "ts1",		//title
//		"asd",		//description
//		20000,		//price
//		20,			//area
//		"asd",		//address
//		"images/test1.jpg",			//images
//		"1",		//user_id
//		"1",		//category_id
//		"",			//district_id
//		"",			//phuongxa_id
//		"0123456");	//phone


    	PostImpl dao = new PostImpl();
        try {
        	PostDTO post = new PostDTO(
        						title,		//title
        						description,		//description
        						Integer.parseInt(price),		//price
        						Integer.parseInt(area),			//area
        						address,		//address
        						"",			//images
        						user_id,		//user_id
        						category,		//category_id
        						district_id,			//district_id
        						phuongxa,			//phuongxa_id
        						phone);	//phone
    		dao.NewPost(post);
    	
 
		String post_id = null;
		//t???o th?? m???c l??u cho post
		try {
			post_id = dao.getLastPostIdByUserId(user_id);//l???y id post v???a t???o ????? th??m h??nh ???nh
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		String idForder = "id"+ post_id;
		//???????ng d???n t???i th?? m???c c???n l??u
		String fullSavePath = "D:\\Pro\\JavaOne\\QuanLyBDS_bt\\WebContent\\uploads\\posts\\" + idForder;
		// T???o th?? m???c n???u n?? kh??ng t???n t???i.
		File fileSaveDir = new File(fullSavePath);
		if (!fileSaveDir.exists()) {
           fileSaveDir.mkdir();
		}
		
		String post_image = null;
		
//		for (Part part : request.getParts()) {
//               String fileName = extractFileName(part);
//               if (fileName != null && fileName.length() > 0) {
//                   String filePath = fullSavePath + File.separator + fileName;
//                   part.write(filePath);
//                   post_image = "uploads/posts/" + idForder + "/" + fileName;
//               }
//           }
		String fileName = extractFileName(part);
		if (fileName != null && fileName.length() > 0) {
          String filePath = fullSavePath + "\\" + fileName;
          part.write(filePath);
          post_image = "uploads/posts/" + idForder + "/" + fileName;
		}
		
		if (post_image == null) {
			post_image = "images/test1.jpg";
		}
    	
        try {
			dao.UpdateImageById(post_image, post_id);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        } catch (SQLException e) {
    		request.setAttribute("error","Nh???p thi???u th??ng tin, vui l??ng nh???p l???i");
    	}
		request.setAttribute("success","????ng tin th??nh c??ng, xem th??ng tin <a href=\"/Quan_ly_tin_servlet\">Qu???n L??</a>");
		request.getRequestDispatcher("/Dang_tin_moi.jsp").forward(request, response);
        
   }
	private String extractFileName(Part part) {
	       // form-data; name="file"; filename="C:\file1.zip"
	       // form-data; name="file"; filename="C:\Note\file2.zip"
	       String contentDisp = part.getHeader("content-disposition");
	       String[] items = contentDisp.split(";");
	       for (String s : items) {
	           if (s.trim().startsWith("filename")) {
	               // C:\file1.zip
	               // C:\Note\file2.zip
	               String clientFileName = s.substring(s.indexOf("=") + 2, s.length() - 1);
	               clientFileName = clientFileName.replace("\\", "/");
	               int i = clientFileName.lastIndexOf('/');
	               // file1.zip
	               // file2.zip
	               return clientFileName.substring(i + 1);
	           }
	       }
	       return null;
	   }

}
