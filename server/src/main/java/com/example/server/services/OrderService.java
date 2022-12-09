package com.example.server.services;

import com.example.server.POJO.OrderRequest;
import com.example.server.POJO.OrderResponse;
import com.example.server.POJO.UpdateStatusRequest;
import com.example.server.entities.OrderEntity;
import com.example.server.entities.ProductEntity;
import com.example.server.entities.UserEntity;
import com.example.server.entities.enums.OrderStatus;
import com.example.server.exceptions.UserNotFoundException;
import com.example.server.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductShopMatchRepository productShopMatchRepository;


    public OrderEntity addOrder(OrderRequest order) throws SQLException {
        return orderRepository.save(convertOrderRequestToEntity(order));
    }

    public List<OrderResponse> getOrdersByEmail(String email) throws UserNotFoundException{
        UserEntity user = null;
        user = userRepository.findByEmail(email);
        if (user != null) {
            List<OrderEntity> list = orderRepository.getOrderEntitiesByUserId(user.getId());
            List<OrderResponse> result = new ArrayList<>();
            list.forEach(o -> result.add(convertOrderEntityToOrderResponse(o)));
            return result;
        } else {
            throw new UserNotFoundException(email);
        }
    }

    public OrderEntity updateOrderStatus(UpdateStatusRequest request){
        OrderEntity entity = orderRepository.getOrderEntityById(request.getOrderId().longValue());
        entity.setStatus(request.getStatus());
        return orderRepository.save(entity);
    }

    private OrderResponse convertOrderEntityToOrderResponse(OrderEntity entity){
        OrderResponse response = new OrderResponse();
        Map<String, Integer> prodMap = new HashMap<>();
        Double cost = 0d;
        for (int i = 0; i < entity.getProductsId().length; i++){
            ProductEntity product = productRepository
                    .getProductEntityById(entity.getProductsId()[0].longValue());
            prodMap.put(product.getName(), entity.getAmounts()[i]);
            if (entity.getShopId() == null){
                cost += product.getDefaultPrice()*entity.getAmounts()[i];
            } else{
                cost += productShopMatchRepository
                        .getProductPriceByProductAndShopIds(entity.getProductsId()[0].longValue(), entity.getShopId());
            }
        }
        response.setProdNameToAmount(prodMap);
        response.setCost(cost);
        response.setId(entity.getId());
        response.setTime(entity.getOrderTime());
        return response;
    }
    private OrderEntity convertOrderRequestToEntity(OrderRequest request){
        OrderEntity result = new OrderEntity();
        result.setUserId(userRepository.findByEmail(request.getEmail()).getId());
        result.setProductsId(request.getProductsId().toArray(new Integer[0]));
        result.setOrderTime(LocalDateTime.now());
        result.setAmounts(request.getAmounts().toArray(new Integer[0]));
        if (request.getShopId() != null){
            result.setShopId(request.getShopId().longValue());
            result.setStorageId(null);
        } else {
            result.setStorageId(request.getStorageId().longValue());
            result.setShopId(null);
        }
        result.setStatus(OrderStatus.valueOf("inProcess").getCode());
        return result;
    }
}
