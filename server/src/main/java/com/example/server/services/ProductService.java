package com.example.server.services;

import com.example.server.POJO.ProductRequest;
import com.example.server.entities.ProductEntity;
import com.example.server.entities.enums.ProductType;
import com.example.server.repositories.ProductRepository;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<ProductEntity> getProductTop(){
        return productRepository.getTopProducts();
    }

    public List<ProductEntity> getProductByType(String type) throws IllegalArgumentException{
        return productRepository.getProductEntitiesByProductType(ProductType.valueOf(type).getCode());
    }

    public ProductEntity addProduct(ProductRequest request) throws IOException {
        return productRepository.save(convertRequestToEntity(request));
    }

    private ProductEntity convertRequestToEntity(ProductRequest request) throws IOException{
        ProductEntity result = new ProductEntity();
        result.setName(request.getName());
        result.setProductType(ProductType.valueOf(request.getType()).getCode());
        result.setDefaultPrice(request.getPrice());
        String description = FileUtils.readFileToString(request.getDescription(), StandardCharsets.UTF_8);
        description = description.replaceAll(":", ",");
        result.setDescription(description);
        result.setAmount(0);
        result.setImgName(request.getImg().getName());
        FileInputStream is = new FileInputStream(request.getImg());
        byte[] imgBytes = IOUtils.toByteArray(is);
        result.setImg(imgBytes);
        is.close();
        return result;
    }
}
