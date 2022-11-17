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
    public ResponseEntity<?> getProducts(){
        try {
            return ResponseEntity.ok("ok");
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Ошибка.");
        }
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<?> getProductById(@PathVariable String id){
        try {
            return ResponseEntity.ok(productService.getProductById(Long.valueOf(id)));
        }catch (NumberFormatException e){
            return ResponseEntity.badRequest().body("Неверный формат id.");
        } catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Ошибка.");
        }
    }
}
