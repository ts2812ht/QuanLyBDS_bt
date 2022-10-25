package Dto;

public class DistrictDTO {
	private String id;
	private String name;
	
	
	
	@Override
	public String toString() {
		return "DistrictDTO [id=" + id + ", name=" + name + "]";
	}
	
	public DistrictDTO(String id, String name) {
		super();
		this.id = id;
		this.name = name;
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
}
