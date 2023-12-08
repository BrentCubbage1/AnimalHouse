package Brent.Cubbbage.PracticeSpringCRUD.Controller;

import Brent.Cubbbage.PracticeSpringCRUD.Model.Cat;
import Brent.Cubbbage.PracticeSpringCRUD.Service.CatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@Controller
@RequestMapping(value = "/cat")
public class CatController {

    private CatService service;

    @Autowired
    public CatController(CatService service) {
        this.service = service;
    }

    @PostMapping(value = "/create")
    public ResponseEntity<Cat> create(@RequestBody Cat cat){
        service.createCat(cat);
        return ResponseEntity.status(HttpStatus.CREATED).body(cat);
    }

    @GetMapping(value = "/read")
    public ResponseEntity<List<Cat>> readAll(){
        List<Cat> catList = service.findAllCats();
        return ResponseEntity.status(HttpStatus.OK).body(catList);
    }

    @GetMapping(value = "/read/{id}")
    public ResponseEntity<Cat> readById(@PathVariable Long id){
        Cat readCat = service.findCat(id);
        return ResponseEntity.status(HttpStatus.OK).body(readCat);
    }

    @PutMapping(value = "/update/{id}")
    public ResponseEntity<Cat> updateCat(@PathVariable Long id, @RequestBody Cat cat){
        Cat updatedCat = service.updateCat(id, cat);
        return ResponseEntity.status(HttpStatus.OK).body(updatedCat);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<Cat> deleteCat(@PathVariable Long id){
        Cat deletedCat = service.deleteCat(id);
        return ResponseEntity.status(HttpStatus.OK).body(deletedCat);
    }



}
