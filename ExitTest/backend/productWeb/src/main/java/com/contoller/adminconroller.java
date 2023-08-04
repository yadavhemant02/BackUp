package com.contoller;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.hibernate.engine.jdbc.StreamUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.Model.adminlogin;
import com.Model.adminmodel;
import com.Repository.loginrepo;
import com.Service.adminloginn;
import com.Service.adminservice;
import com.Service.onupload;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class adminconroller {
	
	@Autowired
	private adminloginn servicelogin;
	
	@Autowired
	private adminservice adminservice;
	
	@Autowired
	private onupload sf;
	
	@Value("${project.image}")
	private String Path;
	
	@PostMapping("/product")
	public adminmodel adde(@RequestBody adminmodel ss){
		
		
		System.out.println(ss.getImage());
		adminmodel list = (adminmodel) this.adminservice.adddata(ss);
		return list;
	}
	
	@GetMapping("/productget")
	public List<adminmodel> take(){
		List<adminmodel> list = (List<adminmodel>) this.adminservice.show();
		return list;
	}
	
	@GetMapping("/productget/{id}")
	public Optional<adminmodel> single(@PathVariable int id) {
		Optional<adminmodel> list = (Optional<adminmodel>) this.adminservice.getsingle(id);
        return list;
	}
	
	@PutMapping("/product/{id}")
    public String imageupload(@PathVariable("id") int aa, @RequestParam("file") MultipartFile ff) {
		
		adminmodel dd = new adminmodel();
		String name = ff.getOriginalFilename();
		dd.setImage(name);
		this.adminservice.update(name,aa);
		return "good";
		
	} 	
	
	@PostMapping("/onupload")
	public  String fileupload(@RequestParam("file") MultipartFile ff) throws IOException{
		
		String ss = (String) this.sf.uploadImage(Path, ff);
		return ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(ff.getOriginalFilename()).toUriString();
		
	}
	
	 @GetMapping(value="/image/{filename}" )
	    public  void getImage(@PathVariable("filename") String nn,HttpServletResponse respons) throws IOException {
	        //InputStream in = getClass()
	          //.getResourceAsStream("images/Screenshot (1).png");
	        //String file = "Screenshot (1).png";
	        //InputStream is = file.getInputStream();
	        //byte data[] = new byte[in.available()];
	    	
	    	InputStream resource = this.sf.getReso(Path, nn);
	    	respons.setContentType(nn);
	    	StreamUtils.copy(resource,respons.getOutputStream());
	        
	    } 
	 
	 @GetMapping("/adminlogin")
	 public List<adminlogin> fch() {
		 List<adminlogin> ss = (List<adminlogin>) this.servicelogin.fech();
		 return ss;
	 }
	 
	 @GetMapping("/findbyname")
	 public adminmodel findby(
			                  @RequestParam("productcode") int procode)
			                  
	 {
		 
		 adminmodel aa = (adminmodel) this.adminservice.unick(procode);
		 
		 return aa;
		 
	 }
	 
	 @DeleteMapping("/delete/{id}")
	 public String deleted(@PathVariable("id") int id) {
		 
		 this.adminservice.delete(id);
		 
		 return "good";
		 
	 }
	
	

}
