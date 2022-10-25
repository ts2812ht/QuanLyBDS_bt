package Jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import Dto.CategoryDTO;
import Dto.PostDTO;
import Dto.UserDTO;


public class UserImpl {
	Connection conn = null;
	PreparedStatement ps = null;
	ResultSet rs = null;
	
	
	public UserDTO getUserLogin(String username,String password){

		UserDTO user = new UserDTO();
		String query = "select * from users where username = ? and password = ?";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, username);
			ps.setString(2, password);
			rs = ps.executeQuery();
			while (rs.next()) {
				user = 	new UserDTO(rs.getInt("id"),
						rs.getString("name"),
						rs.getString("username"),
						rs.getString("email"),
						rs.getString("password"),
						rs.getInt("type"),
						rs.getString("phone"),
						rs.getString("avatar"),
						rs.getInt("tinhtrang"));
			}
		} catch (Exception e) {
			// TODO: handle exception
			
		}
		return user;
	}
	
	public UserDTO getUserbyId(String id){

		UserDTO user = new UserDTO();
		String query = "select * from users where id = ?";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, id);
			rs = ps.executeQuery();
			while (rs.next()) {
				user = 	new UserDTO(rs.getInt("id"),
						rs.getString("name"),
						rs.getString("username"),
						rs.getString("email"),
						rs.getString("password"),
						rs.getInt("type"),
						rs.getString("phone"),
						rs.getString("avatar"),
						rs.getInt("tinhtrang"));
			}
		} catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return user;
	}
	
	
	//get name by id
	public String getNameUserbyId(String id){

		String Name_user = null;
		String query = "select name from users where id = ?";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, id);
			rs = ps.executeQuery();
			while (rs.next()) {
				Name_user = rs.getString("name");
			}
		} catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return Name_user;
	}
	
	//get avatar by id
	public String getImageUserbyId(String id){

		String Avatar_user = null;
		String query = "select avatar from users where id = ?";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, id);
			rs = ps.executeQuery();
			while (rs.next()) {
				Avatar_user = rs.getString("avatar");
			}
		} catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return Avatar_user;
	}
