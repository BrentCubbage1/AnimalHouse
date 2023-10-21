package Brent.Cubbbage.PracticeSpringCRUD.Repository;

import Brent.Cubbbage.PracticeSpringCRUD.Model.Dog;
import org.springframework.data.repository.CrudRepository;

public interface DogRepository extends CrudRepository<Dog, Long> {
}
