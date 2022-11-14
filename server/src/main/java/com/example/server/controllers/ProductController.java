package com.example.server.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {

    @PostMapping("/product")
    public ResponseEntity<?> getProducts() throws Exception {
        try {
            return ResponseEntity.ok("HUY");
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Ошибка.");
        }
    }
}
