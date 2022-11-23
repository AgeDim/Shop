package com.example.server.controllers;

import com.example.server.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductService productService;
    @GetMapping("/product")
    public ResponseEntity<?> getProduct(){
        try {
            return ResponseEntity.ok(productService.getTopProducts());
        } catch (Exception e){
            System.err.println(e.getMessage());
            return ResponseEntity.badRequest().body("Ошибка.");
        }
    }
}
