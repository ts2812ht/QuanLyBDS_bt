package Servlet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import Dto.UserDTO;
import Jdbc.UserImpl;

import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.sql.SQLException;
import java.util.Base64;
import java.util.List;


@WebServlet(name = "suaKhachhangServlet", value = "/sua-khach-hang")
@MultipartConfig(maxFileSize = 16177216)//1.5mb
public class SuaKhachHangServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        showEditForm(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            updateKhachHang(request, response);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    private void showEditForm(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String url = "";
        url = "/themkhachhang/suakhachhang.jsp";
        UserImpl userDAO = new UserImpl();
        String id = request.getParameter("idEdit");
        UserDTO khachHang = userDAO.getUserbyId(id);

        // gan vao request
        request.setAttribute("khachHang", khachHang);

        ServletContext sc = request.getServletContext();
        String htmlMessage = "";
        sc.setAttribute("messages", htmlMessage);

        // forward request and response to the view
        RequestDispatcher dispatcher
                = getServletContext().getRequestDispatcher(url);
        dispatcher.forward(request, response);

    }

    private static byte[] getByteArray(InputStream is) throws Exception {
        ByteArrayOutputStream b = new ByteArrayOutputStream();
        BufferedOutputStream os = new BufferedOutputStream(b);
        while (true) {
            int i = is.read();
            if (i == -1) break;
            os.write(i);
        }
        os.flush();
        os.close();
        return b.toByteArray();
    }


    public void updateKhachHang(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, IOException, ServletException {
        int id = Integer.parseInt(request.getParameter("idKhachHang"));
        String name = toUTF8String(request.getParameter("customername"));
        String email = toUTF8String(request.getParameter("customeremail"));
        String phone = toUTF8String(request.getParameter("customerphone"));
        String password = toUTF8String(request.getParameter("customerpassword"));

        UserDTO khachHang;
        boolean checkdao = true;
        khachHang = buildKhachHangWithoutImage(id, name, email, phone, password);
        checkdao = daoUpdateWithoutImage(khachHang);

        if (checkdao) {
            String htmlMessage = "Sửa thành công";
            String check = "1";

            ServletContext sc = request.getServletContext();
            sc.setAttribute("messages", htmlMessage);
            sc.setAttribute("check", check);
            response.sendRedirect(request.getContextPath() + "/sua-khach-hang?idEdit=" + id);
        } else {
            String htmlMessage = "Mã khách hàng đã tồn tại";
            String check = "1";

            ServletContext sc = request.getServletContext();
            sc.setAttribute("messages", htmlMessage);
            sc.setAttribute("check", check);
            response.sendRedirect(request.getContextPath() + "/sua-khach-hang?idEdit=" + id);
        }


    }


    public UserDTO buildKhachHangWithoutImage(int id, String name, String email,
                                                String phone, String password) {
    	UserDTO khachHang = new UserDTO(
                 id,
                 name,
                 email,
                 password,
                 phone);
        return khachHang;
    }


    public boolean daoUpdateWithoutImage(UserDTO khachhang) {
        UserImpl khachHangDAO = new UserImpl();
        boolean check = khachHangDAO.updateKhachHangWithoutImage(khachhang);
        return check;
    }

    public String toUTF8String(String string) {
        String result = "";
        byte[] bytes = string.getBytes(StandardCharsets.ISO_8859_1);
        result = new String(bytes, StandardCharsets.UTF_8);
        return result;
    }
}
