package com.example.server.controllers;

import com.example.server.POJO.ProductRequest;
import com.example.server.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

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

    @PostMapping(value = "/product/add", consumes = {"multipart/form-data"})
    public ResponseEntity<?> addNewProduct(@ModelAttribute ProductRequest product){
        try {
            return ResponseEntity.ok(productService.addProduct(product));
        } catch (IOException exception){
            return ResponseEntity.badRequest().body("Troubles with received files.");
        }
    }
    @GetMapping("/product/{place}/{placeId}")
    public ResponseEntity<?> getProductFromShopOrStorage(@PathVariable String place, @PathVariable String placeId){
        try {
            Long id = Long.parseLong(placeId);
            if (place.equals("shop")) {
                return ResponseEntity.ok(productService.getProductsFromShop(id));
            } else {
                return ResponseEntity.ok(productService.getProductsFromStorage(id));
            }
        } catch (NumberFormatException exception){
            return ResponseEntity.badRequest().body("Place id is incorrect.");
        }
    }
}
