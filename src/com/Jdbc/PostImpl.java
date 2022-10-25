package Jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import Dto.PostDTO;
import Dto.UserDTO;

public class PostImpl {
	
	Connection conn = null;
	PreparedStatement ps = null;
	ResultSet rs = null;
	
	//Hiển thị tất cả Post
	public List<PostDTO> getAllPost(){

		List<PostDTO> list = new ArrayList<>();
		String query = "select * from post order by create_at desc";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			rs = ps.executeQuery();
			while (rs.next()) {
				PostDTO a_post = new PostDTO(
						rs.getInt("id"),
						rs.getString("title"),
						rs.getString("description"),
						rs.getInt("price"),
						rs.getInt("area"),
						rs.getInt("count_view"),
						rs.getString("address"),
						rs.getString("images"),
						rs.getString("user_id"),
						rs.getString("category_id"),
						rs.getString("district_id"),
						rs.getString("phuongxa_id"),
						rs.getString("approve"),
						rs.getString("phone"),
						rs.getString("create_at"));
				DistrictImpl DistrictDao = new DistrictImpl();
				PhuongxaImpl PhuongxaDao = new PhuongxaImpl();
				if (a_post.getPhuongxa_id() == null) {
					a_post.setLocate(DistrictDao.getDistrictById(a_post.getDistrict_id()));
					
				}else {
					a_post.setLocate(PhuongxaDao.getPhuongXaBy(a_post.getPhuongxa_id())+", "+DistrictDao.getDistrictById(a_post.getDistrict_id()));
				}
				list.add(a_post);
			}
//			this.id = id;
//			this.title = title;
//			this.description = description;
//			this.price = price;
//			this.area = area;
//			this.count_view = count_view;
//			this.address = address;
//			this.images = images;
//			this.user_id = user_id;
//			this.category_id = category_id;
//			this.district_id = district_id;
//			this.phuongxa_id = phuongxa_id;
//			this.approve = approve;
//			this.phone = phone;
//			this.create_at = create_at;
		} catch (SQLException e) {
			System.out.println("Loi " + e.getMessage());
		}
		return list;
	}
	
	//Hiển thị tất cả Post
	public List<PostDTO> getAllPost2(){

		List<PostDTO> list = new ArrayList<>();
		String query = "select * from post";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			rs = ps.executeQuery();
			while (rs.next()) {
				PostDTO a_post = new PostDTO(
						rs.getInt("id"),
						rs.getString("title"),
						rs.getString("description"),
						rs.getInt("price"),
						rs.getInt("area"),
						rs.getInt("count_view"),
						rs.getString("address"),
						rs.getString("images"),
						rs.getString("user_id"),
						rs.getString("category_id"),
						rs.getString("district_id"),
						rs.getString("phuongxa_id"),
						rs.getString("approve"),
						rs.getString("phone"),
						getDate(rs.getString("create_at")));
				list.add(a_post);
			}
//			this.id = id;
//			this.title = title;
//			this.description = description;
//			this.price = price;
//			this.area = area;
//			this.count_view = count_view;
//			this.address = address;
//			this.images = images;
//			this.user_id = user_id;
//			this.category_id = category_id;
//			this.district_id = district_id;
//			this.phuongxa_id = phuongxa_id;
//			this.approve = approve;
//			this.phone = phone;
//			this.create_at = create_at;
		} catch (SQLException e) {
			System.out.println("Loi " + e.getMessage());
		}
		return list;
	}
	
	//Hiển thị theo Category
	public List<PostDTO> getAllPostByCategoryId(String cid) throws SQLException {


		List<PostDTO> list = new ArrayList<>();
		String query = "select * from post where category_id = ? order by create_at desc";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, cid);
			rs = ps.executeQuery();
			while (rs.next()) {
				list.add(new PostDTO(
						rs.getInt("id"),
						rs.getString("title"),
						rs.getString("description"),
						rs.getInt("price"),
						rs.getInt("area"),
						rs.getInt("count_view"),
						rs.getString("address"),
						rs.getString("images"),
						rs.getString("user_id"),
						rs.getString("category_id"),
						rs.getString("district_id"),
						rs.getString("phuongxa_id"),
						rs.getString("approve"),
						rs.getString("phone"),
						rs.getString("create_at")));
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return list;
	}
