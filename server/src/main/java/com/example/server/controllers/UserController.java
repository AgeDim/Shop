package com.example.server.controllers;

import com.example.server.POJO.AuthRequest;
import com.example.server.exceptions.NotHavePermissionException;
import com.example.server.exceptions.UserAlreadyExistsException;
import com.example.server.exceptions.WrongPasswordException;
import com.example.server.security.JwtUtils;
import com.example.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    JwtUtils jwtUtils;

    //TODO Delete printing traces
    @PostMapping("/reg")
    public ResponseEntity<?> register(@RequestBody AuthRequest user) {
        try {
            userService.register(user);
            return ResponseEntity.ok(jwtUtils.generateToken(user.getEmail()));
        } catch (UserAlreadyExistsException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("An error occurred on the server");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest user) {
        try {
            userService.login(user);
            return ResponseEntity.ok(jwtUtils.generateToken(user.getEmail()));
        } catch (UserAlreadyExistsException | WrongPasswordException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/checkModer/{email}")
    public ResponseEntity<?> checkModerRights(@PathVariable String email) {
        try {
            userService.checkModerRights(email);
            return ResponseEntity.ok("Права доступа верны.");
        } catch (NotHavePermissionException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/checkAdmin/{email}")
    public ResponseEntity<?> checkAdminRights(@PathVariable String email) {
        try {
            userService.checkAdminRights(email);
            return ResponseEntity.ok("Права доступа верны.");
        } catch (NotHavePermissionException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    //Я не понимаю
    @GetMapping("/check")
    public ResponseEntity<?> check(@PathVariable String email){
        return ResponseEntity.ok(jwtUtils.generateToken(email));
    }

}
