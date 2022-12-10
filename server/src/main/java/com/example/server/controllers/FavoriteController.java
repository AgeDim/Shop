package com.example.server.controllers;

import com.example.server.POJO.FavoriteSaveRequest;
import com.example.server.exceptions.UserNotFoundException;
import com.example.server.services.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    @PostMapping("/favorite/add")
    public ResponseEntity<?> addFavoriteToUser(@RequestBody FavoriteSaveRequest request) {
        try {
            return ResponseEntity.ok(favoriteService.addFavoriteToUser(request));
        } catch (UserNotFoundException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/favorite/{email}")
    public ResponseEntity<?> getFavoriteByUser(@PathVariable String email) {
        try {
            return ResponseEntity.ok(favoriteService.getFavoriteByUser(email));
        } catch (UserNotFoundException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
