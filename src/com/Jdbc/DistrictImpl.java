package Jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import Dto.DistrictDTO;
import Dto.PostDTO;


public class DistrictImpl {
	Connection conn = null;
	PreparedStatement ps = null;
	ResultSet rs = null;
	
	public List<DistrictDTO> getAllDistrict() throws SQLException {

		List<DistrictDTO> list = new ArrayList<>();
		String query = "select * from districts";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			rs = ps.executeQuery();
			while (rs.next()) {
				list.add(new DistrictDTO(
						rs.getString("id"),
						rs.getString("name")));
			}
		} catch (SQLException e) {
			System.out.println("Loi " + e.getMessage());
		}
		return list;
	}
	
	//get districs by id
	public String getDistrictById(String id) throws SQLException {
		String district = "";
		String query = "select name from districts where id = ?";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, id);
			rs = ps.executeQuery();
			while (rs.next()) {
				district = rs.getString("name");
			}
		} catch (SQLException e) {
			System.out.println("Loi " + e.getMessage());
		}
		return district;
	}
	
//	public static void main(String[] args) {
//	DistrictImpl dao = new DistrictImpl();
//								
//	try {
//		List<DistrictDTO> list = dao.getAllDistrict();
//		for (DistrictDTO o : list) {
//			System.out.println(o);
//		}
//	} catch (SQLException e) {
//		e.printStackTrace();
//	}
//	}
//	public static void main(String[] args) {
//	DistrictImpl dao = new DistrictImpl();
//								
//	try {
//		System.out.println(dao.getDistrictById("1"));
//	} catch (SQLException e) {
//		e.printStackTrace();
//	}
//	}
}