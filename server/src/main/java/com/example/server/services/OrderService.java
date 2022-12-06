package com.example.server.services;

import com.example.server.POJO.OrderRequest;
import com.example.server.entities.OrderEntity;
import com.example.server.entities.enums.OrderStatus;
import com.example.server.repositories.OrderRepository;
import com.example.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    public OrderEntity addOrder(OrderRequest order){
        return orderRepository.save(convertOrderRequestToEntity(order));
    }

    private OrderEntity convertOrderRequestToEntity(OrderRequest request){
        OrderEntity result = new OrderEntity();
        result.setUserId(userRepository.findByEmail(request.getEmail()).getId());
        result.setProductsId(request.getProductsId());
        result.setOrderTime(LocalDateTime.now());
        result.setAmounts(request.getAmounts());
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
