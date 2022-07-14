
package com.websopti.ngosys.dto;
import java.util.Date;

public interface DonerPageableResponse {

	public Long getId();

	public String getDonerName();

	public Long getContactNumber();

	public String getDonerEmail();

	public java.sql.Date getDateOfDonation();

	public String getTypeofDonation();

	public String getReason();

	public String getDonationDescription();

	public Boolean getisPresent();

}
