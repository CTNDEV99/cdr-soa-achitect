package com.project.in_api.Repository;

import com.project.in_api.Model.AbPostpaid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AbPostpaidRepository extends JpaRepository<AbPostpaid, Long> {
}
