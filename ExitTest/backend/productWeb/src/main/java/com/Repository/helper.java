package com.Repository;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface helper {

	
	String uploadImage(String path, MultipartFile file) throws IOException;

	InputStream getReso(String path, String filename) throws FileNotFoundException;

}
