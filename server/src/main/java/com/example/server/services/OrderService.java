package com.example.server.services;

import com.example.server.POJO.OrderRequest;
import com.example.server.entities.OrderEntity;
import com.example.server.entities.UserEntity;
import com.example.server.entities.enums.OrderStatus;
import com.example.server.exceptions.UserNotFoundException;
import com.example.server.repositories.OrderRepository;
import com.example.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    public OrderEntity addOrder(OrderRequest order){
        return orderRepository.save(convertOrderRequestToEntity(order));
    }

    public List<OrderEntity> getOrdersByEmail(String email) throws UserNotFoundException{
        UserEntity user = null;
        user = userRepository.findByEmail(email);
        if (user != null) {
            return orderRepository.getOrderEntitiesByUserId(user.getId());
        } else {
            throw new UserNotFoundException(email);
        }
    }
    private OrderEntity convertOrderRequestToEntity(OrderRequest request){
        OrderEntity result = new OrderEntity();
        result.setUserId(userRepository.findByEmail(request.getEmail()).getId());
        result.setProductsId(request.getProductsId().toArray(new Integer[0]));
        System.out.println(result.getProductsId());
        result.setOrderTime(LocalDateTime.now());
        result.setAmounts(request.getAmounts().toArray(new Integer[0]));
        if (request.getShopId() != null){
            result.setShopId(request.getShopId());
            result.setStorageId(null);
        } else {
            result.setStorageId(request.getStorageId());
            result.setShopId(null);
        }
        result.setStatus(OrderStatus.valueOf("inProcess").getCode());
        return result;
    }
}
