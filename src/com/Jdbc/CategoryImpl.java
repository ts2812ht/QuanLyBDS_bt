package Jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import Dto.CategoryDTO;

public class CategoryImpl {
	Connection conn = null;
	PreparedStatement ps = null;
	ResultSet rs = null;
	
	public List<CategoryDTO> getAllCategory() throws SQLException {

		List<CategoryDTO> list = new ArrayList<>();
		String query = "select * from categories";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			rs = ps.executeQuery();
			while (rs.next()) {
				list.add(new CategoryDTO(
						rs.getString("id"),
						rs.getString("name")));
			}
		} catch (SQLException e) {
			System.out.println("Loi " + e.getMessage());
		}
		return list;
	}
	
//	public static void main(String[] args) {
//	CategoryImpl dao = new CategoryImpl();
//								
//	try {
//		List<CategoryDTO> list = dao.getAllCategory();
//		for (CategoryDTO o : list) {
//			System.out.println(o);
//		}
//	} catch (SQLException e) {
//		e.printStackTrace();
//	}
//	}
}