//	this.id = id;
//	this.title = title;
//	this.description = description;
//	this.price = price;
//	this.area = area;
//	this.count_view = count_view;
//	this.address = address;
//	this.images = images;
//	this.user_id = user_id;
//	this.category_id = category_id;
//	this.district_id = district_id;
//	this.phuongxa_id = phuongxa_id;
//	this.approve = approve;
//	this.phone = phone;
//	this.create_at = create_at;
	
	
//	Chi tiết 1 bài đăng
	public PostDTO getPostById(String cid) throws SQLException{

		PostDTO post = new PostDTO();
		String query = "select * from post where id = ?";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, cid);
			rs = ps.executeQuery();
			while (rs.next()) {
				post = 	new PostDTO(
						rs.getInt("id"),
						rs.getString("title"),
						rs.getString("description"),
						rs.getInt("price"),
						rs.getInt("area"),
						rs.getInt("count_view"),
						rs.getString("address"),
						rs.getString("images"),
						rs.getString("user_id"),
						rs.getString("category_id"),
						rs.getString("district_id"),
						rs.getString("phuongxa_id"),
						rs.getString("approve"),
						rs.getString("phone"),
						rs.getString("create_at"));
				post.setUser_Detail();
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return post;
	}
	
	//Tìm kiếm bài đăng theo category/vị trí/giá/diện tích
	public List<PostDTO> searchPost(String Cate_id,String Dist_id,String PriceL,String PriceH,String AreaL,String AreaH){

		if (Cate_id != "") {
			Cate_id = " and category_id = " + Cate_id;
		} 
		
		if (Dist_id != "") {
			Dist_id =" and district_id = " + Dist_id;
		} 
		
		if (PriceL == "") {
			PriceL = "0";
		} 
		
		if (PriceH == "") {
			PriceH = "999999999999";
		} 
		
		if (AreaL == "") {
			AreaL = "0";
		} 
		
		if (AreaH == "") {
			AreaH = "9999999";
		} 
		
		
		List<PostDTO> list = new ArrayList<>();
		String query = "select * from post where  price >= ? and price <= ? and area >= ? and area <= ?" + Cate_id + Dist_id + " order by create_at desc";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, PriceL);
			ps.setString(2, PriceH);
			ps.setString(3, AreaL);
			ps.setString(4, AreaH);
			rs = ps.executeQuery();
			while (rs.next()) {
				list.add(new PostDTO(
						rs.getInt("id"),
						rs.getString("title"),
						rs.getString("description"),
						rs.getInt("price"),
						rs.getInt("area"),
						rs.getInt("count_view"),
						rs.getString("address"),
						rs.getString("images"),
						rs.getString("user_id"),
						rs.getString("category_id"),
						rs.getString("district_id"),
						rs.getString("phuongxa_id"),
						rs.getString("approve"),
						rs.getString("phone"),
						rs.getString("create_at")));

			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return list;
	}
	
	//lấy bài đăng theo userId
	public List<PostDTO> getAllPostbyUserId(int id) throws SQLException {
		List<PostDTO> list = new ArrayList<>();
		String query = "select * from post where user_id = ? order by create_at desc";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setInt(1, id);
			rs = ps.executeQuery();
			while (rs.next()) {
				list.add(new PostDTO(
						rs.getInt("id"),
						rs.getString("title"),
						rs.getString("description"),
						rs.getInt("price"),
						rs.getInt("area"),
						rs.getInt("count_view"),
						rs.getString("address"),
						rs.getString("images"),
						rs.getString("user_id"),
						rs.getString("category_id"),
						rs.getString("district_id"),
						rs.getString("phuongxa_id"),
						rs.getString("approve"),
						rs.getString("phone"),
//						rs.getString("create_at")));
						getDate(rs.getString("create_at"))));
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return list;
	}
	
//	LấyIdpost vua dang
	public String getLastPostIdByUserId(String Uid) throws SQLException{
		String id_post = null;
		String query = "SELECT TOP 1 id FROM post where user_id = ? order by create_at desc";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, Uid);
			rs = ps.executeQuery();
			while (rs.next()) {
				id_post = rs.getString("id");
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return id_post;
	}
	
//Them anh cho id_post
	public void UpdateImageById(String image, String Pid) throws SQLException{
		String query = "UPDATE post SET images = ? where id = ?";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, image);
			ps.setString(2, Pid);
			ps.executeQuery();

		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	//Tạo post mới
	public void NewPost(PostDTO post) throws SQLException  {
		String query = "INSERT INTO post (title , description, price, area,  address, images, \r\n"
				+ "					user_id, category_id, district_id,phuongxa_id, phone,approve) VALUES\r\n"
				+ "			(N'"+post.getTitle()+"', N'"+post.getDescription()+"',?,?,N'"+post.getAddress()+"',?,?,?,?,?,?,1)";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setInt(1, post.getPrice());
			ps.setInt(2, post.getArea());
			ps.setString(3, post.getImages());
			ps.setString(4, post.getUser_id());
			ps.setString(5, post.getCategory_id());
			ps.setString(6, post.getDistrict_id());
			ps.setString(7, post.getPhuongxa_id());
			ps.setString(8, post.getPhone());
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}
	
	//xoá bài đăng theo id
	public void Delete_Post(String id) throws SQLException  {
		String query = "DELETE FROM post WHERE id = ?";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, id);
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	
	public static String getDate(String date)  {
		 
		String last_date_date = null;
		try {
			last_date_date = new SimpleDateFormat("dd-MM-yyyy").format(new SimpleDateFormat("yyyy-MM-dd").parse(date));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return last_date_date;
	  }
	
	//Thêm view cho post
	//Tạo post mới
	public void AddView(String id) throws SQLException  {
		String query = "UPDATE post SET count_view = count_view + 1 where id = ?";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setString(1, id);
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}

	
	//UnapprovePost
	public void UnapprovePost(int id) {
		String query = "UPDATE post SET approve = 0 where id = ?";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setInt(1, id);
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}
	
	public void ApprovePost(int id) {
		String query = "UPDATE post SET approve = 1 where id = ?";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			ps.setInt(1, id);
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public List<PostDTO> search(String txtSearch) {
		List<PostDTO> list = new ArrayList<>();
		String query = "select * from post where title LIKE N'%" + txtSearch + "%'";
		try {
			conn = new Jdbc.DBUtil().getSqlConn();
			ps = conn.prepareStatement(query);
			rs = ps.executeQuery();
			while (rs.next()) {
				PostDTO a_post = new PostDTO(
						rs.getInt("id"),
						rs.getString("title"),
						rs.getString("description"),
						rs.getInt("price"),
						rs.getInt("area"),
						rs.getInt("count_view"),
						rs.getString("address"),
						rs.getString("images"),
						rs.getString("user_id"),
						rs.getString("category_id"),
						rs.getString("district_id"),
						rs.getString("phuongxa_id"),
						rs.getString("approve"),
						rs.getString("phone"),
						getDate(rs.getString("create_at")));
				list.add(a_post);
			}
		} catch (Exception e) {
			// TODO: handle exception
			
		}
		return list;
	}
	
//	public static void main(String[] args) {
//	PostImpl dao = new PostImpl();
//	dao.UnapprovePost(22);;
//	}
//	public static void main(String[] args) {
//		PostImpl dao = new PostImpl();
//		String o;
//		try {
//			o = dao.getLastPostIdByUserId("1");
//			System.out.println(o);
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//	
	public static void main(String[] args) {
		PostImpl dao = new PostImpl();
		List<PostDTO> list = dao.search("ts1");
		for (PostDTO o : list) {
			System.out.println(o);
		}
	}
//	public static void main(String[] args) {
//	PostImpl dao = new PostImpl();
//	try {
//		dao.Delete_Post("15");
//	} catch (SQLException e) {
//		// TODO Auto-generated catch block
//		e.printStackTrace();
//	}
//}
//	public static void main(String[] args) {
//	PostImpl dao = new PostImpl();
//	PostDTO post = new PostDTO(
//						"Nôp",		//title
//						"asd",		//description
//						20000,		//price
//						20,			//area
//						"asd",		//address
//						"images/test1.jpg",			//images
//						"1",		//user_id
//						"1",		//category_id
//						"1",			//district_id
//						"",			//phuongxa_id
//						"0123456");			//phone
//								
//	try {
//		dao.NewPost(post);
//	} catch (SQLException e) {
//		// TODO Auto-generated catch block
//		e.printStackTrace();
//	}
//	}



//	
//	public static void main(String[] args) {
//		System.out.println(getDate("2022-10-18 14:29:37.320"));
//	}
}
