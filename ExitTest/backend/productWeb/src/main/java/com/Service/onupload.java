package com.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import com.Repository.helper;

@Service
public class onupload implements helper{
	

	@Override
	public String uploadImage(String path, MultipartFile file) throws IOException {
		//filename
		String name = file.getOriginalFilename();
		
		System.out.println(name);
		System.out.println(file);
		System.out.println(file);
		
		
		//full path
		String filePath = path + File.separator + name;
		
		
		
		
		//create folder if not created 
		File f = new File(path);
		if(!f.exists()) {
			f.mkdir();
		}
		
		//copy
		
		Files.copy(file.getInputStream(), Paths.get(filePath));
		return filePath;
	}
	
	@Override
	public InputStream getReso(String path,String filename) throws FileNotFoundException {
		
		String fullpath = path + File.separator+filename;
		InputStream is = new FileInputStream(fullpath);
		return is;
		
	}

	

}
