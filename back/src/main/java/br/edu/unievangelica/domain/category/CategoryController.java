package br.edu.unievangelica.domain.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public class CategoryController  {

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    CategoryService categoryService;

    public List<Category> findAll(){
        return  categoryRepository.findAll();
    }

    public Category findById(long id){
        return categoryRepository.findOne(id);
    }

    public Boolean delete(long id){
        categoryRepository.delete(id);
        return true;
    }

    public ResponseEntity<?> save(@Validated @RequestBody Category category){
        return jsonResponse(categoryService.save(category));
    }


}
