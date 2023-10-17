package Brent.Cubbbage.PracticeSpringCRUD.Repository;

import Brent.Cubbbage.PracticeSpringCRUD.Model.Cat;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CatRepository extends CrudRepository<Cat, Long> {


}
