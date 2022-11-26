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

    @GetMapping("/product/{type}")
    public ResponseEntity<?> getProductsByType(@PathVariable String type){
        try {
            if (type.equals("top")) {
                return ResponseEntity.ok(productService.getProductTop());
            } else {
                return ResponseEntity.ok(productService.getProductByType(type));
            }
        } catch (IllegalArgumentException exception){
            System.err.println(exception.getMessage());
            return ResponseEntity.badRequest().body("Unknown type.");
        }
    }

    @PostMapping("/product/add")
    public ResponseEntity<?> addNewProduct(){
        return ResponseEntity.ok("");
    }
}
