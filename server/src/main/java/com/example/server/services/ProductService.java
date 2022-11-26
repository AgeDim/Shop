package com.example.server.services;

import com.example.server.entities.ProductEntity;
import com.example.server.entities.enums.ProductType;
import com.example.server.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<ProductEntity> getProductTop(){
        return productRepository.getTopProducts();
    }

    public List<ProductEntity> getProductByType(String type) throws IllegalArgumentException{
        return productRepository.getProductEntitiesByProductType(ProductType.valueOf(type));
    }
}
