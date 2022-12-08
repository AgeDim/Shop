package com.example.server.controllers;

import com.example.server.services.ShopService;
import com.example.server.services.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class StorageController {

    @Autowired
    private StorageService storageService;

    @GetMapping("/storage")
    public ResponseEntity<?> getStoragesIdList(){
        return ResponseEntity.ok(storageService.getShopsIdList().toArray());
    }
}
