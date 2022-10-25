package Jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import Dto.PhuongxaDTO;


public class PhuongxaImpl {
	Connection conn = null;
	PreparedStatement ps = null;
	ResultSet rs = null;
	
	
	//getPhuongxa by Districtid
	public List<PhuongxaDTO> getPhuongxaByDistrictId(String district_id) throws SQLException {

		List<PhuongxaDTO> list = new ArrayList<>();
		String query = "select * from phuongxa where district_id = ?";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, district_id);
			rs = ps.executeQuery();
			while (rs.next()) {
				list.add(new PhuongxaDTO(
						rs.getString("id"),
						rs.getString("name"),
						rs.getString("district_id")));
			}
		} catch (SQLException e) {
			System.out.println("Loi " + e.getMessage());
		}
		return list;
	}
	
	//get phuongxa by id
	public String getPhuongXaBy(String id) throws SQLException {
		String phuongxa = "";
		String query = "select name from phuongxa where id = ?";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, id);
			rs = ps.executeQuery();
			while (rs.next()) {
				phuongxa = rs.getString("name");
			}
		} catch (SQLException e) {
			System.out.println("Loi " + e.getMessage());
		}
		return phuongxa;
	}
	
//	public static void main(String[] args) {
//	PhuongxaImpl dao = new PhuongxaImpl();
//								
//	try {
//		List<PhuongxaDTO> list = dao.getPhuongxaByDistrictId("2");
//		for (PhuongxaDTO o : list) {
//			System.out.println(o);
//		}
//	} catch (SQLException e) {
//		e.printStackTrace();
//	}
//	}
	public static void main(String[] args) {
	PhuongxaImpl dao = new PhuongxaImpl();
								
	try {
		System.out.println(dao.getPhuongXaBy("1"));
	} catch (SQLException e) {
		e.printStackTrace();
	}
	}
}