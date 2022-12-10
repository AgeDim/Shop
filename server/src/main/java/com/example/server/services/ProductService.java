package com.example.server.services;

import com.example.server.POJO.ProductRequest;
import com.example.server.POJO.ProductResponse;
import com.example.server.POJO.UpdateProductRequest;
import com.example.server.entities.ProductEntity;
import com.example.server.entities.ProductShopMatchEntity;
import com.example.server.entities.ProductStorageMatchEntity;
import com.example.server.entities.enums.ProductType;
import com.example.server.repositories.ProductRepository;
import com.example.server.repositories.ProductShopMatchRepository;
import com.example.server.repositories.ProductStorageMatchRepository;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.io.File;


@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductShopMatchRepository productShopMatchRepository;

    @Autowired
    private ProductStorageMatchRepository productStorageMatchRepository;

    public List<ProductResponse> getProductTop() {
        List<ProductEntity> temp = productRepository.getTopProducts();
        List<ProductResponse> result = new ArrayList<>();
        convertEntityToResponse(temp, result);
        return result;
    }

    public List<ProductResponse> getProductByType(String type) throws IllegalArgumentException {
        List<ProductEntity> temp = productRepository.getProductEntitiesByProductType(ProductType.valueOf(type).getCode());
        List<ProductResponse> result = new ArrayList<>();
        convertEntityToResponse(temp, result);
        return result;
    }

    public ProductEntity addProduct(ProductRequest request) throws IOException {
        return productRepository.save(convertRequestToEntity(request));
    }

    public List<ProductResponse> getProductsFromStorage(Long storageId) {
        List<ProductStorageMatchEntity> list = productStorageMatchRepository.getProductStorageMatchEntitiesByStorageId(storageId);
        List<ProductResponse> result = new ArrayList<>();
        list.forEach(o -> result.add(new ProductResponse(o.getProductId(), o.getProductAmount())));
        return result;
    }

    public List<ProductResponse> getProductsFromShop(Long shopId) {
        List<ProductShopMatchEntity> list = productShopMatchRepository.getProductShopMatchEntitiesByShopId(shopId);
        List<ProductResponse> result = new ArrayList<>();
        list.forEach(o -> result.add(new ProductResponse(o.getProductId(), o.getProductAmount())));
        return result;
    }

    public ProductShopMatchEntity updateProductsAmountInShop(UpdateProductRequest request) {
        ProductShopMatchEntity entity = productShopMatchRepository.getProductShopMatchEntityByShopIdAndProductId(request.getPlaceId(), request.getProductId());
        entity.setProductAmount(request.getAmount());
        return productShopMatchRepository.save(entity);
    }

    public ProductStorageMatchEntity updateProductsAmountInStorage(UpdateProductRequest request) {
        ProductStorageMatchEntity entity = productStorageMatchRepository.getProductStorageMatchEntityByStorageIdAndProductId(request.getPlaceId(), request.getProductId());
        entity.setProductAmount(request.getAmount());
        return productStorageMatchRepository.save(entity);
    }

    public ProductEntity getProductById(Long id) {
        return productRepository.getProductEntityById(id);
    }

    private ProductEntity convertRequestToEntity(ProductRequest request) throws IOException {
        ProductEntity result = new ProductEntity();
        result.setName(request.getName());
        result.setProductType(ProductType.valueOf(request.getType()).getCode());
        result.setDefaultPrice(request.getPrice());
        String description = FileUtils.readFileToString(convertMultiPartFileToFile(request.getDescription()), StandardCharsets.UTF_8);
        description = description.replaceAll(":", ",");
        result.setDescription(description);
        result.setAmount(0);
        result.setImgName(request.getImg().getName());
        FileInputStream is = new FileInputStream(convertMultiPartFileToFile(request.getImg()));
        byte[] imgBytes = IOUtils.toByteArray(is);
        result.setImg(imgBytes);
        is.close();
        return result;
    }

    private File convertMultiPartFileToFile(MultipartFile file) throws IOException {
        File result = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(result);
        fos.write(file.getBytes());
        fos.close();
        return result;
    }

    private void convertEntityToResponse(List<ProductEntity> entityList, List<ProductResponse> responseList) {
        entityList.forEach(o -> responseList.add(new ProductResponse(o.getId(), o.getName(), o.getProductType(), o.getDefaultPrice(), o.getDescription(), o.getImgName(), o.getImg())));
    }
}
