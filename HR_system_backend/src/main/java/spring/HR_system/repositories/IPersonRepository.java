package spring.HR_system.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import spring.HR_system.models.Person;

public interface IPersonRepository extends JpaRepository<Person, Integer> {
}
