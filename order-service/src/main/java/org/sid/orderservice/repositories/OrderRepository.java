package org.sid.orderservice.repositories;

import org.sid.orderservice.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RepositoryRestResource
public interface OrderRepository extends JpaRepository<Order,Long> {
    @RestResource(path = "/byCustomer")
    List<Order> findByCustomerId(@Param("customerId") Long customerId);
}