//	private int id;
//	private String name;
//	private String username;
//	private String email;
//	private String password;
//	private int type;
//	private String phone;
//	private String avatar;
//	private int tinhtrang;


	public boolean kiemtraemail(String email) {
		String query = "select * from users where email ='" + email + "' ";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			rs = ps.executeQuery();
			while (rs.next()) {
				return true;
			}
		} catch (Exception e) {
			// TODO: handle exception
		}

        return false;
	}


	public boolean kiemtra(String username) {
        String query = "select * from users where username='" + username + "' ";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			rs = ps.executeQuery();
			while (rs.next()) {
				return true;
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
        return false;
	}
	
	
	public void register(UserDTO user) {
        String query = "INSERT INTO users (name, username,email,password,phone) VALUES\r\n"
        		+ "(N'" + user.getName() + "', ?,?,?,?)";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, user.getUsername());
			ps.setString(2, "");
			ps.setString(3, user.getPassword());
			ps.setString(4, user.getPhone());
			ps.executeUpdate();
		} catch (SQLException ex) {
			System.out.println("Loi " + ex.getMessage());
		}
	}
	
	//sửa user by Id
	public void updateUser(int id,String name,String email, String phone,String image) {
        String query = "UPDATE users\r\n"
        		+ "SET name = N'"+ name +"', email= ?, phone =?,avatar = ?\r\n"
        		+ "WHERE id = ?;";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, email);
			ps.setString(2, phone);
			ps.setString(3, image);
			ps.setInt(4, id);
			ps.executeUpdate();
		} catch (SQLException ex) {
			System.out.println("Loi " + ex.getMessage());
		}
	}
	
	//Thay đổi mật khẩu
	public void updatePassword(String id,String password) {
        String query = "UPDATE users\r\n"
        		+ "SET password = ?\r\n"
        		+ "WHERE id = ?;";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, password);
			ps.setString(2, id);
			ps.executeUpdate();
		} catch (SQLException ex) {
			System.out.println("Loi " + ex.getMessage());
		}
	}

	public List<UserDTO> getall() {
		List<UserDTO> list = new ArrayList<>();
		String query = "select * from users";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			rs = ps.executeQuery();
			while (rs.next()) {
				list.add(new UserDTO(
						rs.getInt("id"),
						rs.getString("name"),
						rs.getString("username"), 
						rs.getString("email"), 
						rs.getString("password"), 
						rs.getInt("type"), 
						rs.getString("phone"), 
						rs.getString("avatar"), 
						rs.getInt("tinhtrang")));
			}
		} catch (SQLException e) {
			System.out.println("Loi " + e.getMessage());
		}
		return list;
	}
	
	public boolean updateKhachHangWithoutImage(UserDTO khachHang) {
        //matHangID, matHangCode , name,
        //retailPrice,
        // wholesalePrice, description,
        // categoryID, attribute, calculateUnit, unit, weight
        boolean check = true;
        String query = "UPDATE users set name = ?, email = ?, phone = ?, password = ? where id = ?";
        try {
        	conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
            ps.setString(1, khachHang.getName());
            ps.setString(2, khachHang.getEmail());
            ps.setString(3, khachHang.getPhone());
            ps.setString(4, khachHang.getPassword());
            ps.setInt(5, khachHang.getId());
            ps.executeUpdate();
            System.out.println("Done update");
        } catch (SQLException e) {
            e.printStackTrace();
            check = false;
        }
        return check;
    }
	
	public void deleteKH(int id) {
        String query = "UPDATE users set tinhtrang = 0 where id = ?";
        try {
        	conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
            ps.setInt(1, id);
            ps.executeUpdate();
            System.out.println("Done update");
        } catch (SQLException e) {
            e.printStackTrace();
        }
		
	}

	public void activeKH(int id) {
		String query = "UPDATE users set tinhtrang = 1 where id = ?";
        try {
        	conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
            ps.setInt(1, id);
            ps.executeUpdate();
            System.out.println("Done update");
        } catch (SQLException e) {
            e.printStackTrace();
        }
	}

	public List<UserDTO> search(String txtSearch) {
		List<UserDTO> list = new ArrayList<>();
		String query = "select * from users where name LIKE N'%" + txtSearch + "%'";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			rs = ps.executeQuery();
			while (rs.next()) {
				list.add(new UserDTO(rs.getInt("id"),
						rs.getString("name"),
						rs.getString("username"),
						rs.getString("email"),
						rs.getString("password"),
						rs.getInt("type"),
						rs.getString("phone"),
						rs.getString("avatar"),
						rs.getInt("tinhtrang")));
			}
		} catch (Exception e) {
			// TODO: handle exception
			
		}
		return list;
	}

	public UserDTO checkLoginAdmin(String u, String p) {
		UserDTO user = new UserDTO();
		String query = "select * from users where username = ? and password = ? and type = 1";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, u);
			ps.setString(2, p);
			rs = ps.executeQuery();
			while (rs.next()) {
				user = 	new UserDTO(rs.getInt("id"),
						rs.getString("name"),
						rs.getString("username"),
						rs.getString("email"),
						rs.getString("password"),
						rs.getInt("type"),
						rs.getString("phone"),
						rs.getString("avatar"),
						rs.getInt("tinhtrang"));
			}
		} catch (Exception e) {
			// TODO: handle exception
			
		}
		return user;
	}

	
	
	
//	public static void main(String[] args) {
//	UserImpl dao = new UserImpl();
//	List<UserDTO> list = dao.search("My");
//	for (UserDTO o : list) {
//		System.out.println(o);
//		}
//	}
	
	public static void main(String[] args) {
	UserImpl dao = new UserImpl();
	UserDTO user = dao.checkLoginAdmin("t", "1");
	System.out.println(user);
	}
	
//	public static void main(String[] args) {
//	UserImpl dao = new UserImpl();
//	dao.deleteKH(11);
//	}
//	
//	public static void main(String[] args) {
//	UserImpl dao = new UserImpl();
//	UserDTO user = new UserDTO("Wcaca","ts1","asd","1","asd","");
//	dao.register(user);
//	}
	
//	public static void main(String[] args) {
//	UserImpl dao = new UserImpl();
//	UserDTO user = new UserDTO(11,"Ts1","asd@gmail.com","1","012345");
//	System.out.println(dao.updateKhachHangWithoutImage(user));
//	}


	
//	public static void main(String[] args) {
//	UserImpl dao = new UserImpl();
//	List<UserDTO> list = dao.getall();
//	for (UserDTO o : list) {
//		System.out.println(o);
//	}
//}
	
}
