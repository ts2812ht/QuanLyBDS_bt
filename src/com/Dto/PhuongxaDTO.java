package Dto;

public class PhuongxaDTO {
	private String id;
	private String name;
	private String district_id;
	
	
	
	@Override
	public String toString() {
		return "PhuongxaDTO [id=" + id + ", name=" + name + ", district_id=" + district_id + "]";
	}

	public PhuongxaDTO(String id, String name, String district_id) {
		super();
		this.id = id;
		this.name = name;
		this.district_id = district_id;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDistrict_id() {
		return district_id;
	}
	public void setDistrict_id(String district_id) {
		this.district_id = district_id;
	}
	
	
	
	
}
