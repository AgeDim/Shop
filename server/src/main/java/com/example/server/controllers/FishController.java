package com.example.server.controllers;

import com.example.server.POJO.FishRequest;
import com.example.server.services.FishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class FishController {

    @Autowired
    private FishService fishService;

    @GetMapping("/fish/{id}")
    public ResponseEntity<?> getFishById(@PathVariable String id){
        try {
            return ResponseEntity.ok(fishService.getProductsOfFishByFishId(Long.valueOf(id)));
        } catch (NumberFormatException e){
            return ResponseEntity.badRequest().body("Incorrect format of id.");
        }
    }

    @PostMapping("/fish/add")
    public ResponseEntity<?> addFish(@RequestBody FishRequest request){
        return ResponseEntity.ok(fishService.addFish(request));
    }

    @GetMapping("/fish")
    public ResponseEntity<?> getFishes(){
        return ResponseEntity.ok(fishService.getFishes());
    }
}
