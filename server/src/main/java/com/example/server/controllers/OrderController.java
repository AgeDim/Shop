package com.example.server.controllers;

import com.example.server.POJO.OrderRequest;
import com.example.server.exceptions.UserNotFoundException;
import com.example.server.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/order/submit")
    public ResponseEntity<?> submitOrder(@RequestBody OrderRequest order){
        return ResponseEntity.ok(orderService.addOrder(order));
    }
    @GetMapping("/order/{email}")
    public ResponseEntity<?> getOrdersByEmail(@PathVariable String email){
        try {
            return ResponseEntity.ok(orderService.getOrdersByEmail(email));
        } catch (UserNotFoundException exception){
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }
}
